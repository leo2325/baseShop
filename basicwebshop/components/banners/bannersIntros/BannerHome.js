import Link from 'next/link';
import BannerIntro from './BannerIntro';

export default function BannerHome() {
    return (
        <Link href="/products">  {/* Ajoute directement le lien ici */}
            <BannerIntro 
                backgroundImage="/images/background1.WebP"
                mainTitle="Bienvenue"
                sloganTitle="Envie d'une douceur ?"
                discoverText="Découvrez nos produits"
            />
        </Link>
    );
}
