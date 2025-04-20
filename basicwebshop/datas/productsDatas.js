const products = [
    {
        id: 1,
        name: "BuenoBlanc",
        images: [
            "/images/products/buenoblanc/img1.jpg",
            "/images/products/buenoblanc/img2.jpg",
            "/images/products/buenoblanc/img3.jpg"
        ],        
        prices: [
            { format: "100g", price: 9.99 },
            { format: "200g", price: 15.49 },
            { format: "500g", price: 29.99 },
            { format: "1kg", price: 55.99 }
        ],
        description: "Chez 037 nous vous proposons des chocolats artisanaux de qualité supérieure. Notre mission: vous proposer les meilleures saveurs et ravir vos papilles. N’hésitez pas à nous contacter pour en savoir plus ou pour toute question. Merci de votre confiance !",
        isNew: false,
        isBestSeller : true,
        isAvailable: true,
        category: "creative",
        rating: "4.4/5",
        ingredients: ["chocolat blanc", "crème"],
        discount: false
    },
    {
        id: 2,
        name: "Cannelle",
        images: [
            "/images/products/cannelle/img1.jpg",
            "/images/products/cannelle/img2.jpg",
            "/images/products/cannelle/img3.jpg"
        ], 
        prices: [
            { format: "100g", price: 7.99 },
            { format: "200g", price: 12.49 },
            { format: "500g", price: 22.99 },
            { format: "1kg", price: 39.99 }
        ],        
        description: "Chez 037 nous vous proposons des chocolats artisanaux de qualité supérieure. Notre mission: vous proposer les meilleures saveurs et ravir vos papilles. N’hésitez pas à nous contacter pour en savoir plus ou pour toute question. Merci de votre confiance !",
        isNew: false,
        isBestSeller : false,
        isAvailable: false,
        category: "classique",
        rating: "2.3/5",
        ingredients: ["chocolat noir", "cannelle"],
        discount: false
    },
    {
        id: 3,
        name: "Caramel",
        images: [
            "/images/products/caramel/img1.jpg",
            "/images/products/caramel/img2.jpg",
            "/images/products/caramel/img3.jpg"
        ], 
        prices: [
            { format: "100g", price: 8.99 },
            { format: "200g", price: 15.49 },
            { format: "500g", price: 29.99 },
            { format: "1kg", price: 51.99 }
        ],
        description: "Chez 037 nous vous proposons des chocolats artisanaux de qualité supérieure. Notre mission: vous proposer les meilleures saveurs et ravir vos papilles. N’hésitez pas à nous contacter pour en savoir plus ou pour toute question. Merci de votre confiance !",
        isNew: false,
        isBestSeller : true,
        isAvailable: true,
        category: "creative",
        rating: "3.7/5",
        ingredients: ["chocolat au lait", "caramel"],
        discount: false
    },
    {
        id: 4,
        name: "ChocoBanana",
        images: [
            "/images/products/chocobanana/img1.jpg",
            "/images/products/chocobanana/img2.jpg",
            "/images/products/chocobanana/img3.jpg"
        ],         
        prices: [
            { format: "100g", price: 9.99 },
            { format: "200g", price: 15.49 },
            { format: "500g", price: 29.99 },
            { format: "1kg", price: 55.99 }
        ],
                description: "Chez 037 nous vous proposons des chocolats artisanaux de qualité supérieure. Notre mission: vous proposer les meilleures saveurs et ravir vos papilles. N’hésitez pas à nous contacter pour en savoir plus ou pour toute question. Merci de votre confiance !",
        isNew: true,
        isBestSeller : false,
        isAvailable: true,
        category: "creative",
        rating: "4/5",
        ingredients: ["chocolat au lait", "banane"],
        discount: false
    },
    {
        id: 5,
        name: "ChocoLait",
        images: [
            "/images/products/chocolait/img1.jpg",
            "/images/products/chocolait/img2.jpg",
            "/images/products/chocolait/img3.jpg"
        ],           
        prices: [
            { format: "100g", price: 6.99 },
            { format: "200g", price: 12.49 },
            { format: "500g", price: 22.99 },
            { format: "1kg", price: 39.99 }
        ],
        description: "Chez 037 nous vous proposons des chocolats artisanaux de qualité supérieure. Notre mission: vous proposer les meilleures saveurs et ravir vos papilles. N’hésitez pas à nous contacter pour en savoir plus ou pour toute question. Merci de votre confiance !",
        isNew: false,
        isBestSeller : false,
        isAvailable: true,
        category: "classique",
        rating: "4.2/5",
        ingredients: ["chocolat au lait"],
        discount: false
    },
    {
        id: 6,
        name: "ChocoNoir",
        images: [
            "/images/products/choconoir/img1.jpg",
            "/images/products/choconoir/img2.jpg",
            "/images/products/choconoir/img3.jpg"
        ],        
        prices: [
            { format: "100g", price: 6.99 },
            { format: "200g", price: 12.49 },
            { format: "500g", price: 22.99 },
            { format: "1kg", price: 39.99 }
        ],
        description: "Chez 037 nous vous proposons des chocolats artisanaux de qualité supérieure. Notre mission: vous proposer les meilleures saveurs et ravir vos papilles. N’hésitez pas à nous contacter pour en savoir plus ou pour toute question. Merci de votre confiance !",
        isNew: false,
        isBestSeller : false,
        isAvailable: true,
        category: "classique",
        rating: "2.7/5",
        ingredients: ["chocolat noir"],
        discount: false
    },
    {
        id: 7,
        name: "ChocoBlanc",
        images: [
            "/images/products/chocoblanc/img1.jpg",
            "/images/products/chocoblanc/img2.jpg",
            "/images/products/chocoblanc/img3.jpg"
        ],                
        prices: [
            { format: "100g", price: 7.99 },
            { format: "200g", price: 15.49 },
            { format: "500g", price: 27.99 },
            { format: "1kg", price: 52.99 }
        ],
        description: "Chez 037 nous vous proposons des chocolats artisanaux de qualité supérieure. Notre mission: vous proposer les meilleures saveurs et ravir vos papilles. N’hésitez pas à nous contacter pour en savoir plus ou pour toute question. Merci de votre confiance !",
        isNew: false,
        isBestSeller : true,
        isAvailable: true,
        category: "classique",
        rating: "4.7/5",
        ingredients: ["chocolat blanc"],
        discount: false
    },
    {
        id: 8,
        name: "Coco",
        images: [
            "/images/products/coco/img1.jpg",
            "/images/products/coco/img2.jpg",
            "/images/products/coco/img3.jpg"
        ],             
        prices: [
            { format: "100g", price: 7.99 },
            { format: "200g", price: 15.49 },
            { format: "500g", price: 27.99 },
            { format: "1kg", price: 49.99 }
        ],
        description: "Chez 037 nous vous proposons des chocolats artisanaux de qualité supérieure. Notre mission: vous proposer les meilleures saveurs et ravir vos papilles. N’hésitez pas à nous contacter pour en savoir plus ou pour toute question. Merci de votre confiance !",
        isNew: false,
        isBestSeller : false,
        isAvailable: true,
        category: "creative",
        rating: "5/5",
        ingredients: ["chocolat blanc", "coco"],
        discount: false
    },
    {
        id: 9,
        name: "CreamyNut",
        images: [
            "/images/products/creamynoisette/img1.jpg",
            "/images/products/creamynoisette/img2.jpg",
            "/images/products/creamynoisette/img3.jpg"
        ],                    
        prices: [
            { format: "100g", price: 9.99 },
            { format: "200g", price: 15.49 },
            { format: "500g", price: 29.99 },
            { format: "1kg", price: 55.99 }
        ],
        description: "Chez 037 nous vous proposons des chocolats artisanaux de qualité supérieure. Notre mission: vous proposer les meilleures saveurs et ravir vos papilles. N’hésitez pas à nous contacter pour en savoir plus ou pour toute question. Merci de votre confiance !",
        isNew: true,
        isBestSeller : true,
        isAvailable: true,
        category: "creative",
        rating: "5/5",
        ingredients: ["chocolat au lait", "crème", "noisette"],
        discount: false
    },
    {
        id: 10,
        name: "Framboise",
        images: [
            "/images/products/framboise/img1.jpg",
            "/images/products/framboise/img2.jpg",
            "/images/products/framboise/img3.jpg"
        ],               
        prices: [
            { format: "100g", price: 8.99 },
            { format: "200g", price: 15.49 },
            { format: "500g", price: 29.99 },
            { format: "1kg", price: 52.99 }
        ],
        description: "Chez 037 nous vous proposons des chocolats artisanaux de qualité supérieure. Notre mission: vous proposer les meilleures saveurs et ravir vos papilles. N’hésitez pas à nous contacter pour en savoir plus ou pour toute question. Merci de votre confiance !",
        isNew: false,
        isBestSeller : true,
        isAvailable: true,
        category: "classique",
        rating: "4/5",
        ingredients: ["chocolat au lait", "framboise"],
        discount: false
    },
    {
        id: 11,
        name: "Mix",
        images: [
            "/images/products/mix/img1.jpg",
            "/images/products/mix/img2.jpg",
            "/images/products/mix/img3.jpg"
        ],          
        prices: [
            { format: "100g", price: 9.99 },
            { format: "200g", price: 15.49 },
            { format: "500g", price: 29.99 },
            { format: "1kg", price: 55.99 }
        ],
        description: "Chez 037 nous vous proposons des chocolats artisanaux de qualité supérieure. Notre mission: vous proposer les meilleures saveurs et ravir vos papilles. N’hésitez pas à nous contacter pour en savoir plus ou pour toute question. Merci de votre confiance !",
        isNew: false,
        isBestSeller : false,
        isAvailable: true,
        category: "classique",
        rating: "5/5",
        ingredients: ["medley"],
        discount: false
    },
    {
        id: 12,
        name: "Pistache",
        images: [
            "/images/products/pistache/img1.jpg",
            "/images/products/pistache/img2.jpg",
            "/images/products/pistache/img3.jpg"
        ],   
      
        prices: [
            { format: "100g", price: 8.99 },
            { format: "200g", price: 16.99 },
            { format: "500g", price: 32.99 },
            { format: "1kg", price: 59.99 }
        ],    
        description: "Chez 037 nous vous proposons des chocolats artisanaux de qualité supérieure. Notre mission: vous proposer les meilleures saveurs et ravir vos papilles. N’hésitez pas à nous contacter pour en savoir plus ou pour toute question. Merci de votre confiance !",
        isNew: false,
        isBestSeller : true,
        isAvailable: true,
        category: "classique",
        rating: "3.3/5",
        ingredients: ["chocolat au lait", "pistache"],
        discount: false
    },
    {
        id: 14,
        name: "Truffe",
        images: [
            "/images/products/truffe/img1.jpg",
            "/images/products/truffe/img2.jpg",
            "/images/products/truffe/img3.jpg"
        ],   
      
        prices: [
            { format: "100g", price: 7.99 },
            { format: "200g", price: 15.49 },
            { format: "500g", price: 25.99 },
            { format: "1kg", price: 48.99 }
        ],
        
        description: "Chez 037 nous vous proposons des chocolats artisanaux de qualité supérieure. Notre mission: vous proposer les meilleures saveurs et ravir vos papilles. N’hésitez pas à nous contacter pour en savoir plus ou pour toute question. Merci de votre confiance !",
        isNew: true,
        isBestSeller : false,
        isAvailable: false,
        category: "creative",
        rating: "1.9/5",
        ingredients: ["chocolat noir", "chocolat en poudre"],
        discount: false
    },
    {
        id: 15,
        name: "Twix",
        images: [
            "/images/products/twix/img1.jpg",
            "/images/products/twix/img2.jpg",
            "/images/products/twix/img3.jpg"
        ],           
        prices: [
            { format: "100g", price: 9.99 },
            { format: "200g", price: 18.49 },
            { format: "500g", price: 29.99 },
            { format: "1kg", price: 59.99 }
        ],
        description: "Chez 037 nous vous proposons des chocolats artisanaux de qualité supérieure. Notre mission: vous proposer les meilleures saveurs et ravir vos papilles. N’hésitez pas à nous contacter pour en savoir plus ou pour toute question. Merci de votre confiance !",
        isNew: true,
        isBestSeller : true,
        isAvailable: true,
        category: "creative",
        rating: "4.8/5",
        ingredients: ["chocolat au lait", "caramel", "biscuit"],
        discount: false
    },
    {
        id: 16,
        name: "Chouchou",
        images: [
            "/images/products/chouchou/img1.jpg",
            "/images/products/chouchou/img2.jpg",
            "/images/products/chouchou/img3.jpg"
        ],           
        prices: [
            { format: "100g", price: 9.99 },
            { format: "200g", price: 18.49 },
            { format: "500g", price: 29.99 },
            { format: "1kg", price: 59.99 }
        ],
        description: "Chez 037 nous vous proposons des chocolats artisanaux de qualité supérieure. Notre mission: vous proposer les meilleures saveurs et ravir vos papilles. N’hésitez pas à nous contacter pour en savoir plus ou pour toute question. Merci de votre confiance !",
        isNew: true,
        isBestSeller : false,        
        isAvailable: true,
        category: "creative",
        rating: "4.2/5",
        ingredients: ["chocolat au lait", "caramel", "sucre"],
        discount: false
    }
];

export default products;
