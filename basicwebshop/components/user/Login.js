"use client";

import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Button from '../elements/buttons/Btn';

import styles from './Auth.module.css';

export default function Login({ isOpen, onClose, onSwitch }) {
    const [isConnected, setIsConnected] = useState(false);
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        if (!username || !password) {
            alert("Merci de remplir tous les champs.");
            return;
        }
        setIsConnected(true);
    };

    const handleLogout = () => {
        setIsConnected(false);
        setUsername('');
        setPassword('');
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

                
                <h2 className={styles.title}> {isConnected ? `Bienvenue ${username}` : "Connexion"} </h2>

                <div className={styles.content}>
                    {!isConnected && (
                        <>
                            <div className={styles.inputContainer}>
                                <label>Nom d'utilisateur :</label>
                                <input type="text" value={username} onChange={(e) => setUsername(e.target.value)}/>
                            </div>

                            <div className={styles.inputContainer}>
                                <label>Mot de passe :</label>
                                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
                            </div>
                        </>
                    )}

                    <button className={styles.button} onClick={isConnected ? handleLogout : handleLogin}>
                        {isConnected ? "Se déconnecter" : "Se connecter"}
                    </button>

                    {!isConnected && (
                        <>
                            <p className={styles.link}>Mot de passe oublié ?</p>
                            <p className={styles.link} onClick={onSwitch}>Vous ne possédez pas encore de compte ?</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
