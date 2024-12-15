import { OfferType } from '../type';

const OFFERS_NEARBY: OfferType[] = [
  {
    id: '1053117c-bfcd-40f5-a18b-25d4a3dffce7',
    title: 'Penthouse, 4-5 rooms + 5 balconies',
    type: 'apartment',
    price: 224,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.837610000000005,
      longitude: 2.3454990000000002,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 4
  },
  {
    id: '1c53ae92-b3ba-412a-bc55-b749edbfd444',
    title: 'Wood and stone place',
    type: 'hotel',
    price: 289,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/5.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.84761,
      longitude: 2.356499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.6
  },
  {
    id: 'd916ed58-52d7-4195-8de0-09b521263780',
    title: 'Tile House',
    type: 'hotel',
    price: 250,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/19.jpg',
    city: {
      name: 'Paris',
      location: {
        latitude: 48.85661,
        longitude: 2.351499,
        zoom: 13
      }
    },
    location: {
      latitude: 48.87561,
      longitude: 2.375499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 3.4
  },
  {
    id: 'd8ef554c-9f39-4efc-b816-fad3ac0e61cd',
    title: 'Nice, cozy, warm big bed apartment',
    type: 'hotel',
    price: 153,
    previewImage: 'https://16.design.htmlacademy.pro/static/hotel/16.jpg',
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
      longitude: 2.364499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: false,
    rating: 4.1
  },
];

export default OFFERS_NEARBY;
