import styles from './productsFilters.module.css'; //

export default function ProductsFilters({ sortOrder, setSortOrder, hideUnavailable, setHideUnavailable }) {
    return (
        <div className={styles.filters}>
            <label>
                Trier par :
                <select 
                    value={sortOrder} 
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="name">Nom (A-Z)</option>
                    <option value="rating">Note la plus élevée</option>
                    <option value="new">Nouveauté</option>
                    <option value="priceAsc">Prix croissant</option>
                    <option value="priceDesc">Prix décroissant</option>
                </select>
            </label>

            <label>
                <input 
                    type="checkbox" 
                    checked={hideUnavailable} 
                    onChange={(e) => setHideUnavailable(e.target.checked)}
                    className={styles.checkbox}
                />
                Cacher les produits indisponibles
            </label>
        </div>
    );
}
