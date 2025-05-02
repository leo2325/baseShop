"use client";

import { useEffect } from "react";
import Button from "../buttons/Btn";
import styles from "./modal.module.css";
import useDisableBodyScroll from "@/hooks/useDisableBodyScroll"; // nouveau hook

export default function Modal({ isOpen, onClose, title, children }) {
    useDisableBodyScroll(isOpen); // hook utilisé ici

    useEffect(() => {
        const handleEsc = (e) => {
            if (e.key === "Escape") onClose();
        };

        if (isOpen) {
            window.addEventListener("keydown", handleEsc);
        }

        return () => {
            window.removeEventListener("keydown", handleEsc);
        };
    }, [isOpen, onClose]);

    if (!isOpen) return null;

    return (
        <div 
            className={styles.overlay} 
            onClick={onClose}
            role="dialog" 
            aria-modal="true"
            aria-labelledby="modal-title"
        >
            <div 
                className={styles.popup} 
                onClick={(e) => e.stopPropagation()}
            >
                <div className={styles.modalHeader}>
                    <h2 id="modal-title" className={styles.modalTitle}>
                        {title}
                    </h2>
                    <Button 
                        variant="closeModal" 
                        onClick={onClose} 
                        aria-label="Fermer la modale"
                    >
                        &times;
                    </Button>
                </div>
                
                <div className={styles.content}>
                    {children}
                </div>
            </div>
        </div>
    );
}
