import { NameSpace } from '../../const';
import { State, OfferType } from '../../type';

const selectFavoriteOffers = (state: State):OfferType[] => state[NameSpace.Favorite].favoriteOffers;
const selectLoadingFavoriteOffersStatus = (state: State):boolean => state[NameSpace.Favorite].isLoadingFavoriteStatus;
const selectFavoriteStatusById = (state: State, offerId: string):boolean => state[NameSpace.Favorite].favoriteOffers.findIndex((card)=> card.id === offerId) !== -1;

export {selectFavoriteOffers, selectLoadingFavoriteOffersStatus, selectFavoriteStatusById};
