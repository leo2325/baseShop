"use client";

import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import Login from "./Login";
import Register from "./Register";
import UserProfil from "./UserProfil";
import Modal from "../elements/modals/Modal";

export default function AuthToggle({ isOpen, onClose }) {
  const { isAuthenticated } = useSelector((state) => state.user);
  const [isLogin, setIsLogin] = useState(true);

  // Toggle entre Login et Register
  const handleSwitch = () => {
    setIsLogin((prev) => !prev); // Change entre Login et Register sans animation
  };

  useEffect(() => {
    // Si l'utilisateur est déjà authentifié, on lui affiche le profil
    if (isAuthenticated) {
      setIsLogin(false); // Afficher UserProfil si connecté
    }
  }, [isAuthenticated]);

  return isOpen ? (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title={isAuthenticated ? "Mon Profil" : isLogin ? "Connexion" : "Inscription"}
    >
      {isAuthenticated ? (
        <UserProfil />
      ) : isLogin ? (
        <Login onSwitch={handleSwitch} />
      ) : (
        <Register onSwitch={handleSwitch} />
      )}
    </Modal>
  ) : null;
}


