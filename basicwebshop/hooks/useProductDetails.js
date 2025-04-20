import { useState } from "react";

export function useProductDetails(selectedProduct) {
    const [selectedFormat, setSelectedFormat] = useState('100g');
    const [quantity, setQuantity] = useState(1);
    const [confirmationMessage, setConfirmationMessage] = useState('');

    const handleFormatChange = (format) => setSelectedFormat(format);

    const handleQuantityChange = (newQuantity) => {
        setQuantity(newQuantity);
    };

    const handleAddToCart = (dispatch) => {
        dispatch(addToCart({
            id: selectedProduct.id,
            name: selectedProduct.name,
            image: selectedProduct.image,
            price: selectedProduct.price,
            format: selectedFormat,
            quantity
        }));

        setConfirmationMessage(`${quantity} x ${selectedProduct.name} (${selectedFormat}) ajouté(s) au panier.`);
        setTimeout(() => setConfirmationMessage(''), 3000);
    };

    return {
        selectedFormat,
        quantity,
        confirmationMessage,
        handleFormatChange,
        handleQuantityChange,
        handleAddToCart,
    };
}
