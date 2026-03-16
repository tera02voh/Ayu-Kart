// ================================================
// AyuKart - Product Data & Quiz Data
// ================================================

// Products Database
const productsData = [
    {
        id: 1,
        name: "Ashwagandha Supreme Capsules",
        category: "supplements",
        price: 899,
        originalPrice: 1299,
        rating: 4.8,
        reviews: 245,
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500",
        images: [
            "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500",
            "https://images.unsplash.com/photo-1471864190281-a93a3070b6de?w=500",
            "https://images.unsplash.com/photo-1587893904933-d01041e22e6e?w=500"
        ],
        dosha: ["vata", "kapha"],
        shortDesc: "Premium Ashwagandha extract for stress relief and vitality",
        description: "Our Ashwagandha Supreme Capsules contain 100% pure, organic Ashwagandha root extract, standardized to 5% withanolides. This ancient Ayurvedic herb is renowned for its adaptogenic properties, helping your body manage stress naturally while supporting overall wellness.",
        ingredients: ["Organic Ashwagandha Root Extract (500mg)", "Black Pepper Extract", "Vegetable Cellulose Capsule"],
        benefits: ["Reduces stress and anxiety", "Improves energy and stamina", "Supports healthy sleep", "Boosts immunity", "Enhances cognitive function"],
        usage: "Take 1-2 capsules daily with warm water after meals, or as directed by your healthcare practitioner.",
        sku: "AYU-ASH-001",
        stock: true
    },
    {
        id: 2,
        name: "Triphala Digestive Wellness",
        category: "supplements",
        price: 699,
        originalPrice: 999,
        rating: 4.7,
        reviews: 198,
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500",
        images: ["https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500"],
        dosha: ["vata", "pitta", "kapha"],
        shortDesc: "Tri-doshic blend for digestive health and detoxification",
        description: "Triphala is a cornerstone of Ayurvedic medicine, combining three powerful fruits for comprehensive digestive support.",
        ingredients: ["Amalaki (Indian Gooseberry)", "Bibhitaki", "Haritaki"],
        benefits: ["Supports healthy digestion", "Gentle detoxification", "Promotes regular elimination", "Rich in antioxidants"],
        usage: "Take 2 capsules before bed with warm water.",
        sku: "AYU-TRI-002",
        stock: true
    },
    {
        id: 3,
        name: "Turmeric Curcumin Complex",
        category: "supplements",
        price: 799,
        originalPrice: 1099,
        rating: 4.9,
        reviews: 312,
        image: "https://images.unsplash.com/photo-1571249604447-c4d4e4396c70?w=500",
        images: ["https://images.unsplash.com/photo-1571249604447-c4d4e4396c70?w=500"],
        dosha: ["pitta", "kapha"],
        shortDesc: "Anti-inflammatory golden spice with enhanced absorption",
        description: "High-potency turmeric with 95% curcuminoids and black pepper for maximum bioavailability.",
        ingredients: ["Organic Turmeric Extract (95% Curcuminoids)", "BioPerine Black Pepper Extract"],
        benefits: ["Powerful anti-inflammatory", "Supports joint health", "Boosts immunity", "Promotes heart health"],
        usage: "Take 1 capsule twice daily with meals.",
        sku: "AYU-TUR-003",
        stock: true
    },
    {
        id: 4,
        name: "Brahmi Memory & Focus",
        category: "supplements",
        price: 849,
        originalPrice: 1199,
        rating: 4.6,
        reviews: 167,
        image: "https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500",
        images: ["https://images.unsplash.com/photo-1505751172876-fa1923c5c528?w=500"],
        dosha: ["vata", "pitta"],
        shortDesc: "Ancient herb for mental clarity and cognitive support",
        description: "Pure Brahmi extract to enhance memory, focus, and mental performance.",
        ingredients: ["Organic Brahmi (Bacopa Monnieri) Extract", "Gotu Kola"],
        benefits: ["Enhances memory and concentration", "Reduces mental fatigue", "Supports brain health", "Calms the mind"],
        usage: "Take 1 capsule twice daily with water.",
        sku: "AYU-BRA-004",
        stock: true
    },
    {
        id: 5,
        name: "Neem & Turmeric Detox Oil",
        category: "oils",
        price: 649,
        originalPrice: 899,
        rating: 4.7,
        reviews: 134,
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500",
        images: ["https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500"],
        dosha: ["pitta", "kapha"],
        shortDesc: "Purifying massage oil for skin and body wellness",
        description: "Traditional Ayurvedic oil blend with neem and turmeric for detoxification and skin purification.",
        ingredients: ["Cold-pressed Sesame Oil", "Neem Extract", "Turmeric", "Essential Oils"],
        benefits: ["Purifies and detoxifies skin", "Supports lymphatic drainage", "Antibacterial properties", "Nourishes deeply"],
        usage: "Apply to body before shower or use for Abhyanga massage.",
        sku: "AYU-OIL-005",
        stock: true
    },
    {
        id: 6,
        name: "Kumkumadi Brightening Oil",
        category: "oils",
        price: 1499,
        originalPrice: 1999,
        rating: 4.9,
        reviews: 289,
        image: "https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500",
        images: ["https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?w=500"],
        dosha: ["vata", "pitta"],
        shortDesc: "Luxurious facial oil with saffron for radiant skin",
        description: "Premium Kumkumadi oil with 16 potent herbs including saffron for luminous, youthful skin.",
        ingredients: ["Saffron", "Sandalwood", "Lotus", "Licorice", "Almond Oil Base"],
        benefits: ["Brightens complexion", "Reduces dark spots", "Anti-aging properties", "Evens skin tone"],
        usage: "Apply 3-4 drops to face at night after cleansing.",
        sku: "AYU-OIL-006",
        stock: true
    },
    {
        id: 7,
        name: "Bhringraj Hair Growth Oil",
        category: "haircare",
        price: 549,
        originalPrice: 799,
        rating: 4.8,
        reviews: 421,
        image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500",
        images: ["https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500"],
        dosha: ["vata", "pitta"],
        shortDesc: "Traditional formula for healthy hair growth",
        description: "Bhringraj, the king of herbs for hair, combined with nourishing oils for strong, lustrous hair.",
        ingredients: ["Bhringraj Extract", "Amla", "Coconut Oil", "Sesame Oil"],
        benefits: ["Promotes hair growth", "Prevents premature graying", "Strengthens hair roots", "Adds natural shine"],
        usage: "Massage into scalp 2-3 times weekly, leave for 1 hour, then wash.",
        sku: "AYU-HAIR-007",
        stock: true
    },
    {
        id: 8,
        name: "Rose & Sandalwood Face Cream",
        category: "skincare",
        price: 899,
        originalPrice: 1299,
        rating: 4.7,
        reviews: 203,
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500",
        images: ["https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500"],
        dosha: ["pitta", "vata"],
        shortDesc: "Hydrating face cream for all skin types",
        description: "Luxurious blend of rose and sandalwood for deeply hydrated, glowing skin.",
        ingredients: ["Rose Water", "Sandalwood", "Aloe Vera", "Almond Oil", "Shea Butter"],
        benefits: ["Deep hydration", "Soothes and cools skin", "Reduces redness", "Natural glow"],
        usage: "Apply morning and evening to clean face and neck.",
        sku: "AYU-SKIN-008",
        stock: true
    },
    {
        id: 9,
        name: "Neem & Tulsi Face Wash",
        category: "skincare",
        price: 399,
        originalPrice: 599,
        rating: 4.6,
        reviews: 567,
        image: "https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500",
        images: ["https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500"],
        dosha: ["kapha", "pitta"],
        shortDesc: "Purifying cleanser for clear, healthy skin",
        description: "Gentle yet effective face wash with antibacterial neem and tulsi.",
        ingredients: ["Neem Extract", "Tulsi (Holy Basil)", "Aloe Vera", "Glycerin"],
        benefits: ["Deep cleansing", "Controls oil", "Prevents acne", "Maintains pH balance"],
        usage: "Use twice daily, massage gently and rinse with water.",
        sku: "AYU-SKIN-009",
        stock: true
    },
    {
        id: 10,
        name: "Tulsi Green Tea Immunity",
        category: "teas",
        price: 299,
        originalPrice: 449,
        rating: 4.8,
        reviews: 389,
        image: "https://images.unsplash.com/photo-1594631661960-54087d4f0c7f?w=500",
        images: ["https://images.unsplash.com/photo-1594631661960-54087d4f0c7f?w=500"],
        dosha: ["vata", "kapha", "pitta"],
        shortDesc: "Antioxidant-rich blend for immune support",
        description: "Sacred Tulsi combined with premium green tea for daily wellness.",
        ingredients: ["Organic Tulsi (Holy Basil)", "Green Tea", "Mint", "Ginger"],
        benefits: ["Boosts immunity", "Rich in antioxidants", "Reduces stress", "Aids digestion"],
        usage: "Steep 1 tea bag in hot water for 3-5 minutes. Drink 2-3 cups daily.",
        sku: "AYU-TEA-010",
        stock: true
    },
    {
        id: 11,
        name: "Chamomile Sleep Tea",
        category: "teas",
        price: 349,
        originalPrice: 499,
        rating: 4.9,
        reviews: 298,
        image: "https://images.unsplash.com/photo-1594631661960-54087d4f0c7f?w=500",
        images: ["https://images.unsplash.com/photo-1594631661960-54087d4f0c7f?w=500"],
        dosha: ["vata", "pitta"],
        shortDesc: "Calming herbal blend for restful sleep",
        description: "Soothing chamomile with Ayurvedic herbs for peaceful, rejuvenating sleep.",
        ingredients: ["Chamomile", "Brahmi", "Ashwagandha", "Lavender", "Jatamansi"],
        benefits: ["Promotes deep sleep", "Calms nervous system", "Reduces anxiety", "Relaxes muscles"],
        usage: "Drink 1 cup 30 minutes before bedtime.",
        sku: "AYU-TEA-011",
        stock: true
    },
    {
        id: 12,
        name: "Ginger Turmeric Digestive Tea",
        category: "teas",
        price: 279,
        originalPrice: 399,
        rating: 4.7,
        reviews: 412,
        image: "https://images.unsplash.com/photo-1594631661960-54087d4f0c7f?w=500",
        images: ["https://images.unsplash.com/photo-1594631661960-54087d4f0c7f?w=500"],
        dosha: ["vata", "kapha"],
        shortDesc: "Warming blend for digestive wellness",
        description: "Spicy and warming tea to kindle digestive fire and boost metabolism.",
        ingredients: ["Fresh Ginger", "Turmeric", "Black Pepper", "Cumin", "Fennel"],
        benefits: ["Improves digestion", "Reduces bloating", "Anti-inflammatory", "Boosts metabolism"],
        usage: "Drink after meals for digestive support.",
        sku: "AYU-TEA-012",
        stock: true
    },
    {
        id: 13,
        name: "Chyawanprash Immunity Boost",
        category: "immunity",
        price: 599,
        originalPrice: 849,
        rating: 4.8,
        reviews: 531,
        image: "https://images.unsplash.com/photo-1571249604447-c4d4e4396c70?w=500",
        images: ["https://images.unsplash.com/photo-1571249604447-c4d4e4396c70?w=500"],
        dosha: ["vata", "kapha", "pitta"],
        shortDesc: "Traditional Ayurvedic jam for vitality and immunity",
        description: "Ancient formulation with 40+ herbs including Amla for comprehensive immune support.",
        ingredients: ["Amla (Indian Gooseberry)", "Ashwagandha", "Giloy", "Honey", "Ghee", "40+ Ayurvedic Herbs"],
        benefits: ["Strengthens immunity", "Increases energy", "Supports respiratory health", "Rich in Vitamin C"],
        usage: "Take 1-2 teaspoons daily with warm milk or water.",
        sku: "AYU-IMM-013",
        stock: true
    },
    {
        id: 14,
        name: "Giloy Immunity Capsules",
        category: "immunity",
        price: 749,
        originalPrice: 1099,
        rating: 4.6,
        reviews: 276,
        image: "https://images.unsplash.com/photo-1571249604447-c4d4e4396c70?w=500",
        images: ["https://images.unsplash.com/photo-1571249604447-c4d4e4396c70?w=500"],
        dosha: ["vata", "kapha", "pitta"],
        shortDesc: "Powerful immunomodulator and detoxifier",
        description: "Pure Giloy extract to strengthen your body's natural defense system.",
        ingredients: ["Organic Giloy (Tinospora Cordifolia) Extract 500mg"],
        benefits: ["Boosts immunity", "Detoxifies body", "Reduces fever", "Anti-inflammatory"],
        usage: "Take 1 capsule twice daily with warm water.",
        sku: "AYU-IMM-014",
        stock: true
    },
    {
        id: 15,
        name: "Amla Vitamin C Powder",
        category: "immunity",
        price: 449,
        originalPrice: 649,
        rating: 4.7,
        reviews: 198,
        image: "https://images.unsplash.com/photo-1571249604447-c4d4e4396c70?w=500",
        images: ["https://images.unsplash.com/photo-1571249604447-c4d4e4396c70?w=500"],
        dosha: ["pitta", "kapha"],
        shortDesc: "Natural vitamin C from Indian Gooseberry",
        description: "Pure Amla powder, nature's richest source of Vitamin C for immunity and rejuvenation.",
        ingredients: ["100% Organic Amla (Indian Gooseberry) Powder"],
        benefits: ["Natural Vitamin C", "Boosts immunity", "Improves skin health", "Supports digestion"],
        usage: "Mix 1 teaspoon in water or juice, take daily.",
        sku: "AYU-IMM-015",
        stock: true
    },
    {
        id: 16,
        name: "Amla Hair Strengthening Shampoo",
        category: "haircare",
        price: 449,
        originalPrice: 649,
        rating: 4.5,
        reviews: 345,
        image: "https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500",
        images: ["https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500"],
        dosha: ["vata", "pitta", "kapha"],
        shortDesc: "Nourishing shampoo for healthy, strong hair",
        description: "Gentle, sulfate-free shampoo enriched with Amla for naturally beautiful hair.",
        ingredients: ["Amla Extract", "Shikakai", "Reetha", "Aloe Vera", "Essential Oils"],
        benefits: ["Strengthens hair", "Adds shine", "Reduces hair fall", "Chemical-free"],
        usage: "Apply to wet hair, massage, and rinse thoroughly.",
        sku: "AYU-HAIR-016",
        stock: true
    }
];

// Dosha Quiz Questions
const quizQuestions = [
    {
        id: 1,
        question: "What best describes your body frame?",
        options: [
            { text: "Thin, lean, hard to gain weight", dosha: "vata", points: 3 },
            { text: "Medium build, muscular", dosha: "pitta", points: 3 },
            { text: "Large frame, easy to gain weight", dosha: "kapha", points: 3 },
            { text: "Variable, between thin and medium", dosha: "vata", points: 1 }
        ]
    },
    {
        id: 2,
        question: "How would you describe your skin?",
        options: [
            { text: "Dry, rough, thin", dosha: "vata", points: 3 },
            { text: "Warm, oily, prone to redness", dosha: "pitta", points: 3 },
            { text: "Thick, oily, smooth", dosha: "kapha", points: 3 },
            { text: "Combination, normal", dosha: "pitta", points: 1 }
        ]
    },
    {
        id: 3,
        question: "What's your energy level like?",
        options: [
            { text: "Bursts of energy, then fatigue", dosha: "vata", points: 3 },
            { text: "Intense, focused energy", dosha: "pitta", points: 3 },
            { text: "Steady, consistent energy", dosha: "kapha", points: 3 },
            { text: "Moderate, balanced energy", dosha: "pitta", points: 1 }
        ]
    },
    {
        id: 4,
        question: "How is your digestion?",
        options: [
            { text: "Irregular, sometimes bloated", dosha: "vata", points: 3 },
            { text: "Strong, can eat anything", dosha: "pitta", points: 3 },
            { text: "Slow, steady", dosha: "kapha", points: 3 },
            { text: "Generally good", dosha: "pitta", points: 1 }
        ]
    },
    {
        id: 5,
        question: "What's your sleep pattern?",
        options: [
            { text: "Light sleeper, easily disturbed", dosha: "vata", points: 3 },
            { text: "Moderate sleep, wake refreshed", dosha: "pitta", points: 3 },
            { text: "Deep sleeper, hard to wake", dosha: "kapha", points: 3 },
            { text: "Variable", dosha: "vata", points: 1 }
        ]
    },
    {
        id: 6,
        question: "How do you handle stress?",
        options: [
            { text: "Get anxious and worried", dosha: "vata", points: 3 },
            { text: "Get irritated and angry", dosha: "pitta", points: 3 },
            { text: "Become withdrawn and sad", dosha: "kapha", points: 3 },
            { text: "Generally calm", dosha: "kapha", points: 1 }
        ]
    },
    {
        id: 7,
        question: "What's your body temperature preference?",
        options: [
            { text: "Love warmth, dislike cold", dosha: "vata", points: 3 },
            { text: "Prefer cool, dislike heat", dosha: "pitta", points: 3 },
            { text: "Comfortable in most temperatures", dosha: "kapha", points: 2 },
            { text: "Like cool but not too cold", dosha: "pitta", points: 1 }
        ]
    },
    {
        id: 8,
        question: "How do you learn best?",
        options: [
            { text: "Quick to learn, quick to forget", dosha: "vata", points: 3 },
            { text: "Sharp intellect, focused", dosha: "pitta", points: 3 },
            { text: "Slow but steady, good memory", dosha: "kapha", points: 3 },
            { text: "Average learning pace", dosha: "pitta", points: 1 }
        ]
    }
];

// Blog Articles
const blogArticles = [
    {
        id: 1,
        title: "Understanding the Three Doshas: Your Path to Balance",
        category: "Ayurveda Basics",
        date: "March 10, 2024",
        author: "Dr. Priya Sharma",
        image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=800",
        excerpt: "Discover the fundamental principles of Ayurveda and how Vata, Pitta, and Kapha doshas influence your health and wellbeing.",
        content: `
            <p>Ayurveda, the ancient Indian system of medicine, teaches us that everything in the universe is composed of five elements: ether, air, fire, water, and earth. These elements combine to form three fundamental energies or doshas: Vata, Pitta, and Kapha.</p>
            
            <h2>Vata: The Energy of Movement</h2>
            <p>Vata is composed of ether and air. It governs all movement in the body - from blinking to breathing, from circulation to elimination. When balanced, Vata promotes creativity and vitality. When imbalanced, it can cause anxiety, dry skin, and digestive issues.</p>
            
            <h2>Pitta: The Energy of Transformation</h2>
            <p>Pitta combines fire and water. It controls digestion, metabolism, and body temperature. Balanced Pitta brings intelligence, courage, and healthy digestion. Imbalanced Pitta manifests as inflammation, acidity, and anger.</p>
            
            <h2>Kapha: The Energy of Structure</h2>
            <p>Kapha is made of water and earth. It provides structure, lubrication, and stability. Balanced Kapha creates strength, immunity, and calm. Excess Kapha leads to congestion, weight gain, and lethargy.</p>
            
            <p>Understanding your unique dosha constitution is the first step toward optimal health in Ayurveda.</p>
        `
    },
    {
        id: 2,
        title: "Seasonal Ayurvedic Routines for Spring Wellness",
        category: "Seasonal Living",
        date: "March 8, 2024",
        author: "Anjali Mehta",
        image: "https://images.unsplash.com/photo-1490730141103-6cac27aaab94?w=800",
        excerpt: "Learn how to align your lifestyle with spring season using Ayurvedic wisdom for optimal health and vitality.",
        content: `
            <p>Spring is the season of renewal and rejuvenation. In Ayurveda, spring is Kapha season, when the earth element dominates.</p>
            
            <h2>Spring Cleansing</h2>
            <p>This is the ideal time for gentle detoxification to eliminate the accumulation of Kapha from winter. Focus on light, warm, and dry foods.</p>
            
            <h2>Recommended Practices</h2>
            <p>- Wake up early and practice yoga<br>
            - Drink warm water with lemon and ginger<br>
            - Favor bitter and pungent tastes<br>
            - Engage in vigorous exercise</p>
        `
    },
    {
        id: 3,
        title: "The Power of Turmeric: Golden Spice of Life",
        category: "Herbal Wisdom",
        date: "March 5, 2024",
        author: "Dr. Rajesh Kumar",
        image: "https://images.unsplash.com/photo-1615485290161-e2e1e25ed6f3?w=800",
        excerpt: "Explore the incredible healing properties of turmeric and how to incorporate this sacred spice into your daily routine.",
        content: `
            <p>Turmeric, known as Haridra in Sanskrit, has been revered in Ayurveda for thousands of years as a powerful healing spice.</p>
            
            <h2>Health Benefits</h2>
            <p>- Powerful anti-inflammatory<br>
            - Supports joint health<br>
            - Boosts immunity<br>
            - Promotes healthy skin<br>
            - Aids digestion</p>
            
            <h2>How to Use</h2>
            <p>Mix turmeric with black pepper for better absorption. Try golden milk, add to curries, or take as a supplement.</p>
        `
    }
];
