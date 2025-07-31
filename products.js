// Products page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Initialize EmailJS
    emailjs.init('nxzXBLtLz_RrrX1mv');
    
    // Complete product database with 100 products across 10 categories
    window.productDatabase = [
        // Electronics & Gadgets (10 products)
        {
            id: 'laptop-i7',
            name: 'Premium Laptop - Core i7',
            price: 1299,
            originalPrice: 1599,
            category: 'electronics',
            description: 'High-performance laptop with Intel Core i7 processor, 16GB RAM, 512GB SSD. Perfect for professionals and students.',
            image: 'fas fa-laptop',
            rating: 4.8,
            reviews: 127,
            badges: ['Hot Sale', 'Quality+'],
            inStock: true,
            estimatedDelivery: '14-21 days',
            specifications: {
                'Processor': 'Intel Core i7-12700H (12th Gen)',
                'RAM': '16GB DDR4 3200MHz',
                'Storage': '512GB NVMe SSD',
                'Display': '15.6" Full HD IPS (1920x1080)',
                'Graphics': 'NVIDIA GeForce RTX 3050',
                'Battery': 'Up to 8 hours',
                'Weight': '2.1 kg',
                'OS': 'Windows 11 Pro'
            },
            features: [
                'Backlit keyboard with RGB lighting',
                'Thunderbolt 4 connectivity',
                'WiFi 6 and Bluetooth 5.2',
                'Fingerprint reader for security',
                'Dolby Audio premium sound',
                '2-year international warranty'
            ]
        },
        {
            id: 'smartphone-pro',
            name: 'Smartphone Pro Max 256GB',
            price: 899,
            originalPrice: 1099,
            category: 'electronics',
            description: 'Latest flagship smartphone with triple camera system, 5G connectivity, and all-day battery life.',
            image: 'fas fa-mobile-alt',
            rating: 4.9,
            reviews: 243,
            badges: ['New Arrival', 'Best Seller'],
            inStock: true,
            estimatedDelivery: '10-14 days'
        },
        {
            id: 'wireless-headphones',
            name: 'Wireless Noise-Cancelling Headphones',
            price: 249,
            originalPrice: 299,
            category: 'electronics',
            description: 'Premium over-ear headphones with active noise cancellation and 30-hour battery life.',
            image: 'fas fa-headphones',
            rating: 4.7,
            reviews: 189,
            badges: ['Editor\'s Choice'],
            inStock: true,
            estimatedDelivery: '7-12 days'
        },
        {
            id: 'gaming-console',
            name: 'Next-Gen Gaming Console',
            price: 499,
            originalPrice: 599,
            category: 'electronics',
            description: 'Advanced gaming console with 4K gaming, ray tracing, and exclusive game library.',
            image: 'fas fa-gamepad',
            rating: 4.9,
            reviews: 156,
            badges: ['Limited Stock'],
            inStock: true,
            estimatedDelivery: '15-25 days'
        },
        {
            id: 'smart-watch',
            name: 'Smart Fitness Watch Pro',
            price: 329,
            originalPrice: 399,
            category: 'electronics',
            description: 'Advanced fitness tracking, heart rate monitoring, GPS, and 7-day battery life.',
            image: 'fas fa-clock',
            rating: 4.6,
            reviews: 201,
            badges: ['Health+'],
            inStock: true,
            estimatedDelivery: '8-15 days'
        },
        {
            id: 'tablet-pro',
            name: 'Professional Tablet 12.9"',
            price: 799,
            originalPrice: 949,
            category: 'electronics',
            description: 'Powerful tablet for creative professionals with stylus support and desktop-class performance.',
            image: 'fas fa-tablet-alt',
            rating: 4.8,
            reviews: 134,
            badges: ['Pro Series'],
            inStock: true,
            estimatedDelivery: '12-18 days'
        },
        {
            id: 'bluetooth-speaker',
            name: 'Portable Bluetooth Speaker',
            price: 79,
            originalPrice: 99,
            category: 'electronics',
            description: 'Waterproof portable speaker with 360-degree sound and 24-hour battery life.',
            image: 'fas fa-volume-up',
            rating: 4.5,
            reviews: 298,
            badges: ['Waterproof'],
            inStock: true,
            estimatedDelivery: '5-10 days'
        },
        {
            id: 'wireless-earbuds',
            name: 'True Wireless Earbuds Pro',
            price: 159,
            originalPrice: 199,
            category: 'electronics',
            description: 'Premium wireless earbuds with active noise cancellation and wireless charging case.',
            image: 'fas fa-headphones',
            rating: 4.7,
            reviews: 245,
            badges: ['Trending'],
            inStock: true,
            estimatedDelivery: '6-12 days'
        },
        {
            id: 'action-camera',
            name: '4K Action Camera Ultra',
            price: 199,
            originalPrice: 249,
            category: 'electronics',
            description: 'Rugged 4K action camera with image stabilization, waterproof design, and mobile app.',
            image: 'fas fa-video',
            rating: 4.6,
            reviews: 167,
            badges: ['Adventure Ready'],
            inStock: true,
            estimatedDelivery: '8-14 days'
        },
        {
            id: 'power-bank',
            name: 'Fast Charging Power Bank 20000mAh',
            price: 45,
            originalPrice: 59,
            category: 'electronics',
            description: 'High-capacity power bank with fast charging, multiple ports, and LED display.',
            image: 'fas fa-battery-three-quarters',
            rating: 4.4,
            reviews: 312,
            badges: ['Essential'],
            inStock: true,
            estimatedDelivery: '5-8 days'
        },

        // Fashion & Apparel (10 products)
        {
            id: 'designer-dress-collection',
            name: 'Designer Dress Collection',
            price: 159,
            originalPrice: 229,
            category: 'fashion',
            description: 'Elegant designer dresses for special occasions, made from premium fabrics.',
            image: 'fas fa-female',
            rating: 4.8,
            reviews: 89,
            badges: ['Designer', 'Premium'],
            inStock: true,
            estimatedDelivery: '10-18 days'
        },
        {
            id: 'mens-formal-suits',
            name: 'Men\'s Formal Business Suits',
            price: 299,
            originalPrice: 399,
            category: 'fashion',
            description: 'Tailored business suits in various colors and sizes, perfect for professional settings.',
            image: 'fas fa-user-tie',
            rating: 4.7,
            reviews: 124,
            badges: ['Professional'],
            inStock: true,
            estimatedDelivery: '12-20 days'
        },
        {
            id: 'casual-jeans',
            name: 'Premium Denim Jeans Collection',
            price: 89,
            originalPrice: 119,
            category: 'fashion',
            description: 'High-quality denim jeans in multiple fits and washes for everyday comfort.',
            image: 'fas fa-tshirt',
            rating: 4.5,
            reviews: 203,
            badges: ['Comfort Fit'],
            inStock: true,
            estimatedDelivery: '8-15 days'
        },
        {
            id: 'luxury-handbags',
            name: 'Luxury Handbag Collection',
            price: 189,
            originalPrice: 249,
            category: 'fashion',
            description: 'Stylish handbags crafted from genuine leather with elegant designs.',
            image: 'fas fa-shopping-bag',
            rating: 4.9,
            reviews: 156,
            badges: ['Genuine Leather', 'Luxury'],
            inStock: true,
            estimatedDelivery: '14-22 days'
        },
        {
            id: 'athletic-wear',
            name: 'Athletic Performance Wear Set',
            price: 79,
            originalPrice: 99,
            category: 'fashion',
            description: 'High-performance athletic wear with moisture-wicking technology.',
            image: 'fas fa-running',
            rating: 4.6,
            reviews: 178,
            badges: ['Performance', 'Breathable'],
            inStock: true,
            estimatedDelivery: '7-14 days'
        },
        {
            id: 'winter-coats',
            name: 'Premium Winter Coat Collection',
            price: 149,
            originalPrice: 199,
            category: 'fashion',
            description: 'Warm and stylish winter coats with water-resistant materials.',
            image: 'fas fa-snowflake',
            rating: 4.7,
            reviews: 134,
            badges: ['Weather Resistant'],
            inStock: true,
            estimatedDelivery: '10-16 days'
        },
        {
            id: 'footwear-collection',
            name: 'Designer Footwear Collection',
            price: 119,
            originalPrice: 159,
            category: 'fashion',
            description: 'Comfortable and stylish shoes for various occasions and seasons.',
            image: 'fas fa-shoe-prints',
            rating: 4.5,
            reviews: 234,
            badges: ['Comfort+'],
            inStock: true,
            estimatedDelivery: '9-17 days'
        },
        {
            id: 'accessories-bundle',
            name: 'Fashion Accessories Bundle',
            price: 59,
            originalPrice: 79,
            category: 'fashion',
            description: 'Complete accessories set including belts, scarves, jewelry, and sunglasses.',
            image: 'fas fa-glasses',
            rating: 4.4,
            reviews: 187,
            badges: ['Complete Set'],
            inStock: true,
            estimatedDelivery: '6-12 days'
        },
        {
            id: 'swimwear-collection',
            name: 'Summer Swimwear Collection',
            price: 69,
            originalPrice: 89,
            category: 'fashion',
            description: 'Trendy swimwear in various styles and colors for beach and pool.',
            image: 'fas fa-swimmer',
            rating: 4.6,
            reviews: 145,
            badges: ['Summer Ready'],
            inStock: true,
            estimatedDelivery: '8-15 days'
        },
        {
            id: 'formal-shirts',
            name: 'Premium Formal Shirts Pack',
            price: 99,
            originalPrice: 129,
            category: 'fashion',
            description: 'High-quality formal shirts in various colors and patterns for office wear.',
            image: 'fas fa-tshirt',
            rating: 4.5,
            reviews: 198,
            badges: ['Office Ready'],
            inStock: true,
            estimatedDelivery: '7-14 days'
        },

        // Home & Garden (10 products)
        {
            id: 'smart-home-kit',
            name: 'Smart Home Essentials Kit',
            price: 389,
            originalPrice: 499,
            category: 'home',
            description: 'Complete smart home package with LED lights, security cameras, and automation devices.',
            image: 'fas fa-home',
            rating: 4.8,
            reviews: 203,
            badges: ['Smart Tech', 'Complete Kit'],
            inStock: true,
            estimatedDelivery: '12-20 days'
        },
        {
            id: 'furniture-set',
            name: 'Modern Living Room Furniture Set',
            price: 799,
            originalPrice: 999,
            category: 'home',
            description: 'Stylish and comfortable living room furniture including sofa, coffee table, and decor.',
            image: 'fas fa-couch',
            rating: 4.7,
            reviews: 89,
            badges: ['Modern Design'],
            inStock: true,
            estimatedDelivery: '20-30 days'
        },
        {
            id: 'kitchen-appliances',
            name: 'Kitchen Appliance Bundle',
            price: 459,
            originalPrice: 599,
            category: 'home',
            description: 'Essential kitchen appliances including blender, coffee maker, and food processor.',
            image: 'fas fa-utensils',
            rating: 4.6,
            reviews: 167,
            badges: ['Kitchen Pro'],
            inStock: true,
            estimatedDelivery: '15-25 days'
        },
        {
            id: 'bedroom-essentials',
            name: 'Luxury Bedroom Essentials',
            price: 299,
            originalPrice: 399,
            category: 'home',
            description: 'Premium bedding, pillows, and bedroom accessories for ultimate comfort.',
            image: 'fas fa-bed',
            rating: 4.8,
            reviews: 156,
            badges: ['Luxury', 'Comfort+'],
            inStock: true,
            estimatedDelivery: '12-18 days'
        },
        {
            id: 'garden-tools',
            name: 'Professional Garden Tools Set',
            price: 129,
            originalPrice: 169,
            category: 'home',
            description: 'Complete gardening toolkit with high-quality tools for lawn and garden maintenance.',
            image: 'fas fa-seedling',
            rating: 4.5,
            reviews: 134,
            badges: ['Professional Grade'],
            inStock: true,
            estimatedDelivery: '8-15 days'
        },
        {
            id: 'lighting-solutions',
            name: 'LED Lighting Solutions Pack',
            price: 159,
            originalPrice: 199,
            category: 'home',
            description: 'Energy-efficient LED lighting for every room with smart controls and dimming.',
            image: 'fas fa-lightbulb',
            rating: 4.7,
            reviews: 198,
            badges: ['Energy Efficient'],
            inStock: true,
            estimatedDelivery: '10-16 days'
        },
        {
            id: 'bathroom-accessories',
            name: 'Luxury Bathroom Accessories Set',
            price: 89,
            originalPrice: 119,
            category: 'home',
            description: 'Elegant bathroom accessories including towels, organizers, and decor items.',
            image: 'fas fa-bath',
            rating: 4.4,
            reviews: 145,
            badges: ['Spa Quality'],
            inStock: true,
            estimatedDelivery: '9-15 days'
        },
        {
            id: 'storage-solutions',
            name: 'Home Organization Storage Set',
            price: 79,
            originalPrice: 99,
            category: 'home',
            description: 'Versatile storage solutions for closets, pantry, and living spaces.',
            image: 'fas fa-boxes',
            rating: 4.6,
            reviews: 212,
            badges: ['Space Saver'],
            inStock: true,
            estimatedDelivery: '7-14 days'
        },
        {
            id: 'outdoor-furniture',
            name: 'Outdoor Patio Furniture Set',
            price: 399,
            originalPrice: 519,
            category: 'home',
            description: 'Weather-resistant outdoor furniture perfect for patios, gardens, and balconies.',
            image: 'fas fa-umbrella-beach',
            rating: 4.5,
            reviews: 167,
            badges: ['Weather Resistant'],
            inStock: true,
            estimatedDelivery: '18-28 days'
        },
        {
            id: 'cleaning-supplies',
            name: 'Premium Cleaning Supplies Kit',
            price: 49,
            originalPrice: 69,
            category: 'home',
            description: 'Professional-grade cleaning supplies and tools for maintaining a spotless home.',
            image: 'fas fa-broom',
            rating: 4.3,
            reviews: 189,
            badges: ['Professional Grade'],
            inStock: true,
            estimatedDelivery: '5-10 days'
        },

        // Sports & Fitness (10 products)
        {
            id: 'fitness-equipment',
            name: 'Home Gym Equipment Set',
            price: 299,
            originalPrice: 399,
            category: 'sports',
            description: 'Complete home gym setup with adjustable dumbbells, resistance bands, and workout mat.',
            image: 'fas fa-dumbbell',
            rating: 4.7,
            reviews: 156,
            badges: ['Complete Set', 'Space Efficient'],
            inStock: true,
            estimatedDelivery: '10-18 days'
        },
        {
            id: 'running-gear',
            name: 'Professional Running Gear Pack',
            price: 149,
            originalPrice: 199,
            category: 'sports',
            description: 'High-performance running shoes, apparel, and accessories for serious runners.',
            image: 'fas fa-running',
            rating: 4.8,
            reviews: 234,
            badges: ['Performance+'],
            inStock: true,
            estimatedDelivery: '8-15 days'
        },
        {
            id: 'yoga-equipment',
            name: 'Yoga & Meditation Kit',
            price: 89,
            originalPrice: 119,
            category: 'sports',
            description: 'Premium yoga mat, blocks, straps, and meditation accessories for home practice.',
            image: 'fas fa-spa',
            rating: 4.6,
            reviews: 198,
            badges: ['Eco-Friendly'],
            inStock: true,
            estimatedDelivery: '7-14 days'
        },
        {
            id: 'cycling-accessories',
            name: 'Cycling Accessories Bundle',
            price: 179,
            originalPrice: 229,
            category: 'sports',
            description: 'Essential cycling gear including helmet, lights, tools, and safety equipment.',
            image: 'fas fa-bicycle',
            rating: 4.5,
            reviews: 167,
            badges: ['Safety First'],
            inStock: true,
            estimatedDelivery: '9-16 days'
        },
        {
            id: 'swimming-gear',
            name: 'Professional Swimming Equipment',
            price: 99,
            originalPrice: 129,
            category: 'sports',
            description: 'High-quality swimming gear including goggles, swimsuits, and training equipment.',
            image: 'fas fa-swimmer',
            rating: 4.7,
            reviews: 145,
            badges: ['Professional Grade'],
            inStock: true,
            estimatedDelivery: '8-14 days'
        },
        {
            id: 'team-sports',
            name: 'Team Sports Equipment Set',
            price: 199,
            originalPrice: 259,
            category: 'sports',
            description: 'Equipment for various team sports including footballs, basketballs, and training cones.',
            image: 'fas fa-football-ball',
            rating: 4.4,
            reviews: 134,
            badges: ['Team Ready'],
            inStock: true,
            estimatedDelivery: '12-20 days'
        },
        {
            id: 'outdoor-adventure',
            name: 'Outdoor Adventure Gear Pack',
            price: 249,
            originalPrice: 329,
            category: 'sports',
            description: 'Complete outdoor adventure kit with camping, hiking, and survival equipment.',
            image: 'fas fa-mountain',
            rating: 4.8,
            reviews: 189,
            badges: ['Adventure Ready'],
            inStock: true,
            estimatedDelivery: '14-22 days'
        },
        {
            id: 'fitness-tracker',
            name: 'Advanced Fitness Tracker Bundle',
            price: 159,
            originalPrice: 199,
            category: 'sports',
            description: 'Smart fitness tracker with heart rate monitor, GPS, and comprehensive health metrics.',
            image: 'fas fa-heartbeat',
            rating: 4.6,
            reviews: 212,
            badges: ['Smart Tech'],
            inStock: true,
            estimatedDelivery: '6-12 days'
        },
        {
            id: 'martial-arts',
            name: 'Martial Arts Training Equipment',
            price: 139,
            originalPrice: 179,
            category: 'sports',
            description: 'Professional martial arts gear including punching bags, gloves, and protective equipment.',
            image: 'fas fa-fist-raised',
            rating: 4.5,
            reviews: 156,
            badges: ['Professional'],
            inStock: true,
            estimatedDelivery: '10-18 days'
        },
        {
            id: 'golf-accessories',
            name: 'Golf Accessories Premium Set',
            price: 289,
            originalPrice: 379,
            category: 'sports',
            description: 'Complete golf accessories including clubs, balls, tees, and golf bag.',
            image: 'fas fa-golf-ball',
            rating: 4.7,
            reviews: 178,
            badges: ['Premium', 'Complete Set'],
            inStock: true,
            estimatedDelivery: '15-25 days'
        },

        // Beauty & Health (10 products)
        {
            id: 'skincare-collection',
            name: 'Premium Skincare Collection',
            price: 129,
            originalPrice: 169,
            category: 'beauty',
            description: 'Complete skincare routine with cleansers, serums, moisturizers, and anti-aging products.',
            image: 'fas fa-spa',
            rating: 4.8,
            reviews: 234,
            badges: ['Dermatologist Tested', 'Anti-Aging'],
            inStock: true,
            estimatedDelivery: '7-14 days'
        },
        {
            id: 'makeup-kit',
            name: 'Professional Makeup Artist Kit',
            price: 189,
            originalPrice: 249,
            category: 'beauty',
            description: 'Comprehensive makeup collection with brushes, palettes, and professional-grade cosmetics.',
            image: 'fas fa-paint-brush',
            rating: 4.7,
            reviews: 198,
            badges: ['Professional', 'Complete Kit'],
            inStock: true,
            estimatedDelivery: '8-15 days'
        },
        {
            id: 'hair-care',
            name: 'Hair Care Treatment Set',
            price: 89,
            originalPrice: 119,
            category: 'beauty',
            description: 'Premium hair care products including shampoos, conditioners, and styling tools.',
            image: 'fas fa-cut',
            rating: 4.6,
            reviews: 167,
            badges: ['Salon Quality'],
            inStock: true,
            estimatedDelivery: '6-12 days'
        },
        {
            id: 'wellness-supplements',
            name: 'Health & Wellness Supplements',
            price: 79,
            originalPrice: 99,
            category: 'beauty',
            description: 'Natural health supplements for energy, immunity, and overall wellness.',
            image: 'fas fa-pills',
            rating: 4.5,
            reviews: 145,
            badges: ['Natural', 'Lab Tested'],
            inStock: true,
            estimatedDelivery: '5-10 days'
        },
        {
            id: 'aromatherapy-set',
            name: 'Aromatherapy Essential Oils Set',
            price: 69,
            originalPrice: 89,
            category: 'beauty',
            description: 'Pure essential oils with diffuser for relaxation, stress relief, and home ambiance.',
            image: 'fas fa-leaf',
            rating: 4.7,
            reviews: 189,
            badges: ['Pure', '100% Natural'],
            inStock: true,
            estimatedDelivery: '7-13 days'
        },
        {
            id: 'mens-grooming',
            name: 'Men\'s Grooming Essentials Kit',
            price: 99,
            originalPrice: 129,
            category: 'beauty',
            description: 'Complete men\'s grooming set with razors, beard care, and skincare products.',
            image: 'fas fa-male',
            rating: 4.4,
            reviews: 156,
            badges: ['Complete Kit'],
            inStock: true,
            estimatedDelivery: '8-14 days'
        },
        {
            id: 'nail-care',
            name: 'Professional Nail Care Kit',
            price: 49,
            originalPrice: 69,
            category: 'beauty',
            description: 'Professional nail care tools and polishes for salon-quality manicures at home.',
            image: 'fas fa-hand-sparkles',
            rating: 4.6,
            reviews: 178,
            badges: ['Salon Quality'],
            inStock: true,
            estimatedDelivery: '6-11 days'
        },
        {
            id: 'beauty-tools',
            name: 'Beauty Tools & Accessories Set',
            price: 119,
            originalPrice: 159,
            category: 'beauty',
            description: 'Professional beauty tools including LED mirrors, facial steamers, and cleansing devices.',
            image: 'fas fa-mirror',
            rating: 4.5,
            reviews: 134,
            badges: ['Professional Tools'],
            inStock: true,
            estimatedDelivery: '9-16 days'
        },
        {
            id: 'organic-cosmetics',
            name: 'Organic & Natural Cosmetics Line',
            price: 109,
            originalPrice: 139,
            category: 'beauty',
            description: 'Eco-friendly cosmetics made with organic ingredients and sustainable packaging.',
            image: 'fas fa-seedling',
            rating: 4.8,
            reviews: 212,
            badges: ['Organic', 'Eco-Friendly'],
            inStock: true,
            estimatedDelivery: '10-17 days'
        },
        {
            id: 'perfume-collection',
            name: 'Designer Perfume Collection',
            price: 159,
            originalPrice: 199,
            category: 'beauty',
            description: 'Luxury fragrance collection with various scents for different occasions and preferences.',
            image: 'fas fa-spray-can',
            rating: 4.7,
            reviews: 167,
            badges: ['Designer', 'Luxury'],
            inStock: true,
            estimatedDelivery: '12-18 days'
        },

        // Automotive (10 products)
        {
            id: 'car-accessories',
            name: 'Premium Car Accessories Bundle',
            price: 299,
            originalPrice: 399,
            category: 'automotive',
            description: 'Complete car enhancement package with GPS, dash cam, seat covers, and care products.',
            image: 'fas fa-car',
            rating: 4.6,
            reviews: 189,
            badges: ['Complete Package', 'Universal Fit'],
            inStock: true,
            estimatedDelivery: '10-18 days'
        },
        {
            id: 'car-electronics',
            name: 'Advanced Car Electronics System',
            price: 459,
            originalPrice: 599,
            category: 'automotive',
            description: 'High-tech car electronics including navigation, entertainment, and security systems.',
            image: 'fas fa-satellite-dish',
            rating: 4.7,
            reviews: 134,
            badges: ['High-Tech', 'Professional Install'],
            inStock: true,
            estimatedDelivery: '15-25 days'
        },
        {
            id: 'car-maintenance',
            name: 'Car Maintenance & Care Kit',
            price: 89,
            originalPrice: 119,
            category: 'automotive',
            description: 'Essential car maintenance tools and products for keeping your vehicle in top condition.',
            image: 'fas fa-tools',
            rating: 4.5,
            reviews: 156,
            badges: ['Essential Kit'],
            inStock: true,
            estimatedDelivery: '8-15 days'
        },
        {
            id: 'tire-accessories',
            name: 'Tire Care & Accessories Set',
            price: 129,
            originalPrice: 169,
            category: 'automotive',
            description: 'Tire maintenance tools, pressure gauges, and accessories for optimal tire performance.',
            image: 'fas fa-circle',
            rating: 4.4,
            reviews: 167,
            badges: ['Safety First'],
            inStock: true,
            estimatedDelivery: '9-16 days'
        },
        {
            id: 'car-lighting',
            name: 'LED Car Lighting Upgrade Kit',
            price: 179,
            originalPrice: 229,
            category: 'automotive',
            description: 'Energy-efficient LED lighting solutions for headlights, taillights, and interior.',
            image: 'fas fa-lightbulb',
            rating: 4.6,
            reviews: 145,
            badges: ['Energy Efficient', 'Bright+'],
            inStock: true,
            estimatedDelivery: '12-20 days'
        },
        {
            id: 'car-security',
            name: 'Advanced Car Security System',
            price: 249,
            originalPrice: 329,
            category: 'automotive',
            description: 'Comprehensive car security with alarms, tracking, and remote monitoring capabilities.',
            image: 'fas fa-shield-alt',
            rating: 4.8,
            reviews: 178,
            badges: ['Security+', 'GPS Tracking'],
            inStock: true,
            estimatedDelivery: '14-22 days'
        },
        {
            id: 'car-comfort',
            name: 'Car Comfort & Convenience Pack',
            price: 119,
            originalPrice: 159,
            category: 'automotive',
            description: 'Comfort accessories including seat cushions, organizers, and climate control items.',
            image: 'fas fa-car-side',
            rating: 4.5,
            reviews: 198,
            badges: ['Comfort+'],
            inStock: true,
            estimatedDelivery: '7-14 days'
        },
        {
            id: 'emergency-kit',
            name: 'Roadside Emergency Kit',
            price: 79,
            originalPrice: 99,
            category: 'automotive',
            description: 'Essential emergency tools and supplies for roadside assistance and safety.',
            image: 'fas fa-first-aid',
            rating: 4.7,
            reviews: 212,
            badges: ['Safety Essential'],
            inStock: true,
            estimatedDelivery: '6-12 days'
        },
        {
            id: 'performance-parts',
            name: 'Performance Enhancement Parts',
            price: 389,
            originalPrice: 499,
            category: 'automotive',
            description: 'Performance upgrade parts for improved engine efficiency and vehicle performance.',
            image: 'fas fa-tachometer-alt',
            rating: 4.4,
            reviews: 134,
            badges: ['Performance+'],
            inStock: true,
            estimatedDelivery: '18-28 days'
        },
        {
            id: 'car-cleaning',
            name: 'Professional Car Detailing Kit',
            price: 69,
            originalPrice: 89,
            category: 'automotive',
            description: 'Professional-grade car cleaning and detailing products for showroom-quality results.',
            image: 'fas fa-spray-can',
            rating: 4.6,
            reviews: 189,
            badges: ['Professional Grade'],
            inStock: true,
            estimatedDelivery: '5-10 days'
        },

        // Books & Education (10 products)
        {
            id: 'business-books',
            name: 'Business & Entrepreneurship Book Set',
            price: 89,
            originalPrice: 119,
            category: 'books',
            description: 'Essential business books for entrepreneurs, including strategy, marketing, and leadership.',
            image: 'fas fa-book',
            rating: 4.8,
            reviews: 234,
            badges: ['Bestsellers', 'Educational'],
            inStock: true,
            estimatedDelivery: '5-10 days'
        },
        {
            id: 'tech-manuals',
            name: 'Technology & Programming Guides',
            price: 129,
            originalPrice: 169,
            category: 'books',
            description: 'Comprehensive guides for programming, web development, and emerging technologies.',
            image: 'fas fa-laptop-code',
            rating: 4.7,
            reviews: 189,
            badges: ['Expert Level', 'Updated 2025'],
            inStock: true,
            estimatedDelivery: '6-12 days'
        },
        {
            id: 'language-learning',
            name: 'Language Learning Course Collection',
            price: 149,
            originalPrice: 199,
            category: 'books',
            description: 'Multi-language learning materials with audio, video, and interactive content.',
            image: 'fas fa-language',
            rating: 4.6,
            reviews: 167,
            badges: ['Interactive', 'Multi-Language'],
            inStock: true,
            estimatedDelivery: '8-15 days'
        },
        {
            id: 'self-help',
            name: 'Personal Development Library',
            price: 79,
            originalPrice: 99,
            category: 'books',
            description: 'Motivational and self-improvement books for personal growth and success.',
            image: 'fas fa-brain',
            rating: 4.5,
            reviews: 198,
            badges: ['Life Changing'],
            inStock: true,
            estimatedDelivery: '5-9 days'
        },
        {
            id: 'academic-texts',
            name: 'Academic Textbooks Collection',
            price: 199,
            originalPrice: 259,
            category: 'books',
            description: 'University-level textbooks for various subjects and academic disciplines.',
            image: 'fas fa-graduation-cap',
            rating: 4.4,
            reviews: 145,
            badges: ['Academic', 'Latest Edition'],
            inStock: true,
            estimatedDelivery: '10-18 days'
        },
        {
            id: 'cooking-books',
            name: 'Culinary Arts & Recipe Collection',
            price: 69,
            originalPrice: 89,
            category: 'books',
            description: 'Professional cooking techniques and recipes from world-renowned chefs.',
            image: 'fas fa-utensils',
            rating: 4.7,
            reviews: 178,
            badges: ['Chef Approved', 'Step-by-Step'],
            inStock: true,
            estimatedDelivery: '6-11 days'
        },
        {
            id: 'art-design',
            name: 'Art & Design Reference Books',
            price: 109,
            originalPrice: 139,
            category: 'books',
            description: 'Comprehensive guides for artists, designers, and creative professionals.',
            image: 'fas fa-palette',
            rating: 4.6,
            reviews: 156,
            badges: ['Visual Learning', 'Professional'],
            inStock: true,
            estimatedDelivery: '7-14 days'
        },
        {
            id: 'health-wellness',
            name: 'Health & Wellness Guide Collection',
            price: 59,
            originalPrice: 79,
            category: 'books',
            description: 'Evidence-based health, nutrition, and wellness guides from medical experts.',
            image: 'fas fa-heartbeat',
            rating: 4.5,
            reviews: 189,
            badges: ['Expert Approved', 'Health+'],
            inStock: true,
            estimatedDelivery: '5-10 days'
        },
        {
            id: 'fiction-novels',
            name: 'Bestselling Fiction Novel Collection',
            price: 79,
            originalPrice: 99,
            category: 'books',
            description: 'Popular fiction novels from award-winning authors across various genres.',
            image: 'fas fa-book-open',
            rating: 4.8,
            reviews: 212,
            badges: ['Bestsellers', 'Award Winners'],
            inStock: true,
            estimatedDelivery: '4-8 days'
        },
        {
            id: 'childrens-books',
            name: 'Children\'s Educational Book Set',
            price: 49,
            originalPrice: 69,
            category: 'books',
            description: 'Age-appropriate educational books for children with colorful illustrations.',
            image: 'fas fa-child',
            rating: 4.9,
            reviews: 234,
            badges: ['Educational', 'Age Appropriate'],
            inStock: true,
            estimatedDelivery: '5-9 days'
        },

        // Tools & Hardware (10 products)
        {
            id: 'power-tools',
            name: 'Professional Power Tools Set',
            price: 349,
            originalPrice: 449,
            category: 'tools',
            description: 'Complete power tool collection including drill, saw, grinder, and accessories.',
            image: 'fas fa-tools',
            rating: 4.7,
            reviews: 156,
            badges: ['Professional Grade', 'Complete Set'],
            inStock: true,
            estimatedDelivery: '12-20 days'
        },
        {
            id: 'hand-tools',
            name: 'Premium Hand Tools Collection',
            price: 129,
            originalPrice: 169,
            category: 'tools',
            description: 'High-quality hand tools for precision work and general maintenance tasks.',
            image: 'fas fa-hammer',
            rating: 4.6,
            reviews: 189,
            badges: ['Precision Tools'],
            inStock: true,
            estimatedDelivery: '8-15 days'
        },
        {
            id: 'measuring-tools',
            name: 'Precision Measuring Instruments',
            price: 89,
            originalPrice: 119,
            category: 'tools',
            description: 'Accurate measuring tools including laser levels, calipers, and digital meters.',
            image: 'fas fa-ruler',
            rating: 4.5,
            reviews: 134,
            badges: ['High Precision'],
            inStock: true,
            estimatedDelivery: '7-14 days'
        },
        {
            id: 'workshop-equipment',
            name: 'Workshop Equipment & Storage',
            price: 299,
            originalPrice: 399,
            category: 'tools',
            description: 'Workshop organization with tool storage, workbenches, and safety equipment.',
            image: 'fas fa-warehouse',
            rating: 4.4,
            reviews: 167,
            badges: ['Organization+'],
            inStock: true,
            estimatedDelivery: '15-25 days'
        },
        {
            id: 'electrical-tools',
            name: 'Electrical Work Tools Kit',
            price: 179,
            originalPrice: 229,
            category: 'tools',
            description: 'Specialized tools for electrical work including multimeters, wire strippers, and testers.',
            image: 'fas fa-bolt',
            rating: 4.6,
            reviews: 145,
            badges: ['Electrician Grade'],
            inStock: true,
            estimatedDelivery: '10-18 days'
        },
        {
            id: 'plumbing-tools',
            name: 'Plumbing Repair Tools Set',
            price: 149,
            originalPrice: 199,
            category: 'tools',
            description: 'Essential plumbing tools for repairs, installations, and maintenance work.',
            image: 'fas fa-wrench',
            rating: 4.5,
            reviews: 178,
            badges: ['Professional Use'],
            inStock: true,
            estimatedDelivery: '9-16 days'
        },
        {
            id: 'woodworking-tools',
            name: 'Woodworking Craft Tools Kit',
            price: 199,
            originalPrice: 259,
            category: 'tools',
            description: 'Specialized woodworking tools for furniture making and craft projects.',
            image: 'fas fa-tree',
            rating: 4.7,
            reviews: 198,
            badges: ['Craftsman Quality'],
            inStock: true,
            estimatedDelivery: '11-19 days'
        },
        {
            id: 'safety-equipment',
            name: 'Workshop Safety Equipment Set',
            price: 99,
            originalPrice: 129,
            category: 'tools',
            description: 'Complete safety gear including helmets, goggles, gloves, and protective clothing.',
            image: 'fas fa-hard-hat',
            rating: 4.8,
            reviews: 212,
            badges: ['Safety First', 'OSHA Approved'],
            inStock: true,
            estimatedDelivery: '6-12 days'
        },
        {
            id: 'garden-power-tools',
            name: 'Garden Power Tools Collection',
            price: 259,
            originalPrice: 339,
            category: 'tools',
            description: 'Power tools for garden maintenance including trimmer, blower, and hedge cutter.',
            image: 'fas fa-leaf',
            rating: 4.5,
            reviews: 156,
            badges: ['Garden Pro'],
            inStock: true,
            estimatedDelivery: '14-22 days'
        },
        {
            id: 'automotive-tools',
            name: 'Automotive Repair Tools Kit',
            price: 189,
            originalPrice: 249,
            category: 'tools',
            description: 'Professional automotive tools for car maintenance and repair work.',
            image: 'fas fa-car-crash',
            rating: 4.6,
            reviews: 167,
            badges: ['Mechanic Grade'],
            inStock: true,
            estimatedDelivery: '10-17 days'
        },

        // Toys & Games (10 products)
        {
            id: 'educational-toys',
            name: 'Educational STEM Toys Set',
            price: 89,
            originalPrice: 119,
            category: 'toys',
            description: 'Interactive STEM toys that promote learning in science, technology, engineering, and math.',
            image: 'fas fa-robot',
            rating: 4.8,
            reviews: 234,
            badges: ['Educational', 'Age 6-12'],
            inStock: true,
            estimatedDelivery: '7-14 days'
        },
        {
            id: 'board-games',
            name: 'Classic Board Games Collection',
            price: 69,
            originalPrice: 89,
            category: 'toys',
            description: 'Popular board games for family entertainment and strategic thinking.',
            image: 'fas fa-chess',
            rating: 4.7,
            reviews: 189,
            badges: ['Family Fun', 'Classic Games'],
            inStock: true,
            estimatedDelivery: '5-10 days'
        },
        {
            id: 'rc-vehicles',
            name: 'Remote Control Vehicles Set',
            price: 149,
            originalPrice: 199,
            category: 'toys',
            description: 'High-quality RC cars, planes, and drones with advanced control systems.',
            image: 'fas fa-car',
            rating: 4.6,
            reviews: 167,
            badges: ['High Performance', 'Age 8+'],
            inStock: true,
            estimatedDelivery: '9-16 days'
        },
        {
            id: 'building-blocks',
            name: 'Creative Building Blocks Set',
            price: 59,
            originalPrice: 79,
            category: 'toys',
            description: 'Large collection of building blocks for creative construction and imagination.',
            image: 'fas fa-cubes',
            rating: 4.5,
            reviews: 198,
            badges: ['Creative Play', 'Age 4+'],
            inStock: true,
            estimatedDelivery: '6-12 days'
        },
        {
            id: 'action-figures',
            name: 'Action Figures Collection',
            price: 79,
            originalPrice: 99,
            category: 'toys',
            description: 'Popular action figures from movies, comics, and TV shows with accessories.',
            image: 'fas fa-user-astronaut',
            rating: 4.4,
            reviews: 145,
            badges: ['Collector\'s Edition'],
            inStock: true,
            estimatedDelivery: '8-15 days'
        },
        {
            id: 'dolls-playsets',
            name: 'Dolls & Playsets Collection',
            price: 99,
            originalPrice: 129,
            category: 'toys',
            description: 'Beautiful dolls with accompanying playsets and accessories for imaginative play.',
            image: 'fas fa-female',
            rating: 4.7,
            reviews: 178,
            badges: ['Imaginative Play', 'Age 3+'],
            inStock: true,
            estimatedDelivery: '7-14 days'
        },
        {
            id: 'puzzle-games',
            name: 'Puzzle & Brain Games Set',
            price: 49,
            originalPrice: 69,
            category: 'toys',
            description: 'Challenging puzzles and brain games for cognitive development and entertainment.',
            image: 'fas fa-puzzle-piece',
            rating: 4.6,
            reviews: 156,
            badges: ['Brain Training', 'Various Ages'],
            inStock: true,
            estimatedDelivery: '5-9 days'
        },
        {
            id: 'outdoor-toys',
            name: 'Outdoor Play Equipment Set',
            price: 129,
            originalPrice: 169,
            category: 'toys',
            description: 'Active outdoor toys including swings, slides, and sports equipment.',
            image: 'fas fa-playground',
            rating: 4.5,
            reviews: 189,
            badges: ['Active Play', 'Weather Resistant'],
            inStock: true,
            estimatedDelivery: '12-20 days'
        },
        {
            id: 'craft-kits',
            name: 'Arts & Crafts Kits Collection',
            price: 69,
            originalPrice: 89,
            category: 'toys',
            description: 'Creative craft kits for painting, drawing, and hands-on artistic projects.',
            image: 'fas fa-paint-brush',
            rating: 4.8,
            reviews: 212,
            badges: ['Creative', 'Skill Building'],
            inStock: true,
            estimatedDelivery: '6-11 days'
        },
        {
            id: 'electronic-toys',
            name: 'Interactive Electronic Toys',
            price: 109,
            originalPrice: 139,
            category: 'toys',
            description: 'High-tech electronic toys with interactive features and educational content.',
            image: 'fas fa-gamepad',
            rating: 4.4,
            reviews: 167,
            badges: ['High-Tech', 'Interactive'],
            inStock: true,
            estimatedDelivery: '8-15 days'
        }
    ];

    // Initialize products display
    renderAllProducts();
    updateCategoryFilter();
    setupEventListeners();
});

// Setup event listeners for filters and search
function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('productSearch');
    if (searchInput) {
        searchInput.addEventListener('input', filterProducts);
    }

    // Category filter
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterProducts);
    }

    // Sort filter
    const sortFilter = document.getElementById('sortFilter');
    if (sortFilter) {
        sortFilter.addEventListener('change', filterProducts);
    }

    // Price range
    const priceRange = document.getElementById('priceRange');
    if (priceRange) {
        priceRange.addEventListener('input', filterProducts);
    }
}

// Render all products in the grid
function renderAllProducts() {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    window.productDatabase.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Create individual product card
function createProductCard(product) {
    const productDiv = document.createElement('div');
    productDiv.className = 'col-lg-4 col-md-6 product-item';
    productDiv.setAttribute('data-category', product.category);
    productDiv.setAttribute('data-price', product.price);
    productDiv.setAttribute('data-name', product.name.toLowerCase());
    
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    const stars = generateStarRating(product.rating);
    const badges = product.badges ? product.badges.map(badge => `<span class="badge bg-info me-1">${badge}</span>`).join('') : '';
    
    productDiv.innerHTML = `
        <div class="product-card card h-100 shadow-sm">
            <div class="product-image position-relative">
                <div class="image-placeholder bg-light d-flex align-items-center justify-content-center" style="height: 250px;">
                    <i class="${product.image} text-primary" style="font-size: 4rem;"></i>
                </div>
                <div class="product-badges position-absolute top-0 start-0 p-2">
                    ${badges}
                </div>
                <div class="product-actions position-absolute top-0 end-0 p-2">
                    <button class="btn btn-sm btn-outline-light rounded-pill" onclick="toggleWishlist(this)">
                        <i class="fas fa-heart"></i>
                    </button>
                </div>
            </div>
            <div class="card-body">
                <h5 class="card-title">${product.name}</h5>
                <p class="card-text text-muted">${product.description}</p>
                <div class="product-rating mb-2">
                    ${stars}
                    <span class="ms-2 text-muted">(${product.reviews} reviews)</span>
                </div>
                <div class="product-price mb-3">
                    <span class="h4 text-primary">₵${product.price}</span>
                    <span class="text-muted text-decoration-line-through ms-2">₵${product.originalPrice}</span>
                    <span class="badge bg-success ms-2">${discount}% OFF</span>
                </div>
                <div class="product-features mb-3">
                    <small class="text-muted">
                        <i class="fas fa-shipping-fast me-1"></i>${product.estimatedDelivery}
                        <i class="fas fa-shield-check ms-3 me-1"></i>${product.inStock ? 'In Stock' : 'Pre-order'}
                    </small>
                </div>
                <div class="d-grid gap-2">
                    <button class="btn btn-primary" onclick="showProductDetails('${product.id}')">
                        <i class="fas fa-eye me-2"></i>View Details
                    </button>
                    <button class="btn btn-warning" onclick="openPreorderModal('${product.name}', '₵${product.price}')">
                        <i class="fas fa-shopping-cart me-2"></i>Pre-Order Now
                    </button>
                </div>
            </div>
        </div>
    `;
    
    return productDiv;
}

// Generate star rating HTML
function generateStarRating(rating) {
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    
    let stars = '';
    for (let i = 0; i < fullStars; i++) {
        stars += '<i class="fas fa-star text-warning"></i>';
    }
    if (hasHalfStar) {
        stars += '<i class="fas fa-star-half-alt text-warning"></i>';
    }
    for (let i = 0; i < emptyStars; i++) {
        stars += '<i class="far fa-star text-warning"></i>';
    }
    return stars;
}

// Update category filter dropdown
function updateCategoryFilter() {
    const categoryFilter = document.getElementById('categoryFilter');
    if (!categoryFilter) return;
    
    const categories = {
        'electronics': 'Electronics & Gadgets',
        'fashion': 'Fashion & Apparel', 
        'home': 'Home & Garden',
        'sports': 'Sports & Fitness',
        'beauty': 'Beauty & Health',
        'automotive': 'Automotive',
        'books': 'Books & Education',
        'tools': 'Tools & Hardware',
        'toys': 'Toys & Games'
    };
    
    // Clear existing options except "All Categories"
    while (categoryFilter.children.length > 1) {
        categoryFilter.removeChild(categoryFilter.lastChild);
    }
    
    // Add category options
    Object.entries(categories).forEach(([value, label]) => {
        const option = document.createElement('option');
        option.value = value;
        option.textContent = label;
        categoryFilter.appendChild(option);
    });
}

// Filter products based on search, category, and price
function filterProducts() {
    const searchTerm = document.getElementById('productSearch')?.value.toLowerCase() || '';
    const categoryFilter = document.getElementById('categoryFilter')?.value || '';
    const sortFilter = document.getElementById('sortFilter')?.value || '';
    const priceRange = parseInt(document.getElementById('priceRange')?.value) || 2000;
    
    let filteredProducts = window.productDatabase.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) || 
                             product.description.toLowerCase().includes(searchTerm);
        const matchesCategory = !categoryFilter || product.category === categoryFilter;
        const matchesPrice = product.price <= priceRange;
        
        return matchesSearch && matchesCategory && matchesPrice;
    });
    
    // Sort products
    if (sortFilter === 'price-low') {
        filteredProducts.sort((a, b) => a.price - b.price);
    } else if (sortFilter === 'price-high') {
        filteredProducts.sort((a, b) => b.price - a.price);
    } else if (sortFilter === 'rating') {
        filteredProducts.sort((a, b) => b.rating - a.rating);
    } else if (sortFilter === 'name') {
        filteredProducts.sort((a, b) => a.name.localeCompare(b.name));
    }
    
    renderFilteredProducts(filteredProducts);
}

// Render filtered products
function renderFilteredProducts(products) {
    const productsGrid = document.getElementById('productsGrid');
    if (!productsGrid) return;
    
    productsGrid.innerHTML = '';
    
    if (products.length === 0) {
        productsGrid.innerHTML = `
            <div class="col-12 text-center py-5">
                <i class="fas fa-search fa-3x text-muted mb-3"></i>
                <h4>No products found</h4>
                <p class="text-muted">Try adjusting your search or filter criteria</p>
            </div>
        `;
        return;
    }
    
    products.forEach(product => {
        const productCard = createProductCard(product);
        productsGrid.appendChild(productCard);
    });
}

// Show product details modal
function showProductDetails(productId) {
    const product = window.productDatabase.find(p => p.id === productId);
    if (!product) return;
    
    const modal = document.getElementById('productModal');
    if (!modal) return;
    
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    const stars = generateStarRating(product.rating);
    const badges = product.badges ? product.badges.map(badge => `<span class="badge bg-info me-1">${badge}</span>`).join('') : '';
    
    // Build specifications HTML
    let specificationsHtml = '';
    if (product.specifications) {
        specificationsHtml = Object.entries(product.specifications)
            .map(([key, value]) => `<li><strong>${key}:</strong> ${value}</li>`)
            .join('');
    }
    
    // Build features HTML
    let featuresHtml = '';
    if (product.features) {
        featuresHtml = product.features
            .map(feature => `<li><i class="fas fa-check text-success me-2"></i>${feature}</li>`)
            .join('');
    }
    
    modal.innerHTML = `
        <div class="modal-dialog modal-lg">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title">${product.name}</h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                </div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-md-6">
                            <div class="product-image-large bg-light d-flex align-items-center justify-content-center mb-3" style="height: 300px;">
                                <i class="${product.image} text-primary" style="font-size: 6rem;"></i>
                            </div>
                            <div class="product-badges mb-3">
                                ${badges}
                            </div>
                        </div>
                        <div class="col-md-6">
                            <div class="product-rating mb-3">
                                ${stars}
                                <span class="ms-2 text-muted">(${product.reviews} reviews)</span>
                            </div>
                            <div class="product-price mb-3">
                                <span class="h3 text-primary">₵${product.price}</span>
                                <span class="text-muted text-decoration-line-through ms-2">₵${product.originalPrice}</span>
                                <span class="badge bg-success ms-2">${discount}% OFF</span>
                            </div>
                            <p class="product-description mb-3">${product.description}</p>
                            <div class="product-info mb-3">
                                <p><i class="fas fa-shipping-fast text-primary me-2"></i><strong>Delivery:</strong> ${product.estimatedDelivery}</p>
                                <p><i class="fas fa-shield-check text-success me-2"></i><strong>Status:</strong> ${product.inStock ? 'In Stock' : 'Pre-order Available'}</p>
                            </div>
                            <div class="d-grid gap-2">
                                <button class="btn btn-warning btn-lg" onclick="openPreorderModal('${product.name}', '₵${product.price}')">
                                    <i class="fas fa-shopping-cart me-2"></i>Pre-Order Now
                                </button>
                                <button class="btn btn-outline-primary" onclick="toggleWishlist(this)">
                                    <i class="fas fa-heart me-2"></i>Add to Wishlist
                                </button>
                            </div>
                        </div>
                    </div>
                    ${specificationsHtml ? `
                    <div class="mt-4">
                        <h6>Specifications:</h6>
                        <ul class="list-unstyled">
                            ${specificationsHtml}
                        </ul>
                    </div>
                    ` : ''}
                    ${featuresHtml ? `
                    <div class="mt-4">
                        <h6>Features:</h6>
                        <ul class="list-unstyled">
                            ${featuresHtml}
                        </ul>
                    </div>
                    ` : ''}
                </div>
            </div>
        </div>
    `;
    
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
}

// Toggle wishlist
function toggleWishlist(button) {
    const heart = button.querySelector('i');
    if (heart.classList.contains('fas')) {
        heart.classList.remove('fas');
        heart.classList.add('far');
        button.classList.remove('text-danger');
    } else {
        heart.classList.remove('far');
        heart.classList.add('fas');
        button.classList.add('text-danger');
    }
}

// Open pre-order modal
function openPreorderModal(productName, productPrice) {
    const modal = document.getElementById('preorderModal');
    if (!modal) return;
    
    document.getElementById('preorderProductName').textContent = productName;
    document.getElementById('preorderProductPrice').textContent = productPrice;
    
    const bootstrapModal = new bootstrap.Modal(modal);
    bootstrapModal.show();
}

// Handle pre-order form submission
function submitPreorder() {
    const form = document.getElementById('preorderForm');
    const formData = new FormData(form);
    
    const customerData = {
        name: formData.get('customerName'),
        email: formData.get('customerEmail'),
        phone: formData.get('customerPhone'),
        product: document.getElementById('preorderProductName').textContent,
        price: document.getElementById('preorderProductPrice').textContent,
        quantity: formData.get('quantity'),
        message: formData.get('message')
    };
    
    // Show loading state
    const submitBtn = document.getElementById('preorderSubmitBtn');
    const originalText = submitBtn.innerHTML;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin me-2"></i>Processing...';
    submitBtn.disabled = true;
    
    // Send email to admin
    emailjs.send('service_sbijez1', 'template_preorder', {
        customer_name: customerData.name,
        customer_email: customerData.email,
        customer_phone: customerData.phone,
        product_name: customerData.product,
        product_price: customerData.price,
        quantity: customerData.quantity,
        message: customerData.message,
        to_email: 'admin@odisikaimport.com'
    }).then(function() {
        // Close modal and redirect to WhatsApp
        const modal = bootstrap.Modal.getInstance(document.getElementById('preorderModal'));
        modal.hide();
        
        // Redirect to WhatsApp
        const whatsappMessage = encodeURIComponent(
            `Hello! I would like to pre-order:\n\n` +
            `Product: ${customerData.product}\n` +
            `Price: ${customerData.price}\n` +
            `Quantity: ${customerData.quantity}\n` +
            `Name: ${customerData.name}\n` +
            `Email: ${customerData.email}\n` +
            `Phone: ${customerData.phone}\n\n` +
            `Additional message: ${customerData.message || 'None'}`
        );
        
        window.open(`https://wa.me/233543210987?text=${whatsappMessage}`, '_blank');
        
        // Reset form and button
        form.reset();
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
        
        // Show success alert
        alert('Pre-order submitted successfully! You will be redirected to WhatsApp to complete your order.');
        
    }).catch(function(error) {
        console.error('Error sending pre-order:', error);
        alert('Error submitting pre-order. Please try again.');
        
        // Reset button
        submitBtn.innerHTML = originalText;
        submitBtn.disabled = false;
    });
}