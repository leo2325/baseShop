import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, clearCart, updateQuantity } from '@/app/store/cartSlice';

export function useCart() {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cart) || [];

    const handleRemoveItem = (id, format) => {
        dispatch(removeFromCart({ id, format }));
    };

    const handleClearCart = () => {
        dispatch(clearCart());
    };

    const handleQuantityChange = (id, format, newQuantity) => {
        if (newQuantity < 1) return;
        dispatch(updateQuantity({ id, format, quantity: newQuantity }));
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);
    };

    const calculateItemCount = () => {
        return cartItems.reduce((total, item) => total + item.quantity, 0);
    };

    return {
        cartItems,
        handleRemoveItem,
        handleClearCart,
        handleQuantityChange,
        calculateTotal,
        calculateItemCount
    };
}
