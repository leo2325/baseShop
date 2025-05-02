import { useState } from 'react';

export default function usePasswordToggle() {
  const [showPassword, setShowPassword] = useState(false);

  const togglePassword = () => setShowPassword((prev) => !prev);

  const inputType = showPassword ? 'text' : 'password';

  return { inputType, showPassword, togglePassword };
}
