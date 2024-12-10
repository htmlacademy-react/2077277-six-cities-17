import { OfferType } from '../type';

const FAVORITES: OfferType[] = [
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
    isPremium: false,
    rating: 2.1
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
    rating: 1.6
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
    isPremium: false,
    rating: 2
  }
];

export default FAVORITES;
