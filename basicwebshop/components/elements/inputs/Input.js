"use client";

import clsx from "clsx";
import styles from "./input.module.css";

export default function Input({
    label,
    name,
    type = "text",
    value,
    onChange,
    placeholder = "",
    required = false,
    disabled = false,
    autoComplete = "off",
    layout = "column",
    className = "",
    ...props
}) {
    const containerClass = clsx(
        styles.inputContainer,
        styles[layout],
        className
    );

    return (
        <div className={containerClass}>
            {label && (
                <label htmlFor={name} className={styles.label}>
                    {label}
                </label>
            )}
            <input
                id={name}
                name={name}
                type={type}
                value={value}
                onChange={onChange}
                placeholder={placeholder}
                required={required}
                disabled={disabled}
                autoComplete={autoComplete}
                className={styles.input}
                {...props}
            />
        </div>
    );
}
