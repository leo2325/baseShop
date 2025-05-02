import React from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping } from "@fortawesome/free-solid-svg-icons";
import Modal from "../elements/modals/Modal";
import Button from '../elements/buttons/Btn';
import Cart from './Cart';
import { useModal } from '../../hooks/useModal';
import styles from './cart.module.css';

const CartIcon = () => {
    const { isOpen, openModal, closeModal } = useModal();
    const cart = useSelector((state) => state.cart.cart) || [];
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    const toggleModal = () => {
        isOpen ? closeModal() : openModal();
    };

    return (
        <div className={styles.cartIconContainer}>
            <Button className={styles.iconWrapper} onClick={toggleModal}>
                <FontAwesomeIcon icon={faBagShopping} className={styles.icon} />
                {totalItems > 0 && (
                    <span className={styles.itemCount}>{totalItems}</span>
                )}
            </Button>

            {isOpen && (
                <Modal isOpen={isOpen} onClose={closeModal} title="Mon Panier">
                    <div className={styles.modalContent}>
                        <Cart onCloseCart={closeModal} />
                    </div>
                </Modal>
            )}
        </div>
    );
};

export default CartIcon;
