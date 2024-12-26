import { OneOfferType } from '../type';

const OFFER: OneOfferType[] = [
  {
    id: '50ea244f-4e89-4320-9272-45241d4999fb',
    title: 'Wood and stone place',
    description: 'Discover daily local life in city center, friendly neighborhood, clandestine casino, karaoke, old-style artisans, art gallery and artist studio downstairs.',
    type: 'hotel',
    price: 364,
    images: [
      'https://16.design.htmlacademy.pro/static/hotel/1.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/17.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/3.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/11.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/18.jpg',
      'https://16.design.htmlacademy.pro/static/hotel/6.jpg'
    ],
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
    goods: [
      'Dishwasher',
      'Kitchen',
      'Fridge',
      'Cable TV',
      'Baby seat',
      'Workspace',
      'Towels',
      'Air conditioning',
      'Washing machine',
      'Washer',
      'Wi-Fi',
      'Coffee machine'
    ],
    host: {
      isPro: true,
      name: 'Angelina',
      avatarUrl: 'https://16.design.htmlacademy.pro/static/host/avatar-angelina.jpg'
    },
    isPremium: true,
    isFavorite: false,
    rating: 2.4,
    bedrooms: 3,
    maxAdults: 10
  }
];

export default OFFER;
