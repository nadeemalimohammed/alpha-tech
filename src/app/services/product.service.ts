import { Injectable } from '@angular/core';
import { Product } from '../models/product.model';

@Injectable({ providedIn: 'root' })
export class ProductService {
  private products: Product[] = [
    // Computers
    {
      id: 1,
      name: 'Dell XPS 13',
      description: '13-inch ultra-portable laptop',
      price: 1299,
      imageUrl: 'assets/images/computers/dell-xps13.jpeg',
      category: 'computers',
      brand: 'Dell',
      stock: 12,
      rating: 4.5,
      productDetails: 'The Dell XPS 13 is a compact and high-performance laptop known for its sleek design and excellent display. It is ideal for professionals, students, and anyone seeking portability without sacrificing power. With the latest Intel Core processors and premium build quality, it delivers a smooth computing experience for work or entertainment.',
      specifications: [
        '13.4″ FHD+ anti-glare',
        'Intel Core Ultra 7 / i7 up to 4.8 GHz',
        '16 GB LPDDR5x',
        '512 GB SSD',
        'Wi‑Fi 7, Bluetooth 5.4',
        'Weight ~1.22 kg'
      ]
    },
    {
      id: 2,
      name: 'MacBook Pro 14"',
      description: 'Apple M2 Pro powerhouse',
      price: 1999,
      imageUrl: 'assets/images/computers/macbook-pro14.jpg',
      category: 'computers',
      brand: 'Apple',
      stock: 8,
      rating: 4.9,
      productDetails: 'Apple’s MacBook Pro 14-inch model delivers exceptional power with its M2 Pro chip, a stunning Liquid Retina XDR display, and excellent battery life. Perfect for creatives and professionals who need to run demanding applications seamlessly with macOS’s optimized performance and ecosystem.',
      specifications: [
        '14″ Liquid Retina XDR',
        'Apple M2 Pro chip',
        '16 GB RAM',
        '1 TB SSD',
        'macOS Sonoma',
        'Wi‑Fi 6E'
      ]
    },
    {
      id: 3,
      name: 'HP Spectre x360',
      description: '2-in-1 touchscreen convertible',
      price: 1499,
      imageUrl: 'assets/images/computers/hp-spectre360.jpeg',
      category: 'computers',
      brand: 'HP',
      stock: 5,
      rating: 4.6,
      productDetails: 'The HP Spectre x360 is a versatile 2-in-1 laptop that combines performance with flexibility. Its touchscreen and convertible design allow you to use it as a laptop or tablet, ideal for students, professionals, and creatives who want both productivity and entertainment in one device.',
      specifications: [
        '13.5″ FHD+ Touch',
        'Intel Core i7',
        '16 GB RAM',
        '1 TB SSD',
        '360° hinge',
        'Bang & Olufsen audio'
      ]
    },
    {
      id: 4,
      name: 'Lenovo ThinkPad X1',
      description: 'Business class ultrabook',
      price: 1699,
      imageUrl: 'assets/images/computers/lenovo-thinkpad-x1.jpg',
      category: 'computers',
      brand: 'Lenovo',
      stock: 10,
      rating: 4.8,
      productDetails: 'The Lenovo ThinkPad X1 is a durable and powerful business ultrabook with exceptional keyboard comfort and enterprise-level security features. It’s favored by professionals requiring reliability and portability for demanding work environments.',
      specifications: [
        '14″ FHD Display',
        'Intel Core i7',
        '16 GB RAM',
        '512 GB SSD',
        'Windows 11 Pro',
        'MIL-STD tested durability'
      ]
    },
    {
      id: 5,
      name: 'Asus ROG Zephyrus',
      description: 'Gaming laptop with RTX graphics',
      price: 1899,
      imageUrl: 'assets/images/computers/asus-zephyrus.jpg',
      category: 'computers',
      brand: 'Asus',
      stock: 7,
      rating: 4.7,
      productDetails: 'The Asus ROG Zephyrus combines powerful AMD Ryzen CPUs and NVIDIA RTX graphics for high-end gaming and creative work. Its slim chassis and high refresh rate display make it a favorite among gamers and streamers.',
      specifications: [
        '15.6″ QHD 165 Hz',
        'AMD Ryzen 9 processor',
        '32 GB RAM',
        '1 TB SSD',
        'NVIDIA RTX 3070 GPU'
      ]
    },
    {
      id: 6,
      name: 'Acer Swift 3',
      description: 'Lightweight student laptop',
      price: 899,
      imageUrl: 'assets/images/computers/acer-swift3.jpg',
      category: 'computers',
      brand: 'Acer',
      stock: 18,
      rating: 4.3,
      productDetails: 'The Acer Swift 3 is a budget-friendly lightweight laptop perfect for students and everyday users. It offers decent performance with AMD Ryzen processors and long battery life in a compact design.',
      specifications: [
        '14″ FHD display',
        'AMD Ryzen 5 CPU',
        '8 GB RAM',
        '512 GB SSD',
        'Wi‑Fi 6',
        'Weight ~1.2 kg'
      ]
    },
    {
      id: 7,
      name: 'MSI Prestige 14',
      description: 'Stylish creative laptop',
      price: 1399,
      imageUrl: 'assets/images/computers/msi-prestige14.jpeg',
      category: 'computers',
      brand: 'MSI',
      stock: 9,
      rating: 4.5,
      productDetails: 'The MSI Prestige 14 offers a balance of style and performance, targeting creators who need color-accurate displays and powerful specs in a portable package. It features a sleek design with robust processing power.',
      specifications: [
        '14″ FHD+ display',
        'Intel Core i7',
        '16 GB RAM',
        '512 GB SSD',
        'NVIDIA GeForce GTX 1650',
        'Lightweight design'
      ]
    },
    {
      id: 8,
      name: 'Microsoft Surface Laptop 5',
      description: 'Elegant, powerful laptop',
      price: 1499,
      imageUrl: 'assets/images/computers/surface-laptop5.jpg',
      category: 'computers',
      brand: 'Microsoft',
      stock: 11,
      rating: 4.4,
      productDetails: 'Microsoft Surface Laptop 5 is known for its clean design, high-resolution touchscreen, and solid performance. It suits professionals and students who value style alongside functionality.',
      specifications: [
        '13.5″ PixelSense touchscreen',
        'Intel 12th Gen Core i5/i7',
        '8–32 GB RAM',
        '256–1 TB SSD',
        'Windows 11',
        'Lightweight aluminum build'
      ]
    },
    {
      id: 9,
      name: 'Razer Blade 14',
      description: 'High-performance for gamers',
      price: 2099,
      imageUrl: 'assets/images/computers/razer-blade.jpeg',
      category: 'computers',
      brand: 'Razer',
      stock: 6,
      rating: 4.6,
      productDetails: 'The Razer Blade 14 packs powerful gaming hardware into a compact, premium chassis. It offers high refresh rate displays and the latest AMD Ryzen CPUs for gamers who want performance on the go.',
      specifications: [
        '14″ QHD 165 Hz',
        'AMD Ryzen 9',
        '16 GB RAM',
        '1 TB SSD',
        'NVIDIA RTX 3070 Ti',
        'RGB keyboard'
      ]
    },
    {
      id: 10,
      name: 'LG Gram 16',
      description: 'Large screen, ultra-light',
      price: 1599,
      imageUrl: 'assets/images/computers/lg-gram16.jpg',
      category: 'computers',
      brand: 'LG',
      stock: 8,
      rating: 4.7,
      productDetails: 'The LG Gram 16 delivers a large 16-inch display combined with an ultra-light chassis, perfect for users who want maximum screen real estate without the weight burden.',
      specifications: [
        '16″ WQXGA IPS display',
        'Intel Core i7',
        '16 GB RAM',
        '1 TB SSD',
        'Lightweight magnesium alloy body',
        'Long battery life'
      ]
    },

    // TVs
    {
      id: 11,
      name: 'Samsung QLED 65"',
      description: 'QLED 4K Ultra HD Smart TV',
      price: 1299,
      imageUrl: 'assets/images/tvs/samsung-qled65.jpeg',
      category: 'tvs',
      brand: 'Samsung',
      stock: 15,
      rating: 4.8,
      productDetails: 'Samsung QLED 65" delivers stunning 4K picture quality with Quantum Dot technology, vibrant colors, and smart TV features. It’s perfect for home theater enthusiasts seeking immersive visuals.',
      specifications: [
        '65" QLED 4K display',
        'Smart TV with Tizen OS',
        'HDR10+ support',
        '4 HDMI ports',
        '120 Hz refresh rate'
      ]
    },
    {
      id: 12,
      name: 'LG OLED C2 55"',
      description: 'OLED perfect black contrast',
      price: 1499,
      imageUrl: 'assets/images/tvs/lg-oled55.jpg',
      category: 'tvs',
      brand: 'LG',
      stock: 13,
      rating: 4.9,
      productDetails: 'The LG OLED C2 55" is known for its perfect blacks and infinite contrast due to OLED technology. It’s ideal for cinephiles and gamers seeking exceptional image quality and low input lag.',
      specifications: [
        '55" OLED 4K display',
        'HDR10, Dolby Vision IQ',
        '120 Hz refresh rate',
        'webOS smart platform',
        'G-Sync & FreeSync compatible'
      ]
    },
    {
      id: 13,
      name: 'Sony Bravia XR 65"',
      description: 'Dolby Vision and XR Cognitive Processor',
      price: 1599,
      imageUrl: 'assets/images/tvs/sony-bravia65.jpg',
      category: 'tvs',
      brand: 'Sony',
      stock: 10,
      rating: 4.7,
      productDetails: 'Sony Bravia XR 65" uses the XR Cognitive Processor for intelligent picture and sound adjustments. This TV offers great HDR performance and cinematic quality with Dolby Vision support.',
      specifications: [
        '65" 4K LED display',
        'XR Cognitive Processor',
        'Dolby Vision HDR',
        'Acoustic Surface Audio+',
        '120 Hz refresh rate'
      ]
    },
    {
      id: 14,
      name: 'TCL 55" 5-Series',
      description: 'Affordable 4K Roku TV',
      price: 499,
      imageUrl: 'assets/images/tvs/tcl-5series55.jpeg',
      category: 'tvs',
      brand: 'TCL',
      stock: 20,
      rating: 4.2,
      productDetails: 'The TCL 55" 5-Series offers a budget-friendly 4K TV with Roku smart platform, decent color accuracy, and solid HDR support. Ideal for casual viewers and cord-cutters.',
      specifications: [
        '55" 4K LED display',
        'Roku Smart TV OS',
        'HDR10+ support',
        '120 Hz refresh rate',
        'Multiple HDMI inputs'
      ]
    },
    {
      id: 15,
      name: 'Vizio M-Series 50"',
      description: 'Quantum 4K Smart TV',
      price: 549,
      imageUrl: 'assets/images/tvs/vizio-mseries50.jpg',
      category: 'tvs',
      brand: 'Vizio',
      stock: 18,
      rating: 4.3,
      productDetails: 'Vizio M-Series 50" features Quantum Dot technology for brighter colors and deep blacks. It comes with smart TV capabilities and supports major HDR formats.',
      specifications: [
        '50" Quantum Dot 4K display',
        'SmartCast OS',
        'HDR10, Dolby Vision',
        '120 Hz refresh rate',
        'Voice control'
      ]
    },
    {
      id: 16,
      name: 'Hisense U8H 65"',
      description: 'Mini-LED for deep blacks',
      price: 899,
      imageUrl: 'assets/images/tvs/hisense-u8h65.jpeg',
      category: 'tvs',
      brand: 'Hisense',
      stock: 11,
      rating: 4.5,
      productDetails: 'The Hisense U8H 65" uses Mini-LED backlighting for improved contrast and brightness. It’s a great option for viewers wanting near-OLED picture quality at a lower price.',
      specifications: [
        '65" Mini-LED 4K display',
        'Dolby Vision, HDR10+',
        '120 Hz refresh rate',
        'Android TV OS',
        'Voice remote included'
      ]
    },
    {
      id: 17,
      name: 'Samsung The Frame',
      description: 'Art mode + TV in one',
      price: 1699,
      imageUrl: 'assets/images/tvs/samsung-the-frame.jpeg',
      category: 'tvs',
      brand: 'Samsung',
      stock: 6,
      rating: 4.6,
      productDetails: 'Samsung The Frame transforms into a beautiful piece of art when not in use, featuring customizable bezels and a 4K QLED display. It’s perfect for stylish living rooms and art lovers.',
      specifications: [
        '65" Neo QLED 4K with matte anti-glare',
        'Art Mode with customizable bezels',
        '144 Hz refresh rate',
        'One Connect box (wireless optional)',
        'Low input lag'
      ]
    },
    {
      id: 18,
      name: 'Panasonic JZ2000 55"',
      description: 'HDR OLED performance',
      price: 1799,
      imageUrl: 'assets/images/tvs/panasonic-oled55.jpeg',
      category: 'tvs',
      brand: 'Panasonic',
      stock: 7,
      rating: 4.7,
      productDetails: 'The Panasonic JZ2000 55" OLED TV offers superb HDR performance, deep blacks, and natural colors. It is favored by cinephiles for its cinematic picture quality and built-in upward-firing speakers.',
      specifications: [
        '55" OLED 4K display',
        'HDR10+, Dolby Vision IQ',
        '120 Hz refresh rate',
        'Built-in upward-firing speakers',
        'Filmmaker Mode'
      ]
    },
    {
      id: 19,
      name: 'LG NanoCell 65"',
      description: 'Great viewing angles',
      price: 999,
      imageUrl: 'assets/images/tvs/lg-nanocell65.jpg',
      category: 'tvs',
      brand: 'LG',
      stock: 14,
      rating: 4.4,
      productDetails: 'LG NanoCell 65" uses nano-particle technology to enhance color accuracy and viewing angles. It’s a solid mid-range 4K TV for families and everyday viewing.',
      specifications: [
        '65" NanoCell 4K display',
        'HDR10, HLG support',
        '120 Hz refresh rate',
        'webOS smart platform',
        'Multiple HDMI inputs'
      ]
    },
    {
      id: 20,
      name: 'Philips Ambilight 58"',
      description: 'Immersive backlight experience',
      price: 1099,
      imageUrl: 'assets/images/tvs/philips-ambilight58.jpg',
      category: 'tvs',
      brand: 'Philips',
      stock: 9,
      rating: 4.5,
      productDetails: 'Philips Ambilight 58" features unique Ambilight technology that projects colors around the TV for immersive viewing. It combines solid 4K performance with smart TV features.',
      specifications: [
        '58" 4K LED display',
        'Ambilight 3-sided',
        'HDR10+ support',
        'Android TV OS',
        '120 Hz refresh rate'
      ]
    },

    // Phones
    {
      id: 21,
      name: 'iPhone 15 Pro',
      description: 'Latest iOS flagship',
      price: 1199,
      imageUrl: 'assets/images/phones/iphone15-pro.jpeg',
      category: 'phones',
      brand: 'Apple',
      stock: 20,
      rating: 4.9,
      productDetails: 'The iPhone 15 Pro delivers cutting-edge technology with its A17 Pro chip, advanced camera system, and bright OLED display. It is perfect for users who want high performance and premium build quality.',
      specifications: [
        '6.1" Super Retina XDR OLED',
        'A17 Pro chip',
        '128GB / 256GB / 512GB storage',
        'Pro camera system with LiDAR',
        '5G connectivity',
        'iOS 17'
      ]
    },
    {
      id: 22,
      name: 'Samsung Galaxy S24 Ultra',
      description: 'Pro-grade camera',
      price: 1299,
      imageUrl: 'assets/images/phones/galaxy-s24ultra.jpg',
      category: 'phones',
      brand: 'Samsung',
      stock: 15,
      rating: 4.8,
      productDetails: 'Samsung Galaxy S24 Ultra features a pro-grade camera setup with 200MP sensor, S-Pen support, and a bright AMOLED display. It is ideal for power users and photography enthusiasts.',
      specifications: [
        '6.8" AMOLED QHD+',
        'Snapdragon 8 Gen 3',
        '12GB RAM',
        '256GB / 512GB storage',
        'S Pen support',
        '5G connectivity'
      ]
    },
    {
      id: 23,
      name: 'Google Pixel 8 Pro',
      description: 'Pure Android, best camera',
      price: 999,
      imageUrl: 'assets/images/phones/pixel-8pro.jpg',
      category: 'phones',
      brand: 'Google',
      stock: 14,
      rating: 4.6,
      productDetails: 'Google Pixel 8 Pro offers the purest Android experience with timely updates and AI-powered camera features. Its computational photography delivers stunning shots even in low light.',
      specifications: [
        '6.7" LTPO OLED',
        'Google Tensor G3',
        '12GB RAM',
        '128GB / 256GB storage',
        'Advanced AI cameras',
        '5G support'
      ]
    },
    {
      id: 24,
      name: 'OnePlus 12',
      description: 'Flagship killer',
      price: 899,
      imageUrl: 'assets/images/phones/oneplus-12.jpg',
      category: 'phones',
      brand: 'OnePlus',
      stock: 17,
      rating: 4.5,
      productDetails: 'OnePlus 12 is a flagship killer that offers premium specs, fast charging, and smooth software at a competitive price point. Its AMOLED display and Snapdragon 8 Gen 2 chipset make it a powerhouse.',
      specifications: [
        '6.7" AMOLED 120Hz',
        'Snapdragon 8 Gen 2',
        '16GB RAM',
        '256GB storage',
        '100W fast charging',
        '5G connectivity'
      ]
    },
    {
      id: 25,
      name: 'Xiaomi 13 Pro',
      description: 'Performance + design',
      price: 799,
      imageUrl: 'assets/images/phones/xiaomi-13.jpeg',
      category: 'phones',
      brand: 'Xiaomi',
      stock: 13,
      rating: 4.4,
      productDetails: 'Xiaomi 13 Pro combines flagship performance with elegant design. It features a large AMOLED display, top-tier Snapdragon chipset, and a versatile camera system.',
      specifications: [
        '6.73" AMOLED 120Hz',
        'Snapdragon 8 Gen 2',
        '12GB RAM',
        '256GB storage',
        '120W wired charging',
        '5G support'
      ]
    },
    {
      id: 26,
      name: 'Sony Xperia 1 V',
      description: 'Pro video tools',
      price: 1199,
      imageUrl: 'assets/images/phones/xperia-1v.jpeg',
      category: 'phones',
      brand: 'Sony',
      stock: 10,
      rating: 4.3,
      productDetails: 'Sony Xperia 1 V is designed for creators with pro-grade video tools, 4K OLED display, and advanced manual controls. It’s a niche phone ideal for multimedia professionals.',
      specifications: [
        '6.5" 4K OLED 120Hz',
        'Snapdragon 8 Gen 2',
        '12GB RAM',
        '256GB storage',
        'Advanced manual camera controls',
        '5G support'
      ]
    },
    {
      id: 27,
      name: 'Asus ROG Phone 7',
      description: 'Gaming smartphone',
      price: 999,
      imageUrl: 'assets/images/phones/rog-phone7.jpeg',
      category: 'phones',
      brand: 'Asus',
      stock: 12,
      rating: 4.4,
      productDetails: 'The Asus ROG Phone 7 is built for gamers, with a high refresh rate AMOLED display, powerful Snapdragon 8 Gen 2 chip, and gaming-specific features like AirTrigger buttons.',
      specifications: [
        '6.78" AMOLED 165Hz',
        'Snapdragon 8 Gen 2',
        '16GB RAM',
        '512GB storage',
        '6000mAh battery',
        'AirTrigger shoulder buttons'
      ]
    },
    {
      id: 28,
      name: 'Motorola Edge+',
      description: 'Clean Android experience',
      price: 849,
      imageUrl: 'assets/images/phones/moto-edge.jpg',
      category: 'phones',
      brand: 'Motorola',
      stock: 14,
      rating: 4.2,
      productDetails: 'Motorola Edge+ offers a near-stock Android experience combined with a bright OLED display and solid battery life. It’s a reliable choice for those wanting smooth performance without bloatware.',
      specifications: [
        '6.7" OLED 144Hz',
        'Snapdragon 8 Gen 1',
        '12GB RAM',
        '256GB storage',
        '5000mAh battery',
        'Clean Android 13'
      ]
    },
    {
      id: 29,
      name: 'Realme GT5',
      description: 'Fast charging beast',
      price: 649,
      imageUrl: 'assets/images/phones/realme-gt5.jpeg',
      category: 'phones',
      brand: 'Realme',
      stock: 18,
      rating: 4.1,
      productDetails: 'Realme GT5 is known for its blazing fast charging speeds and good all-around performance, making it a solid mid-range gaming and daily use phone.',
      specifications: [
        '6.72" AMOLED 144Hz',
        'MediaTek Dimensity 9200+',
        '12GB RAM',
        '256GB storage',
        '240W wired charging',
        '5G connectivity'
      ]
    },
    {
      id: 30,
      name: 'iPhone SE (2022)',
      description: 'Compact and affordable iPhone',
      price: 449,
      imageUrl: 'assets/images/phones/iphone-se.jpg',
      category: 'phones',
      brand: 'Apple',
      stock: 25,
      rating: 4.4,
      productDetails: 'The iPhone SE (2022) offers Apple’s signature performance in a compact and budget-friendly package. It features the powerful A15 Bionic chip and supports wireless charging, making it a popular choice for fans of smaller phones.',
      specifications: [
        '4.7" Retina HD display',
        'A15 Bionic chip',
        '64GB / 128GB storage',
        'Touch ID',
        'Wireless charging',
        'iOS 16'
      ]
    }
  ];

  getProducts(): Product[] {
    return this.products;
  }

  getProductById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  getProductsByCategory(category: string): Product[] {
    return this.products.filter(p => p.category === category);
  }

  sortProducts(products: Product[], sortOrder: string): Product[] {
    if (sortOrder === 'lowToHigh') {
      return [...products].sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'highToLow') {
      return [...products].sort((a, b) => b.price - a.price);
    }
    return products;
  }
}
