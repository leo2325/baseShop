import Presentation from '@/components/apropos/presentation/Presentation';
import FAQ from '@/components/apropos/faq/FAQ';
import Livraison from '@/components/apropos/livraison/Livraison';
import Contacts from '@/components/apropos/contacts/Contacts';

export default function AproposPage() {
    return (
        <div>
            <Presentation />
            <Livraison />
            <FAQ />
            <Contacts />
        </div>
    );
}
