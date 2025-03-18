import Image from 'next/image';
import boutiqueImage from '../../assets/images/boutique.jpg';
import styles from './Home.module.css';

export default function Presentation() {
  	return (
    	<div className={styles.introductionContainer}>      		
			<Image 
				src={boutiqueImage}
				alt="Image de présentation de la boutique" 
				width={320} 
				height={150} 
				className={styles.image}
			/>
			<div className={styles.content}>
				<p className={styles.text}>				
				</p>
			</div>
		</div>
  	);
}
