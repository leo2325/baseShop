import { useState } from "react";

export function useUserForm(initialData) {
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(initialData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEdit = () => setIsEditing(true);
  const handleSave = () => setIsEditing(false);

  return {
    isEditing,
    formData,
    handleChange,
    handleEdit,
    handleSave,
  };
}
