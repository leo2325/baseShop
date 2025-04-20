import { useMemo } from 'react';

export default function useSortedProducts(products, sortOrder, hideUnavailable) {
    const sortedProducts = useMemo(() => {
        return [...products] // Créer une copie des produits
            .filter(product => (hideUnavailable ? product.isAvailable : true)) // Filtrage basé sur la disponibilité
            .sort((a, b) => {
                // Extraire la valeur du rating pour faire un tri correct
                const aRating = parseFloat(a.rating.split('/')[0]);
                const bRating = parseFloat(b.rating.split('/')[0]);
                
                // Choisir le prix du format 100g pour le tri
                const aPrice = a.prices.find(price => price.format === '100g').price;
                const bPrice = b.prices.find(price => price.format === '100g').price;

                switch (sortOrder) {
                    case 'name':
                        return a.name.localeCompare(b.name); // Trier par nom
                    case 'rating':
                        return bRating - aRating; // Trier par rating
                    case 'new':
                        return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0); // Trier par nouveauté
                    case 'priceAsc':
                        return aPrice - bPrice; // Trier par prix croissant
                    case 'priceDesc':
                        return bPrice - aPrice; // Trier par prix décroissant
                    default:
                        return 0; // Aucun tri par défaut
                }
            });
    }, [products, sortOrder, hideUnavailable]); // Réexécuter dès que l'une de ces valeurs change

    return sortedProducts;
}
