const categories = [
  {
    id: 1,
    title: "Sunglasses",
    slug: "owinoug-sunglasses",
    description:
      "Shade in style with our trendy sunglasses collection, perfect for every sunny adventure.",
    image: "/categories/owinoug-sunglasses.jpg",
    keywords: ["whiskey", "whisky", "bourbon"],
  },
  {
    id: 2,
    title: "Bags",
    slug: "owinoug-bags",
    description:
      "Carry your essentials with flair. Explore our chic and functional bag collection for every occasion.",
    image: "/categories/owinoug-bag.jpg",
    keywords: ["spirits", "alcohol"],
  },
  {
    id: 3,
    title: "Underwear",
    slug: "owinoug-underwear",
    description:
      "Embrace comfort and confidence with our premium underwear range, designed for everyday luxury.",
    image: "/categories/owinoug-underwear.jpg",
    keywords: ["champagne", "sparkling wine", "bubbly"],
  },
  {
    id: 4,
    title: "Caps",
    slug: "owinoug-caps",
    description:
      "Top off your look with our stylish caps. Elevate your style while staying cool and protected.",
    image: "/categories/owinoug-caps.jpg",
    keywords: ["wine", "red wine", "white wine"],
  },
  {
    id: 6,
    title: "T-Shirts",
    slug: "owinoug-t-shirts",
    description:
      "Effortless style meets comfort. Discover our diverse range of T-shirts for every mood and occasion.",
    image: "/categories/owinoug-t-shirts.jpg",
    keywords: ["beer", "cider", "ale", "lager"],
  },
  {
    id: 7,
    title: "Tracksuits",
    slug: "owinoug-tracksuits",
    description:
      "Lounge in style with our cozy tracksuits. Perfect for casual days or hitting the gym in comfort.",
    image: "/categories/owinoug-tracksuits.jpg",
    keywords: ["mixers", "soft drinks", "soda", "tonic water"],
  },
  {
    id: 8,
    title: "Accessories",
    slug: "owinoug-accessories",
    description:
      "Elevate your outfit with our curated accessories. The perfect finishing touch for a standout look.",
    image: "/categories/owinoug-accessories.jpg",
    keywords: ["wedding wines", "celebration wines"],
  },
  {
    id: 8,
    title: "Hoodies",
    slug: "owinoug-hoodies",
    description:
      "Cozy up in our fashionable hoodies. Stay warm without compromising on style.",
    image: "/categories/owinoug-hoodies.jpg",
    keywords: ["wedding wines", "celebration wines"],
  },
  {
    id: 8,
    title: "Shorts",
    slug: "owinoug-shorts",
    description:
      "Embrace the sunshine with our trendy shorts collection. Comfortable and stylish for any casual day out.",
    image: "/categories/owinoug-shorts.jpg",
    keywords: ["wedding wines", "celebration wines"],
  },
  {
    id: 8,
    title: "Lookbook",
    slug: "owinoug-lookbook",
    description:
      "Discover curated looks for every vibe. Explore our lookbook for style inspiration that speaks to you.",
    image: "/categories/owinoug-lookbook.jpg",
    keywords: ["wedding wines", "celebration wines"],
  },
];
const subCategories = [
  //These are the T-shirts sub-categories. For any changes you would like to make, change here
  {
    id: 1,
    catId: 1,
    title: "Man",
    path: "/men-tshirts",
    images: [
      "/men-tshirts/owinoug-tshirts-1.jpg",
      "/men-tshirts/owinoug-tshirts-2.jpg",
    ],
  },
  {
    id: 2,
    catId: 1,
    title: "Women",
    path: "/women-tshirts",
    images: [
      "/women-tshirts/owinoug-tshirts-1.jpg",
      "/women-tshirts/owinoug-tshirts-2.jpg",
    ],
  },

  //These are the Underwear sub-categories. For any changes you would like to make, change here
  {
    id: 3,
    catId: 2,
    title: "Man",
    path: "/men-underwear",
    images: [
      "/men-tshirts/owinoug-underwear-1.jpg",
      "/men-tshirts/owinoug-underwear-2.jpg",
    ],
  },
  {
    id: 4,
    catId: 2,
    title: "Women",
    path: "/women-underwear",
    images: [
      "/women-tshirts/owinoug-underwear-1.jpg",
      "/women-tshirts/owinoug-underwear-2.jpg",
    ],
  },

  //These are the Tracksuits sub-categories. For any changes you would like to make, change here
  //Phones
  {
    id: 5,
    catId: 3,
    title: "Man",
    path: "/men-tracksuits",
    images: [
      "/men-tracksuits/owinoug-tracksuits-1.jpg",
      "/men-tracksuits/owinoug-tracksuits-2.jpg",
    ],
  },
  {
    id: 6,
    catId: 3,
    title: "Women",
    path: "/women-tracksuits",
    images: [
      "/women-tracksuits/owinoug-tracksuits-1.jpg",
      "/women-tracksuits/owinoug-tracksuits-2.jpg",
    ],
  },

  //These are the Shots sub-categories. For any changes you would like to make, change here
  //Phones
  {
    id: 7,
    catId: 3,
    title: "Man",
    path: "/men-shorts",
    images: [
      "/men-shorts/owinoug-shorts-1.jpg",
      "/men-shorts/owinoug-shorts-2.jpg",
    ],
  },
  {
    id: 8,
    catId: 3,
    title: "Women",
    path: "/women-shorts",
    images: [
      "/women-shorts/owinoug-shorts-1.jpg",
      "/women-shorts/owinoug-shorts-2.jpg",
    ],
  },
];
const products = [
  //MEN-TSHIRTS
  {
    id: 1,
    title: "OwinoUg Abracadabra Cappuccino T-Shirt",
    image: "/tshirts/owinoug-tshirt-1.jpg",
    slug: "owinoug-abracadabra-cappuccino",
    subCatId: 1,
    catId: 1,
    description: "Classic warmth in owinoug cappuccino.",
    hasFreeDelivery: true,
    currentPrice: "100,016.10",
    originalPrice: "111,129.00",
    subCatName: "men-tshirts",
    images: ["/tshirts/owinoug-tshirt-1.jpg", "/tshirts/owinoug-tshirt-2.jpg"],
  },
  {
    id: 1,
    title: "OwinoUg White Signature T-Shirt",
    image: "/tshirts/owinoug-tshirt-4.jpg",
    slug: "owinoug-white-signature-tshirt",
    subCatId: 1,
    catId: 1,
    description: "Classic warmth in owinoug white signature.",
    hasFreeDelivery: true,
    currentPrice: "100,016.10",
    originalPrice: "111,129.00",
    subCatName: "men-tshirts",
    images: ["/tshirts/owinoug-tshirt-4.jpg"],
  },
  {
    id: 1,
    title: "OwinoUg White Crested Crane Motif T-Shirt",
    image: "/tshirts/owinoug-tshirt-5.jpg",
    slug: "owinoug-white-crested-crane-tshirt",
    subCatId: 1,
    catId: 1,
    description: "Classic warmth in owinoug white crested crane.",
    hasFreeDelivery: true,
    currentPrice: "100,016.10",
    originalPrice: null,
    subCatName: "men-tshirts",
    images: ["/tshirts/owinoug-tshirt-5.jpg", "/tshirts/owinoug-tshirt-6.jpg"],
  },
  {
    id: 1,
    title: "OwinoUg White Barcode T-Shirt",
    image: "/tshirts/owinoug-tshirt-7.jpg",
    slug: "owinoug-white-barcode-tshirt",
    subCatId: 1,
    catId: 1,
    description: "Classic warmth in owinoug white barcode tshirt.",
    hasFreeDelivery: true,
    currentPrice: "85,198.90",
    originalPrice: null,
    subCatName: "men-tshirts",
    images: ["/tshirts/owinoug-tshirt-7.jpg", "/tshirts/owinoug-tshirt-8.jpg"],
  },
  {
    id: 1,
    title: "OwinoUg Mustard Barcode T-Shirt",
    image: "/tshirts/owinoug-tshirt-9.jpg",
    slug: "owinoug-mustard-barcode-tshirt",
    subCatId: 1,
    catId: 1,
    description: "Classic warmth in owinoug mustard barcode tshirt.",
    hasFreeDelivery: true,
    currentPrice: "85,198.90",
    originalPrice: null,
    subCatName: "men-tshirts",
    images: ["/tshirts/owinoug-tshirt-9.jpg", "/tshirts/owinoug-tshirt-10.jpg"],
  },
  {
    id: 1,
    title: "OwinoUg Green Barcode T-Shirt",
    image: "/tshirts/owinoug-tshirt-11.jpg",
    slug: "owinoug-green-barcode-tshirt",
    subCatId: 1,
    catId: 1,
    description: "Classic warmth in owinoug green barcode tshirt.",
    hasFreeDelivery: true,
    currentPrice: "85,198.90",
    originalPrice: null,
    subCatName: "men-tshirts",
    images: [
      "/tshirts/owinoug-tshirt-11.jpg",
      "/tshirts/owinoug-tshirt-12.jpg",
    ],
  },
  {
    id: 1,
    title: "OwinoUg White Abracadabra T-Shirt",
    image: "/tshirts/owinoug-tshirt-13.jpg",
    slug: "owinoug-white-abracadabra-tshirt",
    subCatId: 1,
    catId: 1,
    description: "Classic warmth in owinoug white abracadabra tshirt.",
    hasFreeDelivery: true,
    currentPrice: "100,016.10",
    originalPrice: "111,1129.00",
    subCatName: "men-tshirts",
    images: [
      "/tshirts/owinoug-tshirt-13.jpg",
      "/tshirts/owinoug-tshirt-14.jpg",
    ],
  },
  {
    id: 1,
    title: "OwinoUg Black Abracadabra T-Shirt",
    image: "/tshirts/owinoug-tshirt-15.jpg",
    slug: "owinoug-black-abracadabra-tshirt",
    subCatId: 1,
    catId: 1,
    description: "Classic warmth in owinoug black abracadabra tshirt.",
    hasFreeDelivery: true,
    currentPrice: "100,016.10",
    originalPrice: "111,129.00",
    subCatName: "men-tshirts",
    images: [
      "/tshirts/owinoug-tshirt-15.jpg",
      "/tshirts/owinoug-tshirt-16.jpg",
    ],
  },
  {
    id: 1,
    title: "OwinoUg Orange Abracadabra T-Shirt",
    image: "/tshirts/owinoug-tshirt-17.jpg",
    slug: "owinoug-orange-abracadabra-tshirt",
    subCatId: 1,
    catId: 1,
    description: "Classic warmth in owinoug orange abracadabra tshirt.",
    hasFreeDelivery: true,
    currentPrice: "100,016.10",
    originalPrice: "111,129.00",
    subCatName: "men-tshirts",
    images: ["/tshirts/owinoug-tshirt-17.jpg"],
  },
];

export { categories, subCategories, products };
