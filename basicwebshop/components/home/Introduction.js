import Image from 'next/image';
import boutiqueImage from '../../assets/images/boutique.jpg';
import styles from './Home.module.css';

export default function Presentation() {
  	return (
    	<div className={styles.introductionContainer}>      		

			<div className={styles.imageContainer}>
				<Image 
					src={boutiqueImage}
					alt="Image de présentation de la boutique" 
					width={320} 
					height={150} 
					className={styles.image}
				/>
			</div>
			<div className={styles.content}>
				<p className={styles.text}>
					Chez <strong>037</strong> nous proposons des produits de qualité alliant style et originalité dans un lieu conçu pour répondre à vos besoins avec élégance et confort.
				</p>
			</div>
		
		</div>
  	);
}
