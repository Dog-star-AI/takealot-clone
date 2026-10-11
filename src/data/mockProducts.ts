import { Product, Department } from '../types';

export const DEPARTMENTS: Department[] = [
  {
    id: 'tech',
    name: 'Computers & Electronics',
    icon: 'Laptop',
    categories: ['Laptops & Computers', 'Smartphones & Smartwatches', 'Audio & Headphones', 'TV & Media Players', 'Power Banks & Charging']
  },
  {
    id: 'appliances',
    name: 'Appliances & Kitchen',
    icon: 'Microwave',
    categories: ['Air Fryers', 'Coffee & Espresso', 'Blenders & Juicers', 'Microwaves', 'Refrigerators & Freezers']
  },
  {
    id: 'gaming',
    name: 'Gaming & Media',
    icon: 'Gamepad2',
    categories: ['PlayStation 5', 'Xbox Series', 'Nintendo Switch', 'Gaming Headsets', 'PC Gaming & Monitors']
  },
  {
    id: 'home',
    name: 'Home & Outdoor',
    icon: 'Home',
    categories: ['Braai & BBQ', 'Power Stations & Inverters', 'Patio Furniture', 'Tools & DIY', 'Cookware & Dining']
  },
  {
    id: 'beauty',
    name: 'Beauty & Personal Care',
    icon: 'Sparkles',
    categories: ['Fragrances', 'Skincare', 'Hair Styling & Grooming', 'Oral Care', 'Health & Wellness']
  },
  {
    id: 'fashion',
    name: 'Fashion & Luggage',
    icon: 'Shirt',
    categories: ['Sneakers & Footwear', 'Watches & Jewellery', 'Backpacks & Luggage', 'Activewear', 'Sunglasses']
  },
  {
    id: 'liquor',
    name: 'Liquor & Beverages',
    icon: 'Wine',
    categories: ['South African Gin', 'Cape Wines & Pinotage', 'Whiskey & Single Malts', 'Craft Beers & Ciders', 'Coffee Beans']
  }
];

export const MOCK_PRODUCTS: Product[] = [
  {
    id: 'prod-1',
    title: 'Xiaomi Smart Air Fryer Pro 4L with Viewing Window - White',
    brand: 'Xiaomi',
    department: 'appliances',
    category: 'Air Fryers',
    price: 1499,
    listPrice: 2299,
    discountPercent: 35,
    rating: 4.8,
    reviewCount: 342,
    image: 'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1585515320310-259814833e62?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockCount: 18,
    warehouse: 'JHB & CPT',
    isDailyDeal: true,
    dealEndsInHours: 6,
    isNextDayEligible: true,
    badge: 'Daily Deal',
    description: 'Bake, ferment, defrost and dehydrate with 360-degree heated air circulation. Features a 3-layer heat-insulating transparent window for visual monitoring of cooking status in real-time.',
    features: [
      '4L optimal capacity with grill rack for 1-5 people',
      'Transparent window design for easy food inspection',
      'OLED display with smart scheduling up to 24 hours',
      'Temperature range: 40°C to 200°C',
      'Mi Home App connected with 100+ cloud recipes'
    ],
    specs: {
      'Capacity': '4.0 Litres',
      'Power Output': '1600 W',
      'Colour': 'Gloss White',
      'Warranty': '12 Months Limited'
    },
    seller: 'Takealot'
  },
  {
    id: 'prod-2',
    title: 'Sony WH-1000XM5 Wireless Noise-Cancelling Headphones - Silver',
    brand: 'Sony',
    department: 'tech',
    category: 'Audio & Headphones',
    price: 7499,
    listPrice: 8999,
    discountPercent: 17,
    rating: 4.9,
    reviewCount: 512,
    image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?auto=format&fit=crop&w=800&q=80',
      'https://images.unsplash.com/photo-1484704849700-f032a568e944?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockCount: 8,
    warehouse: 'JHB & CPT',
    isDailyDeal: true,
    dealEndsInHours: 8,
    isNextDayEligible: true,
    badge: 'Top Pick',
    description: 'Industry-leading noise cancellation optimized to you automatically. Crystal clear hands-free calling with 4 beamforming microphones and advanced audio signal processing.',
    features: [
      'Industry-leading noise cancellation with two processors and 8 microphones',
      'Up to 30 hours battery life with quick 3-minute charge for 3 hours playback',
      'Ultra-comfortable, lightweight design with soft fit leather',
      'Multipoint connection allows switching between two devices simultaneously',
      'Speak-to-chat and intuitive touch control sensor settings'
    ],
    specs: {
      'Battery Life': 'Up to 30 Hours (ANC On)',
      'Connectivity': 'Bluetooth 5.2 / 3.5mm Aux',
      'Weight': '250g',
      'Warranty': '12 Months Sony SA'
    },
    seller: 'Sony Official Store'
  },
  {
    id: 'prod-3',
    title: 'EcoFlow RIVER 2 Pro Portable Power Station 768Wh / 800W',
    brand: 'EcoFlow',
    department: 'home',
    category: 'Power Stations & Inverters',
    price: 9999,
    listPrice: 13999,
    discountPercent: 29,
    rating: 4.9,
    reviewCount: 420,
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockCount: 14,
    warehouse: 'JHB',
    isDailyDeal: true,
    dealEndsInHours: 5,
    isNextDayEligible: true,
    badge: 'Loadshedding Essential',
    description: 'Beat loadshedding! Charges 0-100% in only 70 minutes using AC mains. Safe LFP battery chemistry provides 3000+ full battery cycles (nearly 10 years of daily use).',
    features: [
      '768Wh capacity with 800W continuous output (1600W X-Boost surge)',
      'Hyper-fast 70 minute 0-100% wall recharge time',
      'Long-life LiFePO4 battery with 3000+ cycles to 80%',
      'EPS auto-switch in less than 30ms for uninterrupted Wi-Fi & PC backup',
      'Solar input ready up to 220W'
    ],
    specs: {
      'Capacity': '768 Wh',
      'Inverter Output': '800W Pure Sine Wave',
      'Battery Chemistry': 'LFP (LiFePO4)',
      'Weight': '7.8 kg',
      'Warranty': '5 Years Manufacturer Warranty'
    },
    seller: 'EcoFlow South Africa'
  },
  {
    id: 'prod-4',
    title: 'PlayStation 5 Slim Console (1TB SSD) - D Chassis',
    brand: 'Sony',
    department: 'gaming',
    category: 'PlayStation 5',
    price: 11499,
    listPrice: 12999,
    discountPercent: 12,
    rating: 5.0,
    reviewCount: 889,
    image: 'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1606813907291-d86efa9b94db?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockCount: 22,
    warehouse: 'JHB & CPT',
    isDailyDeal: false,
    isNextDayEligible: true,
    badge: 'Best Seller',
    description: 'Experience lightning-fast loading with an ultra-high speed SSD, deeper immersion with support for haptic feedback, adaptive triggers and 3D Audio, and an all-new generation of incredible PlayStation games.',
    features: [
      'Slim design packed with 1TB of lightning-fast NVMe SSD storage',
      'Ray Tracing support and up to 120fps with 120Hz output on 4K displays',
      'Tempest 3D AudioTech and HDR technology',
      'Includes DualSense Wireless Controller with haptic feedback'
    ],
    specs: {
      'Storage': '1TB Custom NVMe SSD',
      'Resolution': 'Up to 4K 120Hz / 8K output',
      'Optical Drive': 'Ultra HD Blu-ray Disc Player',
      'Warranty': '12 Months Partserve'
    },
    seller: 'Takealot'
  },
  {
    id: 'prod-5',
    title: 'Weber 57cm Original Kettle Charcoal Braai - Black',
    brand: 'Weber',
    department: 'home',
    category: 'Braai & BBQ',
    price: 3299,
    listPrice: 4199,
    discountPercent: 21,
    rating: 4.9,
    reviewCount: 630,
    image: 'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockCount: 15,
    warehouse: 'JHB & CPT',
    isDailyDeal: true,
    dealEndsInHours: 12,
    isNextDayEligible: true,
    badge: 'SA Favourite',
    description: 'The legendary kettle braai loved by South African families for authentic Sunday braais. Heavy-gauge porcelain-enamelled bowl and lid ensure consistent heat and withstand all weather.',
    features: [
      '57cm diameter heavy-duty steel plated cooking grate',
      'One-Touch cleaning system with rust-resistant aluminium ash catcher',
      'Lid hook inside lid avoids placing on the ground',
      'Rust-proof aluminium dampers for precision heat control',
      'Durable all-weather wheels for easy mobility'
    ],
    specs: {
      'Diameter': '57 cm',
      'Fuel Type': 'Charcoal / Briquettes',
      'Colour': 'Black Porcelain Enamel',
      'Warranty': '10 Year Limited Weber Warranty'
    },
    seller: 'Takealot'
  },
  {
    id: 'prod-6',
    title: 'Apple MacBook Air 13-inch M2 Chip (8GB Unified RAM, 256GB SSD) - Space Grey',
    brand: 'Apple',
    department: 'tech',
    category: 'Laptops & Computers',
    price: 17999,
    listPrice: 20999,
    discountPercent: 14,
    rating: 4.9,
    reviewCount: 310,
    image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockCount: 6,
    warehouse: 'JHB & CPT',
    isDailyDeal: false,
    isNextDayEligible: true,
    badge: 'Popular',
    description: 'Redesigned around the next-generation M2 chip, MacBook Air is strikingly thin and brings exceptional speed and power efficiency within a durable all-aluminium enclosure.',
    features: [
      'Apple M2 chip with 8-core CPU and up to 10-core GPU',
      'Up to 18 hours of battery life with all-day performance',
      '13.6-inch Liquid Retina display with 500 nits brightness',
      '1080p FaceTime HD camera with three-mic array',
      'MagSafe 3 charging port with two Thunderbolt ports'
    ],
    specs: {
      'Processor': 'Apple M2 8-Core',
      'RAM': '8GB Unified Memory',
      'Storage': '256GB PCIe SSD',
      'Display': '13.6-inch Liquid Retina',
      'Weight': '1.24 kg'
    },
    seller: 'iStore Direct'
  },
  {
    id: 'prod-7',
    title: 'DeLonghi Magnifica S Fully Automatic Coffee Machine - ECAM22.110.B',
    brand: 'DeLonghi',
    department: 'appliances',
    category: 'Coffee & Espresso',
    price: 6999,
    listPrice: 9499,
    discountPercent: 26,
    rating: 4.8,
    reviewCount: 278,
    image: 'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockCount: 9,
    warehouse: 'CPT',
    isDailyDeal: true,
    dealEndsInHours: 9,
    isNextDayEligible: true,
    badge: 'Daily Deal',
    description: 'Enjoy delicious beans-to-cup coffee at home with the iconic DeLonghi Magnifica S. Customize aroma and quantity easily, and brew velvety cappuccinos with the manual milk frother.',
    features: [
      'Integrated silent burr grinder with 13 adjustable settings',
      'Twin-shot system brews 2 espresso cups at once',
      'Traditional milk frother creates rich, creamy foam',
      'Removable brewing unit for effortless cleaning and hygiene',
      'Automatic rinse and descaling programs'
    ],
    specs: {
      'Pump Pressure': '15 Bar',
      'Water Tank': '1.8 Litres',
      'Beans Container': '250g',
      'Warranty': '24 Months Official Guarantee'
    },
    seller: 'Takealot'
  },
  {
    id: 'prod-8',
    title: 'Inverroche Amber Handcrafted Fynbos Gin 750ml',
    brand: 'Inverroche',
    department: 'liquor',
    category: 'South African Gin',
    price: 449,
    listPrice: 549,
    discountPercent: 18,
    rating: 4.9,
    reviewCount: 521,
    image: 'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1527061011665-3652c757a4d4?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockCount: 35,
    warehouse: 'JHB & CPT',
    isDailyDeal: false,
    isNextDayEligible: true,
    badge: 'Local Craft',
    description: 'Infused with fragrant coastal fynbos harvested from the dune biome of Stilbaai, Western Cape. Smooth, floral and complex with hints of toffee, spice and woody botanicals.',
    features: [
      'Distilled in handcrafted small batches in Still Bay, Western Cape',
      'Deep amber hue from rare Cape floral botanicals',
      'Notes of warm spice, dry juniper, rooibos and sweet citrus',
      '750ml bottle - 43% ABV'
    ],
    specs: {
      'Volume': '750 ml',
      'Alcohol By Volume': '43%',
      'Origin': 'Western Cape, South Africa',
      'Style': 'Contemporary Fynbos Gin'
    },
    seller: 'Takealot Liquor'
  },
  {
    id: 'prod-9',
    title: 'Samsung 65" QLED 4K Smart TV with Quantum HDR (QA65Q60C)',
    brand: 'Samsung',
    department: 'tech',
    category: 'TV & Media Players',
    price: 12999,
    listPrice: 16999,
    discountPercent: 24,
    rating: 4.7,
    reviewCount: 184,
    image: 'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockCount: 7,
    warehouse: 'JHB',
    isDailyDeal: true,
    dealEndsInHours: 4,
    isNextDayEligible: false,
    badge: 'Huge Savings',
    description: 'Quantum Dot technology delivers 100% colour volume, transforming light into breathtaking, true-to-life colour at any level of brightness. Slim AirSlim design blends beautifully on your wall.',
    features: [
      '100% Colour Volume with Quantum Dot',
      'Quantum Processor Lite 4K optimizes picture and audio',
      'Dual LED backlighting brings bolder and more accurate contrast',
      'Tizen OS with Netflix, Showmax, DSTV Stream, Disney+ and Prime Video built-in',
      'SolarCell Remote charges with indoor light'
    ],
    specs: {
      'Screen Size': '65 Inch',
      'Resolution': '3840 x 2160 (4K UHD)',
      'Refresh Rate': '60Hz',
      'HDMI Ports': '3 x HDMI 2.0',
      'Warranty': '24 Months Samsung SA'
    },
    seller: 'Samsung Official Partner'
  },
  {
    id: 'prod-10',
    title: 'Nutribullet Pro 900W High Speed Blender 9-Piece Set - Champagne',
    brand: 'Nutribullet',
    department: 'appliances',
    category: 'Blenders & Juicers',
    price: 1899,
    listPrice: 2499,
    discountPercent: 24,
    rating: 4.8,
    reviewCount: 760,
    image: 'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1570222094114-d054a817e56b?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockCount: 25,
    warehouse: 'JHB & CPT',
    isDailyDeal: false,
    isNextDayEligible: true,
    badge: 'Popular',
    description: 'With 900 watts of nutrient extraction power, break down tough seeds, fibrous kale, stems and skins to unlock the hidden nutrition inside whole fruits and vegetables in under 60 seconds.',
    features: [
      '900-watt motor easily pulverizes ice, nuts, seeds and tough greens',
      'Stainless steel extractor blades utilize cyclonic action',
      'Includes 900ml colossal cup, 700ml tall cup and to-go flip lids',
      'BPA-free durable plastic cups, dishwasher safe'
    ],
    specs: {
      'Motor Power': '900 Watts',
      'Capacity': '900ml Cup / 700ml Cup',
      'Colour': 'Champagne Gold',
      'Warranty': '1 Year Full Replacement'
    },
    seller: 'Takealot'
  },
  {
    id: 'prod-11',
    title: 'Dior Sauvage Eau de Parfum 100ml for Men',
    brand: 'Dior',
    department: 'beauty',
    category: 'Fragrances',
    price: 2550,
    listPrice: 2950,
    discountPercent: 14,
    rating: 4.9,
    reviewCount: 412,
    image: 'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1523293182086-7651a899d37f?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockCount: 16,
    warehouse: 'JHB & CPT',
    isDailyDeal: false,
    isNextDayEligible: true,
    badge: 'Top Fragrance',
    description: 'A powerful and noble fragrance. Radiant top notes of Calabrian bergamot unleash a juicy, spicy freshness. Ambroxan, derived from precious ambergris, unfurls an ambery, woody trail.',
    features: [
      'Original sealed French imported Eau de Parfum',
      'Signature notes: Reggio Bergamot, Sichuan Pepper, Ambroxan, Papua Vanilla',
      'Long-lasting sillage up to 10+ hours',
      'Magnetic lacquer luxury cap'
    ],
    specs: {
      'Volume': '100 ml',
      'Type': 'Eau de Parfum (EDP)',
      'Fragrance Family': 'Fresh Woody Aromatic',
      'Authenticity': '100% Guaranteed Authentic'
    },
    seller: 'Prestige Fragrances SA'
  },
  {
    id: 'prod-12',
    title: 'Nike Air Force 1 07 Triple White Sneakers',
    brand: 'Nike',
    department: 'fashion',
    category: 'Sneakers & Footwear',
    price: 2199,
    listPrice: 2499,
    discountPercent: 12,
    rating: 4.9,
    reviewCount: 843,
    image: 'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockCount: 19,
    warehouse: 'JHB & CPT',
    isDailyDeal: false,
    isNextDayEligible: true,
    badge: 'Iconic Style',
    description: 'The radiance lives on in the Nike Air Force 1 07, the b-ball icon that puts a fresh spin on what you know best: crisp leather, bold colours and the perfect amount of flash to make you shine.',
    features: [
      'Stitched leather overlays on upper add heritage style, durability and support',
      'Originally designed for performance hoops, Nike Air cushioning adds lightweight comfort',
      'Low-cut silhouette adds clean, streamlined look',
      'Padded collar feels soft and comfortable'
    ],
    specs: {
      'Material': 'Genuine Stitched Leather Upper',
      'Sole': 'Non-marking Rubber Cupsole',
      'Colourway': 'White / White / White',
      'Fit': 'True to Size'
    },
    seller: 'Takealot Fashion'
  },
  {
    id: 'prod-13',
    title: 'Nintendo Switch OLED Model Console with White Joy-Con',
    brand: 'Nintendo',
    department: 'gaming',
    category: 'Nintendo Switch',
    price: 7999,
    listPrice: 8999,
    discountPercent: 11,
    rating: 4.9,
    reviewCount: 389,
    image: 'https://images.unsplash.com/photo-1578303512597-8be9abb94719?auto=format&fit=crop&w=600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1578303512597-8be9abb94719?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockCount: 12,
    warehouse: 'JHB & CPT',
    isDailyDeal: true,
    dealEndsInHours: 7,
    isNextDayEligible: true,
    badge: 'Daily Deal',
    description: 'Meet the newest member of the Nintendo Switch family. Features a vibrant 7-inch OLED screen, a wide adjustable stand, a dock with a wired LAN port, 64 GB of internal storage, and enhanced audio.',
    features: [
      '7-inch OLED screen with vivid colors and crisp contrast',
      'Wide, adjustable stand for comfortable tabletop gaming mode',
      'Built-in wired LAN port in the dock for stable online play',
      '64GB internal storage expandable via microSD card',
      'Includes White Joy-Con L/R controllers and grip'
    ],
    specs: {
      'Screen': '7.0" OLED Multi-touch',
      'Internal Storage': '64GB eMMC',
      'Battery Life': 'Up to 9 Hours depending on game',
      'Warranty': '12 Months Core Gaming SA'
    },
    seller: 'Takealot'
  },
  {
    id: 'prod-14',
    title: 'Kanonkop Pinotage Estate Wine 2020 750ml - Simonsberg Stellenbosch',
    brand: 'Kanonkop',
    department: 'liquor',
    category: 'Cape Wines & Pinotage',
    price: 499,
    listPrice: 599,
    discountPercent: 17,
    rating: 5.0,
    reviewCount: 195,
    image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockCount: 28,
    warehouse: 'CPT',
    isDailyDeal: false,
    isNextDayEligible: true,
    badge: 'Platter 5-Star',
    description: 'World-renowned South African Pinotage from heritage bush vines on the slopes of the Simonsberg. Full-bodied with opulent dark plum fruit, subtle cigar box nuances and silky ripe tannins.',
    features: [
      'Grown on un-irrigated bush vines aged between 30 and 65 years old',
      'Matured in 80% new French Nevers oak barrels for 18 months',
      'Aromas of dark cherries, cassis, cedar wood and spices',
      'Superb aging potential up to 20 years'
    ],
    specs: {
      'Vintage': '2020',
      'Region': 'Simonsberg-Stellenbosch',
      'Alcohol': '14.5%',
      'Cultivar': '100% Pinotage'
    },
    seller: 'Cape Wine Cellars'
  },
  {
    id: 'prod-15',
    title: 'Anker 737 Power Bank (PowerCore 24K) 140W Ultra-Fast 3-Port Charger',
    brand: 'Anker',
    department: 'tech',
    category: 'Power Banks & Charging',
    price: 2499,
    listPrice: 3299,
    discountPercent: 24,
    rating: 4.8,
    reviewCount: 230,
    image: 'https://images.unsplash.com/photo-1609592424364-770544f8fef4?auto=format&fit=crop&w=600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1609592424364-770544f8fef4?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockCount: 17,
    warehouse: 'JHB & CPT',
    isDailyDeal: true,
    dealEndsInHours: 10,
    isNextDayEligible: true,
    badge: 'Tech Essential',
    description: 'Equipped with the latest Power Delivery 3.1 and bi-directional technology to quickly recharge the portable charger or get a 140W ultra-powerful charge for MacBook Pro, iPhone, and Galaxy phones.',
    features: [
      'Ultra-powerful 140W two-way charging can charge a MacBook Pro 16" to 50% in 40 mins',
      'Smart digital display shows output power, input power, and estimated time to full recharge',
      'Huge 24,000mAh capacity provides 5 full charges for iPhone 14 or 1.3 charges for iPad Pro',
      'ActiveShield 2.0 real-time temperature monitoring protection'
    ],
    specs: {
      'Capacity': '24,000 mAh',
      'Max Output': '140W USB-C PD 3.1',
      'Ports': '2 x USB-C, 1 x USB-A',
      'Warranty': '18 Months Anker SA'
    },
    seller: 'Anker SA Official'
  },
  {
    id: 'prod-16',
    title: 'JBL Charge 5 Waterproof Portable Bluetooth Speaker - Squad Camo',
    brand: 'JBL',
    department: 'tech',
    category: 'Audio & Headphones',
    price: 2799,
    listPrice: 3499,
    discountPercent: 20,
    rating: 4.9,
    reviewCount: 654,
    image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=600&q=80',
    galleryImages: [
      'https://images.unsplash.com/photo-1545454675-3531b543be5d?auto=format&fit=crop&w=800&q=80'
    ],
    inStock: true,
    stockCount: 20,
    warehouse: 'JHB & CPT',
    isDailyDeal: false,
    isNextDayEligible: true,
    badge: 'Best Seller',
    description: 'Take the party with you no matter what the weather. Delivers bold JBL Original Pro Sound, with an optimized long excursion driver, separate tweeter, and dual pumping JBL bass radiators.',
    features: [
      'Bold JBL Original Pro Sound with long excursion driver and dual radiators',
      '20 hours of continuous playtime on a single charge',
      'IP67 waterproof and dustproof - bring it to the beach, pool or campsite',
      'Built-in powerbank charges your phone while streaming music',
      'PartyBoost allows pairing multiple JBL speakers together'
    ],
    specs: {
      'Playtime': 'Up to 20 Hours',
      'Waterproof Rating': 'IP67 Dust & Water Resistant',
      'Bluetooth': 'v5.1',
      'Weight': '960g'
    },
    seller: 'Takealot'
  }
];

export const PICKUP_POINTS = [
  { id: 'pp-1', name: 'Takealot Pickup Point - Richmond Park, Cape Town', address: 'Richmond Park Industrial, N7, Cape Town', hours: 'Mon-Sun: 08:00 - 19:00' },
  { id: 'pp-2', name: 'Takealot Pickup Point - Midrand Distribution Centre, JHB', address: 'Old Pretoria Road, Midrand, Johannesburg', hours: 'Mon-Sun: 07:00 - 20:00' },
  { id: 'pp-3', name: 'Takealot Pickup Point - Sandton City, JHB', address: 'Level 1 Parking, Sandton City, Sandhurst', hours: 'Mon-Sun: 09:00 - 18:00' },
  { id: 'pp-4', name: 'Takealot Pickup Point - Umhlanga Ridge, Durban', address: 'Palm Boulevard, Gateway Precinct, Umhlanga', hours: 'Mon-Sun: 08:30 - 18:30' },
  { id: 'pp-5', name: 'Takealot Pickup Point - Menlyn Park, Pretoria', address: 'Menlyn Maine Central, Pretoria East', hours: 'Mon-Sun: 09:00 - 19:00' }
];

export const PROVINCES = [
  'Gauteng',
  'Western Cape',
  'KwaZulu-Natal',
  'Eastern Cape',
  'Free State',
  'Mpumalanga',
  'Limpopo',
  'North West',
  'Northern Cape'
];
