import { ImageSourcePropType } from 'react-native';

export type BrandEvent = {
  id: string;
  title: string;
  date?: string;
  description?: string;
  image?: ImageSourcePropType;
};

export type BrandContact = {
  address?: string;
  contactPerson?: string;
  socials?: {
    instagram?: string;
    tiktok?: string;
    website?: string;
  };
  rsvp?: string;
};

export type Brand = {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  image: ImageSourcePropType; 
  logo: ImageSourcePropType;  
  location?: string;
  website?: string;
  events?: BrandEvent[];
  gallery?: ImageSourcePropType[]; 
  contact?: BrandContact;
};

export const brands: Brand[] = [
  /* ============================
    GOASAYA
  ============================ */
  {
    id: "goasaya",
    name: "GoaSaya",
    slug: "goasaya",
    shortDescription: "Cave-inspired fine dining restaurant in Jakarta.",
    description:
      "GoaSaya is an immersive fine dining destination designed to resemble a sculpted cave. Located in Jakarta, it blends dramatic architecture with curated tasting menus, handcrafted cocktails and sensory storytelling.",
    image: require('../assets/images/brands/goasaya/main.jpeg'),
    logo: require('../assets/images/brands/goasaya/logo-white.png'),
    location: "Jakarta, Indonesia",
    website: "https://www.goasaya.com",

    events: [],

    gallery: [
      require('../assets/images/brands/goasaya/glass.jpeg'),
      require('../assets/images/brands/goasaya/main-2.jpeg'),
      require('../assets/images/brands/goasaya/hole.jpeg'),
    ],

    contact: {
      address: "Entertainment District, PIK 2",
      contactPerson: "+62 813 3838 2845",
      socials: {
        instagram: "https://instagram.com/goasaya.jkt",
        tiktok: "https://tiktok.com/goasaya.jkt",
        website: "https://www.goasaya.com",
      },
      rsvp: "https://booking.chope.co/booking_index?rid=goasayarestaurant2511jkt&source=rest_website_goasayarestaurant&adults=2&lang=en_US&country_code=JAKARTA",
    },
  },

  /* ============================
    ONE PERCENT
  ============================ */
  {
    id: "onepercent",
    name: "One Percent",
    slug: "onepercent",
    shortDescription: "Private club and boutique rooms above GoaSaya.",
    description:
      "One Percent is a private club concept featuring exclusive lounges, curated musical ambience and boutique rooms. A modern lifestyle destination built for connection, privacy and elevated nightlife.",
    image: require('../assets/images/brands/onepercent/inner-circle.png'),
    logo: require('../assets/images/brands/onepercent/logo-white.png'),
    location: "Jakarta, Indonesia",
    website: "https://onepercentlounge.id",

    events: [],

    gallery: [
      require('../assets/images/brands/onepercent/op7.jpg'),
      require('../assets/images/brands/onepercent/op3.jpg'),
      require('../assets/images/brands/onepercent/op6.jpg'),
    ],

    contact: {
      address: "Entertainment District, PIK 2",
      contactPerson: "+62 812 1414 4883",
      socials: {
        instagram: "https://instagram.com/onepercent_jkt",
        website: "https://onepercent-three.vercel.app",
      },
      rsvp: "https://onepercentlounge.id/reservations",
    },
  },

  /* ============================
    NEMU SAYA
  ============================ */
  {
    id: "nemusaya",
    name: "Nemu Saya Villa",
    slug: "nemusaya",
    shortDescription: "A luxury villa retreat surrounded by the beauty of Bali.",
    description:
      "Nemu Saya Villa is a serene luxury villa in Bali offering spacious suites, private pools and curated services. It is crafted for travelers seeking privacy, comfort and a natural escape.",
    image: require('../assets/images/brands/nemusaya/villa1.jpg'),
    logo: require('../assets/images/brands/nemusaya/nemusaya.webp'),
    location: "Bali, Indonesia",
    website: "https://www.nemusaya.com",

    events: [],

    gallery: [
      require('../assets/images/brands/nemusaya/villa1.jpg'),
      require('../assets/images/brands/nemusaya/villa2.jpg'),
      require('../assets/images/brands/nemusaya/villa3.jpg'),
    ],

    contact: {
      address: "Bali",
      contactPerson: "+62 877 5566 8899",
      socials: {
        instagram: "https://instagram.com/nemusayavillas",
        website: "https://www.nemusaya.com",
      },
      rsvp: "https://www.nemusaya.com/booking",
    },
  },

  /* ============================
    AROMA BIJI
  ============================ */
  {
    id: "aromabiji",
    name: "Aroma Biji",
    slug: "aromabiji",
    shortDescription: "Modern artisan coffee brand celebrating Indonesian coffee.",
    description:
      "Aroma Biji brings a contemporary approach to Indonesian coffee culture. With artisanal brews, signature blends and warm hospitality, the brand celebrates craftsmanship through every cup.",
    image: require('../assets/images/brands/aromabiji/full-product.jpeg'),
    logo: require('../assets/images/brands/aromabiji/logo.png'),
    location: "Indonesia",
    website: "https://aromabiji.co",

    events: [],

    gallery: [
      require('../assets/images/brands/aromabiji/foto-product-1.jpg'),
      require('../assets/images/brands/aromabiji/foto-product-2.jpg'),
      require('../assets/images/brands/aromabiji/foto-product-3.jpg'),
    ],

    contact: {
      address: "Available across multiple cities",
      contactPerson: "+62 878 3322 4455",
      socials: {
        instagram: "https://instagram.com/aromabiji.id",
        tiktok: "https://tiktok.com/@aromabiji.id",
        website: "https://aromabiji.co",
      },
      rsvp: "",
    },
  },
];