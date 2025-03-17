import styles from './Home.module.css';
import Introduction from './Introduction';
import BestSeller from './bestSeller/BestSeller';



const Home = () => {
    return (
      <div className={styles.homeContainer}>
        
        <h2 className={styles.mainTitle}>Bienvenue</h2>
        
        <Introduction/>



        {/* Exemple de slider, produits récents, etc. */}

        {/* Ils parlent de nous */}

      </div>
    );
  };
  export default Home;
  