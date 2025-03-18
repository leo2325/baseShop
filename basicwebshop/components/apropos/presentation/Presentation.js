import styles from './Presentation.module.css';

export default function Presentation() {
    return (
        <div className={styles.container}>

            <h1 className={styles.title}>Envie de douceur ?</h1>
            
            <section className={styles.content}>
                <p>Chez <strong>037</strong> nous vous proposons des chocolats artisanaux de qualité supérieure.</p>
                <p><strong>Notre mission:</strong> vous proposer les meilleures saveurs et ravir vos papilles.</p>
                <p>N’hésitez pas à nous contacter pour en savoir plus ou pour toute question.</p>
                <p>Merci de votre confiance !</p>
            </section>

        </div>
    );
}
