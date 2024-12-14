import { OfferType } from '../type';

const OFFERS: OfferType[] = [
  {
    id: '50ea244f-4e89-4320-9272-45241d4999fb',
    title: 'Wood and stone place',
    type: 'hotel',
    price: 364,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.4
  },
  {
    id: 'b4eac7d0-8cb8-4046-8c5c-e8fcb7ae6b51',
    title: 'Perfectly located Castro',
    type: 'hotel',
    price: 104,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.868610000000004,
      longitude: 2.342499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 2.1
  },
  {
    id: 'ae8aa68f-e61e-47e6-afe0-4e8a6dced84e',
    title: 'Perfectly located Castro',
    type: 'house',
    price: 343,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.834610000000005,
      longitude: 2.335499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 3.4
  },
  {
    id: '8046e71f-52bc-4121-a05a-7ef2164726c4',
    title: 'Waterfront with extraordinary view',
    type: 'house',
    price: 904,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.858610000000006,
      longitude: 2.330499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 5
  },
  {
    id: '13c02889-dd9f-4078-ac51-000ad9dd9c1d',
    title: 'Canal View Prinsengracht',
    type: 'apartment',
    price: 475,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.225402,
      longitude: 6.784314,
      zoom: 16
    },
    isFavorite: true,
    isPremium: true,
    rating: 2
  },
  {
    id: '9af87d26-337c-4068-80c3-1c36f1021f5f',
    title: 'Perfectly located Castro',
    type: 'house',
    price: 433,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/15.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.236402000000005,
      longitude: 6.784314,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.7
  },
  {
    id: '72582ecc-2ae8-4091-b1a6-3ba96ae8b920',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'hotel',
    price: 454,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
    city: {
      name: 'Dusseldorf',
      location: {
        latitude: 51.225402,
        longitude: 6.776314,
        zoom: 13
      }
    },
    location: {
      latitude: 51.210402,
      longitude: 6.798314,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.8
  },
  {
    id: 'bfea2196-b8f2-4483-b5c5-d34a9740883d',
    title: 'Beautiful & luxurious apartment at great location',
    type: 'room',
    price: 255,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/7.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.949361,
      longitude: 6.976974,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.1
  },
  {
    id: '8096a383-053a-4b73-9778-b30c584ff2ee',
    title: 'Tile House',
    type: 'house',
    price: 140,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.913361,
      longitude: 6.9509739999999995,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.4
  },
  {
    id: '152f12ec-e930-4df4-8905-40c36350333d',
    title: 'Canal View Prinsengracht',
    type: 'house',
    price: 989,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.930361,
      longitude: 6.937974,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.4
  },
  {
    id: 'cbbba310-2e1e-45af-81c3-21ae374c5ab9',
    title: 'Canal View Prinsengracht',
    type: 'room',
    price: 187,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.960361,
      longitude: 6.9509739999999995,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4.7
  },
  {
    id: '98cc0356-3daf-478f-9b60-409bbacebe34',
    title: 'The Pondhouse - A Magical Place',
    type: 'hotel',
    price: 166,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.918461,
      longitude: 6.969974,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.3
  },
  {
    id: '9fffc7a2-b2d7-474c-ac7f-f852e4fc6e1d',
    title: 'Waterfront with extraordinary view',
    type: 'apartment',
    price: 360,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    city: {
      name: 'Cologne',
      location: {
        latitude: 50.938361,
        longitude: 6.959974,
        zoom: 13
      }
    },
    location: {
      latitude: 50.957361,
      longitude: 6.9509739999999995,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.5
  },
  {
    id: 'bbb0b886-2784-4886-977b-321afe2bda1e',
    title: 'Amazing and Extremely Central Flat',
    type: 'hotel',
    price: 215,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.833557,
      longitude: 4.374696999999999,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.6
  },
  {
    id: '37f02e4f-4891-4dc3-8126-391b01908ab9',
    title: 'Wood and stone place',
    type: 'room',
    price: 230,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.837557,
      longitude: 4.339697,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.3
  },
  {
    id: '4b1b7fb7-af0c-4090-8da5-06fda475ffa2',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'house',
    price: 392,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.849557,
      longitude: 4.374696999999999,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.4
  },
  {
    id: 'f78f4f79-4bad-41b2-b3e8-0e68959853b9',
    title: 'House in countryside',
    type: 'apartment',
    price: 390,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/2.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.852557,
      longitude: 4.3376969999999995,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.9
  },
  {
    id: 'a4cb1d30-86ad-48d5-8781-ec1376725c9c',
    title: 'Wood and stone place',
    type: 'hotel',
    price: 294,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.828556999999996,
      longitude: 4.362697,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.2
  },
  {
    id: 'a9388cf3-d9e7-4c15-a445-2b63050b7f7f',
    title: 'The Joshua Tree House',
    type: 'house',
    price: 384,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/14.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.835556999999994,
      longitude: 4.354697,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1
  },
  {
    id: '5012c740-85c0-41f4-9f21-80266c5cf197',
    title: 'Waterfront with extraordinary view',
    type: 'hotel',
    price: 102,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
    city: {
      name: 'Brussels',
      location: {
        latitude: 50.846557,
        longitude: 4.351697,
        zoom: 13
      }
    },
    location: {
      latitude: 50.867557,
      longitude: 4.339697,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.7
  },
  {
    id: '7f518e0f-e428-4315-93ca-e4813f0b66b1',
    title: 'Amazing and Extremely Central Flat',
    type: 'hotel',
    price: 303,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/4.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.385540000000006,
      longitude: 4.902976,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.3
  },
  {
    id: '50265da8-0e0e-4c2c-8dfc-cc6cca66ea90',
    title: 'Tile House',
    type: 'apartment',
    price: 489,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.397540000000006,
      longitude: 4.9099759999999995,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 2.3
  },
  {
    id: 'bb681556-bc67-4f8b-99c3-e03132273bb1',
    title: 'The Joshua Tree House',
    type: 'hotel',
    price: 332,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/10.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.37454,
      longitude: 4.881976,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.8
  },
  {
    id: '91884a26-3401-4745-941b-c78968acc737',
    title: 'Wood and stone place',
    type: 'house',
    price: 672,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/9.jpg',
    city: {
      name: 'Amsterdam',
      location: {
        latitude: 52.37454,
        longitude: 4.897976,
        zoom: 13
      }
    },
    location: {
      latitude: 52.367540000000005,
      longitude: 4.883976,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4
  },
  {
    id: '8f27961b-07da-4f4b-b2fd-f036ee0bd913',
    title: 'House in countryside',
    type: 'room',
    price: 217,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.529341,
      longitude: 9.975654,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 1.7
  },
  {
    id: '080bb95a-de7c-46aa-95ca-dd14c735f058',
    title: 'Waterfront with extraordinary view',
    type: 'room',
    price: 232,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/6.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.565341,
      longitude: 9.980654000000001,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.6
  },
  {
    id: '7102fcfe-00d4-492e-bb33-477f49fdd2ea',
    title: 'Amazing and Extremely Central Flat',
    type: 'apartment',
    price: 482,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/8.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.546341000000005,
      longitude: 10.022654000000001,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.2
  },
  {
    id: '6a59dc8e-3c38-4826-93cf-b57d083ba3ed',
    title: 'House in countryside',
    type: 'apartment',
    price: 286,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/20.jpg',
    city: {
      name: 'Hamburg',
      location: {
        latitude: 53.550341,
        longitude: 10.000654,
        zoom: 13
      }
    },
    location: {
      latitude: 53.565341000000004,
      longitude: 9.978654,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 1.3
  },
];


export default OFFERS;
