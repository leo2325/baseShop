"use client";

import { useState } from "react";
import Input from "../elements/inputs/Input";
import Button from "../elements/buttons/Btn";
import styles from "./auth.module.css";

export default function Register({ onSwitch }) {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    civility: '',
    lastName: '',
    firstName: '',
    address: '',
    mobile: '',
    email: ''
  });

  const [errorMessage, setErrorMessage] = useState(""); // State pour gérer les erreurs
  const [isSubmitting, setIsSubmitting] = useState(false); // State pour gérer l'état de soumission

  const fields = [
    { label: "Nom d'utilisateur", name: "username", type: "text" },
    { label: "Mot de passe", name: "password", type: "password" },
    { label: "Nom", name: "lastName", type: "text" },
    { label: "Prénom", name: "firstName", type: "text" },
    { label: "Adresse", name: "address", type: "text" },
    { label: "Téléphone", name: "mobile", type: "text" },
    { label: "Email", name: "email", type: "email" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegister = async () => {
    setErrorMessage("");

    for (let field of fields) {
      if (!formData[field.name]) {
        setErrorMessage(`Veuillez remplir le champ "${field.label}".`);
        return;
      }
    }

    if (!formData.civility) {
      setErrorMessage("Veuillez choisir une civilité.");
      return;
    }

    setIsSubmitting(true);

    try {
      // Ici, tu peux appeler une API pour inscrire l'utilisateur
      // const response = await api.register(formData);

      // Simulation d'un succès
      console.log("Utilisateur inscrit avec succès:", formData);

      // Si tout est OK, afficher un message de succès
      setIsSubmitting(false);
      alert("Inscription réussie !");
      onSwitch(); // Fonction pour revenir à l'écran de connexion
    } catch (error) {
      // Gérer une erreur d'inscription
      setIsSubmitting(false);
      setErrorMessage("Une erreur est survenue, veuillez réessayer.");
    }
  };

  return (
    <div className={styles.content}>
      {fields.map(({ label, name, type }, index) => (
        <div key={name}>
          <Input
            label={label}
            name={name}
            type={type}
            value={formData[name]}
            onChange={handleChange}
            layout="column"
          />

          {/* Civilité après le mot de passe */}
          {name === "password" && (
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
          )}
        </div>
      ))}

      {errorMessage && <p className={styles.error}>{errorMessage}</p>} {/* Affichage du message d'erreur */}

      <Button
        variant="validationStyle"
        size="medium"
        style={{ margin: "2rem auto" }}
        onClick={handleRegister}
        disabled={isSubmitting}
      >
        {isSubmitting ? "Inscription en cours..." : "S'inscrire"}
      </Button>

      <Button variant="link" size="medium" onClick={onSwitch}>
        Déjà inscrit ?
      </Button>
    </div>
  );
}
