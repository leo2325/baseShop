"use client";

import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { ShoppingBagIcon } from '@heroicons/react/24/outline'; 

import Button from '../elements/buttons/Btn';
import Cart from './Cart';
import styles from './Cart.module.css';

const CartIcon = () => {
    const [isOpen, setIsOpen] = useState(false);    
    const cart = useSelector((state) => state.cart.cart) || [];
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);

    return (
        <div className={styles.cartIconContainer}>
            <div className={styles.iconWrapper} onClick={() => setIsOpen(!isOpen)}>
                <ShoppingBagIcon className={styles.icon} />
                {totalItems > 0 && (
                    <span className={styles.itemCount}>{totalItems}</span>
                )}
            </div>

            {isOpen && (
                <div className={styles.modalOverlay} onClick={() => setIsOpen(false)}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <div className={styles.modaleHeader_container}>
                            <Button variant="closeModal" onClick={() => setIsOpen(false)}>
                                Cacher le panier
                                <FontAwesomeIcon icon={faXmark} className="icon"/> 
                            </Button>
                        </div>

                        <Cart />
                    </div>
                </div>
            )}
        </div>
    );
};

export default CartIcon;
