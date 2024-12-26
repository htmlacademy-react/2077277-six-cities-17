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
      latitude: 48.87861,
      longitude: 2.357499,
      zoom: 16
    },
    isFavorite: true,
    isPremium: false,
    rating: 5
  },
];

export default OFFERS_NEARBY;
