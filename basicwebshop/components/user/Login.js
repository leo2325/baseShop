"use client";

import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/navigation";
import { loginRequest, loginSuccess, loginFailure } from "@/app/store/userSlice";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBoxOpen, faBarcode } from "@fortawesome/free-solid-svg-icons";
import Button from '../elements/buttons/Btn';
import Input from "../elements/inputs/Input";
import users from "../../datas/usersDatas";
import styles from "./auth.module.css";

export default function Login({ onSwitch }) {
    const dispatch = useDispatch();
    const router = useRouter();

    const { user, isAuthenticated, loading, error } = useSelector((state) => state.user);

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    const handleLogin = async () => {
        if (!username || !password) {
        setErrorMessage("Merci de remplir tous les champs.");
        return;
        }

    dispatch(loginRequest());
    setErrorMessage("");

    try {
        const foundUser = users.find((user) => user.name === username && user.password === password);

        if (foundUser) {
            dispatch(loginSuccess(foundUser));
        } else {
            dispatch(loginFailure("Identifiants incorrects"));
            setErrorMessage("Identifiants incorrects !"); // Affichage de l'erreur
        }
        } catch (err) {
            setErrorMessage("Une erreur est survenue. Veuillez réessayer.");
            dispatch(loginFailure("Une erreur est survenue"));
        }
    };

    const handleSeeOrders = () => router.push("/orders");

    return (
        <div className={styles.content}>
            {!isAuthenticated && (
                <>
                    <Input
                        label="Nom d'utilisateur"
                        name="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        layout="column"
                    />
                    <Input
                        label="Mot de passe :"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        layout="column"
                    />
                    {errorMessage && <p className={styles.error}>{errorMessage}</p>}
                </>
            ) }
            {!isAuthenticated && (
                <>
                    <Button onClick={handleLogin} size="medium" variant="validationStyle"  disabled={loading}>
                        {loading ? "Connexion..." : "Se connecter"}
                    </Button>
                    <Button variant="link" size="medium">
                        Login ou mot de passe oublié ?
                    </Button>
                    <Button variant="link" size="medium" onClick={onSwitch}>
                        Pas encore de compte ?
                    </Button>
                </>
            )}
        </div>
    );
}
