"use client";

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Button from '../elements/buttons/Btn';

import styles from './Auth.module.css';

export default function Register({ isOpen, onClose, onSwitch }) {
    const [formData, setFormData] = useState({
        "Nom d'utilisateur": '',
        "Mot de passe": '',
        "Nom": '',
        "Prénom": '',
        "Adresse": '',
        "Téléphone": '',
        "Email": ''
    });
    
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleRegister = () => {
        alert("Inscription réussie !");
        onSwitch();  // Retour à la page de connexion
    };

    if (!isOpen) return null;

    return (
        <div className={styles.overlay}>
            <div className={styles.popup}>
                <div className={styles.modaleHeader_container}>
                    <Button variant="closeModal" onClick={onClose}>
                        <p>Cacher l'utilisateur</p>
                        <FontAwesomeIcon icon={faXmark} className="icon"/> 
                    </Button>
                </div>
                <h2 className={styles.title}>Inscription</h2>

                <div className={styles.content}>
                    {Object.keys(formData).map((field) => (
                        <div key={field} className={styles.inputContainer}>
                            <label>{field.charAt(0).toUpperCase() + field.slice(1)} :</label>
                            <input
                                type={field === "password" ? "password" : "text"}
                                name={field}
                                value={formData[field]}
                                onChange={handleChange}
                            />
                        </div>
                    ))}

                    <button className={styles.button} onClick={handleRegister}>
                        S'inscrire
                    </button>

                    <p className={styles.link} onClick={() => {onSwitch();}}>Déjà inscrit ?</p>
                </div>
            </div>
        </div>
    );
}
