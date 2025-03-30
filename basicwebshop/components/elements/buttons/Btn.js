import React from 'react';
import clsx from 'clsx';
import styles from './Button.module.css';

export default function Button({ 
    children, 
    size = 'medium', 
    variant = 'primary', // Ajout de la prop `variant`
    className, 
    ...props 
}) {
    const buttonClass = clsx(
        styles.button, // Styles de base
        {
            [styles.fullScreen]: size === 'large',
            [styles.smallScreen]: size === 'small',
            [styles.addToCard_btn]: variant === 'addToCart',
            [styles.goBack_btn]: variant === 'goBack',
            [styles.closeModal_btn]: variant === 'closeModal',
        },
        className // Permet toujours d'ajouter une classe supplémentaire si nécessaire
    );

    return (
        <button className={buttonClass} {...props}>
            {children}
        </button>
    );
}
