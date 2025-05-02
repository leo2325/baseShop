"use client";
import { useState } from "react";
import Input from "../elements/inputs/Input";
import Button from "../elements/buttons/Btn";
import styles from "./auth.module.css";
import usePasswordToggle from '@/hooks/usePasswordToggle';

export default function Register({ onSwitch }) {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: '',
        confirmPassword: '',
        civility: '',
        lastName: '',
        firstName: '',
        address: '',
        mobile: ''
    });
    const [errorMessage, setErrorMessage] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const { inputType, showPassword, togglePassword } = usePasswordToggle();
    const isValidEmail = (email) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    const isValidPhone = (phone) => /^0[6-7]\d{8}$/.test(phone); 
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };
    const handleRegister = async () => {
        setErrorMessage("");
        const requiredFields = ["username", "password", "lastName", "firstName", "address", "mobile", "email"];
        for (let field of requiredFields) {
            if (!formData[field]) {
                setErrorMessage("Merci de remplir tous les champs.");
                return;
            }
        }
        if (!formData.civility) {
            setErrorMessage("Veuillez choisir une civilité.");
            return;
        }
        if (formData.password !== formData.confirmPassword) {
            setErrorMessage("Les mots de passe ne correspondent pas.");
            return;
        }          
        setIsSubmitting(true);
        try {
            console.log("Utilisateur inscrit :", formData);
            alert("Inscription réussie !");
            onSwitch(); 
        } catch (error) {
            setErrorMessage("Une erreur est survenue, veuillez réessayer.");
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className={styles.content}>
            <Input 
                label="Email *" 
                name="email" 
                type="email" 
                value={formData.email} 
                onChange={handleChange} 
                layout="column" 
            />
            <Input
                label="Nom d'utilisateur *"
                name="username"
                value={formData.username}
                onChange={handleChange}
                layout="column"
            />
            <Input
                label="Mot de passe *"
                name="password"
                type={inputType}
                value={formData.password}
                onChange={handleChange}
                layout="column"
            />
            <Input
                label="Confirmer"
                name="confirmPassword"
                type="password"
                value={formData.confirmPassword}
                onChange={handleChange}
                layout="column"
            />
            <div className={styles.inputContainer}>
                <label>Civilité :</label>
                <div className={styles.radioGroup}>
                    {["M", "Mme", "Mlle"].map((option) => (
                        <label key={option} className={styles.radioLabel}>
                            <input
                                type="radio"
                                name="civility"
                                value={option}
                                checked={formData.civility === option}
                                onChange={handleChange}
                            />
                            {option}
                        </label>
                    ))}
                </div>
            </div>
            <Input label="Nom *" name="lastName" value={formData.lastName} onChange={handleChange} layout="column" />
            <Input label="Prénom *" name="firstName" value={formData.firstName} onChange={handleChange} layout="column" />
            <Input label="Adresse *" name="address" value={formData.address} onChange={handleChange} layout="column" />
            <Input label="Téléphone *" name="mobile" value={formData.mobile} onChange={handleChange} layout="column" />
            {errorMessage && <p className={styles.error}>{errorMessage}</p>}
            <p>* Champs obligatoires.</p>
            <Button
                variant="validationStyle"
                size="medium"
                onClick={handleRegister}
                disabled={isSubmitting}
            >
                {isSubmitting ? "Inscription..." : "S'inscrire"}
            </Button>
            <Button variant="link" size="medium" onClick={onSwitch}>
                Déjà inscrit ?
            </Button>
        </div>
    );
}
