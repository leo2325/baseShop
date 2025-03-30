"use client";

import { useState } from 'react';
import Login from './Login';
import Register from './Register';

export default function AuthToggle({ isOpen, onClose }) {
    // Visibilité Login ou Register
    const [isLogin, setIsLogin] = useState(true); 
    // Passer à Register
    const handleSwitchToRegister = () => {
        setIsLogin(false); 
    };
    // Passer à Login
    const handleSwitchToLogin = () => {
        setIsLogin(true); 
    };
    // Si isOpen est false, ne rien afficher
    if (!isOpen) return null; 

    return (
        <div>
            {/* Modal de Connexion */}
            <Login
                isOpen={isOpen && isLogin}
                onClose={onClose}
                onSwitch={handleSwitchToRegister}
            />
            {/* Modal d'Inscription */}
            <Register
                isOpen={isOpen && !isLogin}
                onClose={onClose}
                onSwitch={handleSwitchToLogin}
            />
        </div>
    );
}
