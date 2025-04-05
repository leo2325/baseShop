This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.






COMPONENTS:

    + HEADER :
        !!! Ces composants sont enfait des banners ? 
        + aboutus :
            - Contacts.js : 
            - FAQ.js : 
            - Livraison.js : 
            - Presentations.js :
            - SocialMedias_links.js : 
        - Header.js : 

    + FOOTER :
    
    + CART : 
        - CartIcon.js : 
        - Cart.js : 
    
    + ORDER : 
    
    + PRODUCTS : 
        + ProductCard : 
            - ProductCard.js :
        + ProductDetails : 
            - Caroussel.js : 
            - Description : 
            - DetailsToggle : 
            - FormatSelector : 
        - index.js : 
        - ProductDetailsView : 

    + USER : 

    !!! Login & Register fonctionnent ensemble via AuthToggle. 
    ! Les mettre dans un dossier ? 
    ! Renommer AuthToggle ?
        - Login.js : !!! créer un elements/input à utiliser pour les différents composants
            -> login form
        - Register.js : !!! créer un elements/input à utiliser pour les différents composants
            -> inscription form
        - AuthToggle.js : 

    !!! Accessible via la page profil.
    ! Mettre dans un dossier ? 
        - UserProfil.js : !!! créer un elements/input à utiliser pour les différents composants 
            -> user modifier
        - PastOrders.js : !!! créer un elements/input à utiliser pour les différents composants 
            -> order research


    + ELEMENTS : Des composants réutilisables, stylisé avec différentes classes.

        - buttons : composant bouton.
        - modals : affichage d'une modal.


    + BANNERS : Le composants banners sont des composants prêt à être ajoutés à une page selon les envies.
        
        !!! RENOMMER BANNERSINTROS
        - bannersIntros: En début de chaque page, fond d'écran image. (Suggestion contenu: poser une question au consommateur, et apporter une réponse.)
        
        !!! RENOMMER PRODUCTSSELECTION -> BANNERSWIPER...
        - productsSelection: Swiper d'une séléction de produits, 3 tailles différentes (exemple:          
        NewProducts, BestSeller, ClassicsProducts...)
        
        !!! RENOMMER SMALLTOP -> BANNERS...
        - smallTop: bandeau small height tout en haut du body (exemple: ShippingFree, PromoSeason, CodePromo...)
        









Sur la page d'acceuil,
l'utilisateur doit pouvoir : 
    HEADER
        - Ouvrir le menu
            . en cliquant sur l'icône de menu
        - Ouvrir la modale panier
            . en cliquant sur l'icône panier
        - Ouvrir la modale user
            . en cliquant sur l'icône user

Sur la page d'acceuil,
l'utilisateur doit pouvoir : 

Sur la page d'acceuil,
l'utilisateur doit pouvoir : 

Sur la page d'acceuil,
l'utilisateur doit pouvoir : 

Sur la page d'acceuil,
l'utilisateur doit pouvoir : 

Sur la page d'acceuil,
l'utilisateur doit pouvoir : 