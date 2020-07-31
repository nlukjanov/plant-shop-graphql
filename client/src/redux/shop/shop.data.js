
const SHOP_DATA = {
  bedroom: {
    id: 1,
    title: 'Bedroom',
    routeName: 'bedroom',
    items: [
      {
        id: 1,
        name: 'Aloe Vera',
        imageUrl: 'https://i.ibb.co/ZYW3VTp/brown-brim.png',
        price: 25
      },
      {
        id: 2,
        name: 'Calathea',
        imageUrl: 'https://i.ibb.co/ypkgK0X/blue-beanie.png',
        price: 18
      },
      {
        id: 3,
        name: 'Chinese Money Plant',
        imageUrl: 'https://i.ibb.co/QdJwgmp/brown-cowboy.png',
        price: 35
      },
      {
        id: 4,
        name: 'Devils Ivy',
        imageUrl: 'https://i.ibb.co/RjBLWxB/grey-brim.png',
        price: 25
      },
      {
        id: 5,
        name: 'Peace Lily',
        imageUrl: 'https://i.ibb.co/YTjW3vF/green-beanie.png',
        price: 18
      },
      {
        id: 6,
        name: 'Snake Plant',
        imageUrl: 'https://i.ibb.co/rKBDvJX/palm-tree-cap.png',
        price: 14
      },
      {
        id: 7,
        name: 'Succulent',
        imageUrl: 'https://i.ibb.co/bLB646Z/red-beanie.png',
        price: 18
      },
      {
        id: 8,
        name: 'Watermelon Peperomia',
        imageUrl: 'https://i.ibb.co/1f2nWMM/wolf-cap.png',
        price: 14
      },
      {
        id: 9,
        name: 'Weeping Fig',
        imageUrl: 'https://i.ibb.co/X2VJP2W/blue-snapback.png',
        price: 16
      }
    ]
  },
  bathroom: {
    id: 2,
    title: 'Bathroom',
    routeName: 'bathroom',
    items: [
      {
        id: 10,
        name: 'Anthurium',
        imageUrl: 'https://i.ibb.co/0s3pdnc/adidas-nmd.png',
        price: 22
      },
      {
        id: 11,
        name: 'Chlorophytum Comosum',
        imageUrl: 'https://i.ibb.co/dJbG1cT/yeezy.png',
        price: 28
      },
      {
        id: 12,
        name: 'Corn Plant',
        imageUrl: 'https://i.ibb.co/bPmVXyP/black-converse.png',
        price: 11
      },
      {
        id: 13,
        name: 'Iron Cross Begonia',
        imageUrl: 'https://i.ibb.co/1RcFPk0/white-nike-high-tops.png',
        price: 18
      },
      {
        id: 14,
        name: 'Maidenhair Fern',
        imageUrl: 'https://i.ibb.co/QcvzydB/nikes-red.png',
        price: 16
      },
      {
        id: 15,
        name: 'Monstera Adansonii',
        imageUrl: 'https://i.ibb.co/fMTV342/nike-brown.png',
        price: 24
      },
      {
        id: 16,
        name: 'Sansivieria Moonshine',
        imageUrl: 'https://i.ibb.co/w4k6Ws9/nike-funky.png',
        price: 19
      },
      {
        id: 17,
        name: 'Schefflera',
        imageUrl: 'https://i.ibb.co/Mhh6wBg/timberlands.png',
        price: 20
      }
    ]
  },
  living: {
    id: 3,
    title: 'Living Room',
    routeName: 'living',
    items: [
      {
        id: 18,
        name: 'Fiddle Leaf Fig',
        imageUrl: 'https://i.ibb.co/XzcwL5s/black-shearling.png',
        price: 25
      },
      {
        id: 19,
        name: 'Kentia Palm',
        imageUrl: 'https://i.ibb.co/mJS6vz0/blue-jean-jacket.png',
        price: 35
      },
      {
        id: 20,
        name: 'Parlour Palm',
        imageUrl: 'https://i.ibb.co/N71k1ML/grey-jean-jacket.png',
        price: 23
      },
      {
        id: 21,
        name: 'Rubber Plant',
        imageUrl: 'https://i.ibb.co/s96FpdP/brown-shearling.png',
        price: 64
      },
      {
        id: 22,
        name: 'Swiss Cheese Plant',
        imageUrl: 'https://i.ibb.co/M6hHc3F/brown-trench.png',
        price: 54
      }
    ]
  },
  kitchen: {
    id: 4,
    title: 'Kitchen',
    routeName: 'kitchen',
    items: [
      {
        id: 23,
        name: 'Aspidistra',
        imageUrl: 'https://i.ibb.co/7CQVJNm/blue-tank.png',
        price: 25
      },
      {
        id: 24,
        name: 'Dracena Fragrans',
        imageUrl: 'https://i.ibb.co/4W2DGKm/floral-blouse.png',
        price: 20
      },
      {
        id: 25,
        name: 'English Ivy',
        imageUrl: 'https://i.ibb.co/KV18Ysr/floral-skirt.png',
        price: 40
      },
      {
        id: 26,
        name: 'Phlebodium Aureum',
        imageUrl: 'https://i.ibb.co/N3BN1bh/red-polka-dot-dress.png',
        price: 40
      },
      {
        id: 27,
        name: 'Satin Pothos',
        imageUrl: 'https://i.ibb.co/KmSkMbH/striped-sweater.png',
        price: 45
      },
      {
        id: 28,
        name: 'Strelitzia Nicolai',
        imageUrl: 'https://i.ibb.co/v1cvwNf/yellow-track-suit.png',
        price: 65
      },
      {
        id: 29,
        name: 'Tradescantia Sitara',
        imageUrl: 'https://i.ibb.co/qBcrsJg/white-vest.png',
        price: 45
      }
    ]
  },
  study: {
    id: 5,
    title: 'Study',
    routeName: 'study',
    items: [
      {
        id: 30,
        name: 'Alocasia Gageana',
        imageUrl: 'https://i.ibb.co/xJS0T3Y/camo-vest.png',
        price: 32
      },
      {
        id: 31,
        name: 'Alocasia Zebrina',
        imageUrl: 'https://i.ibb.co/qMQ75QZ/floral-shirt.png',
        price: 20
      },
      {
        id: 32,
        name: 'Asparagus Fern',
        imageUrl: 'https://i.ibb.co/55z32tw/long-sleeve.png',
        price: 25
      },
      {
        id: 33,
        name: 'Ceropegia Woodlii',
        imageUrl: 'https://i.ibb.co/RvwnBL8/pink-shirt.png',
        price: 25
      },
      {
        id: 34,
        name: 'Euphorbia Abyssinica',
        imageUrl: 'https://i.ibb.co/VpW4x5t/roll-up-jean-shirt.png',
        price: 40
      },
      {
        id: 35,
        name: 'Ficus Benjamina',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 25
      },
      {
        id: 36,
        name: 'Philodendron Scandens',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 45
      },
      {
        id: 37,
        name: 'Sweetheart Plant',
        imageUrl: 'https://i.ibb.co/mh3VM1f/polka-dot-shirt.png',
        price: 35
      }
    ]
  }
};

export default SHOP_DATA;
