"use client";

import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "@/app/store/userSlice";
import { useRouter } from "next/navigation";
import Button from "../elements/buttons/Btn";
import Input from "../elements/inputs/Input";
import styles from "./userProfil.module.css";

export default function UserProfil() {
    const { user, isAuthenticated } = useSelector((state) => state.user);
    const router = useRouter();
    const dispatch = useDispatch();

    const [isEditing, setIsEditing] = useState(false);
    const [formData, setFormData] = useState({
        userName: user?.userName || "",
        familyName: user?.familyName || "",
        name: user?.name || "",
        address: user?.address || "",
        mail: user?.mail || "",
        mobile: user?.mobile || "",
    });

    if (!isAuthenticated) {
        return (
            <p style={{ textAlign: "center" }}>
            Vous devez être connecté pour accéder à cette page.
            </p>
        );
    }

    const handleLogout = () => {
        dispatch(logout());
        router.push("/");
    };

    const handleEditInfo = () => {
        setIsEditing(true);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSeeOrders = () => {
        router.push("/orders");
    };

    const handleSaveChanges = () => {
        setIsEditing(false);
        console.log("Données sauvegardées :", formData);
        // Logique pour sauvegarder les modifications, par exemple en appelant une API
        alert("Les modifications ont été enregistrées !");
    };

    const fields = [
        { label: "Login", name: "userName" },
        { label: "Nom", name: "familyName" },
        { label: "Prénom", name: "name" },
        { label: "Adresse de livraison", name: "address" },
        { label: "Email", name: "mail" },
        { label: "Téléphone", name: "mobile" },
    ];

    return (
        <div className={styles.profileContainer}>
            {user && (
            <div className={styles.hello_container}>
                <p>Hello <strong>{user.userName}</strong>,</p>
                <p>vous êtes connecté en tant que <strong>{user.category}</strong>.</p>
                <p>Que souhaitez-vous faire ?</p>
                <Button onClick={handleLogout} size="medium" variant="cancelationStyle">Se déconnecter</Button>
                <Button onClick={handleSeeOrders} size="medium" variant="validationStyle">Mes commandes</Button>
                <Button onClick={handleSeeOrders} size="medium" variant="dashboardAccess" style={{ margin: ".8rem auto" }}>Dashboard admin</Button>
            </div>
            )}

            <div className={styles.infoSection_container}>
                <form className={styles.infoSection}>
                    {fields.map(({ label, name }) => (
                        <div key={name} className={styles.infoSection_content}>
                            {isEditing ? (
                                <Input
                                label={label}
                                name={name}
                                value={formData[name]}
                                onChange={handleChange}
                                type="text"
                                layout="row"
                                />
                            ) : (
                                <>
                                    <label>{label}</label>
                                    < p>{formData[name]}</p>
                                </>
                            )}
                        </div>
                    ))}
                </form>

                {!isEditing ? (
                    <Button variant="infosModifier" size="medium" onClick={handleEditInfo}>
                        Modifier mes infos
                    </Button>
                ) : (
                    <Button variant="infosModifier" size="medium" onClick={handleSaveChanges}>
                        Enregistrer les modifications
                    </Button>
                )}
            </div>
        </div>
    );
}
