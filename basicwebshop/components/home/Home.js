import styles from './Home.module.css';
import Introduction from './Introduction';
import BestSeller from './bestSeller/BestSeller';
import NewProducts from './newProducts/NewProducts';

const Home = () => {
    return (
        <div className={styles.homeContainer}>
            <h2 className={styles.mainTitle}>Bienvenue</h2>
            
            <Introduction />
            <BestSeller />
            <NewProducts />

            {/* Section "Ils parlent de nous" à ajouter ici */}
        </div>
    );
};

export default Home;
