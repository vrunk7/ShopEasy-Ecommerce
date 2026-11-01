const products = [
  {
    id: 101,
    name: "Boat Headphones",
    category: "Electronics",
    price: 1499,
    description: "Enjoy clear sound with these wireless headphones.",
    image: "https://www.boat-lifestyle.com/cdn/shop/files/Artboard_1_e3a10c19-60bf-4832-a2cf-906b5a34cab0_1024x.png?v=1767159381"
  },
  {
    id: 102,
    name: "Adidas Running Shoes",
    category: "Fashion",
    price: 2499,
    description: "Comfortable running shoes for everyday use.",
    image: "https://down-tw.img.susercontent.com/file/sg-11134201-8258p-mg690tqkcmby3c"
  },
  {
    id: 103,
    name: "Firebolt Smart Watch",
    category: "Electronics",
    price: 3999,
    description: "Track your daily activity with this smart watch.",
    image: "https://cdn.jiostore.online/v2/jmd-asp/jdprod/wrkr/products/pictures/item/free/resize-w%3A460/fire-boltt/493664727/0/OjaEa6QYLU-2tiXiGnJ4N-Fire-Boltt-Smart-Watch-493664727-i-1-1200Wx1200H.jpeg"
  },
  {
    id: 104,
    name: "Gear Backpack",
    category: "Fashion",
    price: 999,
    description: "A practical backpack for college and travel.",
    image: "https://assets.myntassets.com/w_412%2Cq_50%2C%2Cdpr_3%2Cfl_progressive%2Cf_webp/assets/images/2026/JULY/10/raFmOp8G_84c9dd07c66246f1adf3d9b7de3534b9.jpg"
  },
  {
    id: 105,
    name: "Skull Candy Bluetooth Speaker",
    category: "Electronics",
    price: 1999,
    description: "Enjoy your favorite music wherever you go.",
    image: "https://www.skullcandy.com/cdn/shop/files/terrain_buy_box_black_1_400x.png?v=1709661034"
  },
  {
    id: 106,
    name: "Puma Casual T-Shirt",
    category: "Fashion",
    price: 599,
    description: "A comfortable T-shirt for everyday wear.",
    image: "https://images.puma.com/image/upload/f_auto%2Cq_auto%2Cb_rgb%3Afafafa/global/692912/02/w/1000/h/1000/fnd/UKR/fmt/png"
  },
  {
    id: 107,
    name: "Essence Mascara",
    category: "Beauty",
    price: 499,
    description: "A volumizing mascara designed to give your lashes a fuller and longer appearance.",
    image: "https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/thumbnail.webp"
  },
  {
    id: 108,
    name: "Eyeshadow Palette",
    category: "Beauty",
    price: 899,
    description: "A versatile eyeshadow palette with multiple shades for everyday and special occasions.",
    image: "https://cdn.dummyjson.com/product-images/beauty/eyeshadow-palette-with-mirror/thumbnail.webp"
  },
  {
    id: 109,
    name: "Red Lipstick",
    category: "Beauty",
    price: 599,
    description: "A classic red lipstick with a rich colour and smooth finish.",
    image: "https://cdn.dummyjson.com/product-images/beauty/red-lipstick/thumbnail.webp"
  },
  {
    id: 110,
    name: "Calvin Klein CK One",
    category: "Fragrances",
    price: 2999,
    description: "A fresh and clean unisex fragrance suitable for everyday use.",
    image: "https://cdn.dummyjson.com/product-images/fragrances/calvin-klein-ck-one/thumbnail.webp"
  },
  {
    id: 111,
    name: "Chanel Coco Noir",
    category: "Fragrances",
    price: 4999,
    description: "An elegant fragrance with a rich and sophisticated scent.",
    image: "https://cdn.dummyjson.com/product-images/fragrances/chanel-coco-noir-eau-de/thumbnail.webp"
  },
  {
    id: 112,
    name: "Dior J'adore",
    category: "Fragrances",
    price: 3999,
    description: "A floral fragrance with a graceful and refreshing character.",
    image: "https://cdn.dummyjson.com/product-images/fragrances/dior-j'adore/thumbnail.webp"
  },
  {
    id: 113,
    name: "Modern Wooden Bed",
    category: "Home & Living",
    price: 45999,
    description: "A stylish wooden bed designed to bring comfort and elegance to your bedroom.",
    image: "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-bed/thumbnail.webp"
  },
  {
    id: 114,
    name: "Premium Living Room Sofa",
    category: "Home & Living",
    price: 52999,
    description: "A comfortable sofa with a sophisticated design for modern living spaces.",
    image: "https://cdn.dummyjson.com/product-images/furniture/annibale-colombo-sofa/thumbnail.webp"
  },
  {
    id: 115,
    name: "Bedside Table",
    category: "Home & Living",
    price: 4999,
    description: "A compact bedside table offering convenient storage and a timeless finish.",
    image: "https://cdn.dummyjson.com/product-images/furniture/bedside-table-african-cherry/thumbnail.webp"
  },
  {
    id: 116,
    name: "Apple MacBook Pro 14",
    category: "Laptops",
    price: 149999,
    description: "A powerful laptop with a high-resolution display and excellent performance for productivity.",
    image: "https://cdn.dummyjson.com/product-images/laptops/apple-macbook-pro-14-inch-space-grey/thumbnail.webp"
  },
  {
    id: 117,
    name: "Asus Zenbook Pro",
    category: "Laptops",
    price: 134999,
    description: "A premium laptop featuring a dual-screen design for enhanced productivity.",
    image: "https://cdn.dummyjson.com/product-images/laptops/asus-zenbook-pro-dual-screen-laptop/thumbnail.webp"
  },
  {
    id: 118,
    name: "Huawei Matebook X Pro",
    category: "Laptops",
    price: 119999,
    description: "A slim laptop with a high-resolution touchscreen and a portable design.",
    image: "https://cdn.dummyjson.com/product-images/laptops/huawei-matebook-x-pro/thumbnail.webp"
  },
  {
    id: 119,
    name: "iPhone 6",
    category: "Smartphones",
    price: 12999,
    description: "A compact smartphone with a simple design and an easy-to-use interface.",
    image: "https://cdn.dummyjson.com/product-images/smartphones/iphone-6/thumbnail.webp"
  },
  {
    id: 120,
    name: "iPhone 13 Pro",
    category: "Smartphones",
    price: 74999,
    description: "A premium smartphone featuring an advanced camera system and a high-quality display.",
    image: "https://cdn.dummyjson.com/product-images/smartphones/iphone-13-pro/thumbnail.webp"
  },
  {
    id: 121,
    name: "iPhone X",
    category: "Smartphones",
    price: 24999,
    description: "A stylish smartphone featuring an OLED display and facial recognition technology.",
    image: "https://cdn.dummyjson.com/product-images/smartphones/iphone-x/thumbnail.webp"
  }
];

export default products;