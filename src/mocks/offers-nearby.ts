import { OfferType } from '../type';

const OFFERS_NEARBY: OfferType[] = [
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
      latitude: 48.87961000000001,
      longitude: 2.353499,
      zoom: 16
    },
    isFavorite: false,
    isPremium: true,
    rating: 2.4
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
