import React from 'react';
import clsx from 'clsx';
import styles from './btn.module.css';

export default function Button({
    children,
    size = 'medium',
    variant = 'primary',
    className,
    ...props
}) {
    const buttonClass = clsx(
        styles.button,
        styles[size],
        styles[variant],
        className
    );

    return (
        <button className={buttonClass} {...props}>
            {children}
        </button>
    );
}
