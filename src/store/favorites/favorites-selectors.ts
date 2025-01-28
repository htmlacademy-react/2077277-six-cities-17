import { NameSpace } from '../../const';
import { State, OfferType, StatusType } from '../../type';

const selectFavoriteOffers = (state: State):OfferType[] => state[NameSpace.Favorite].favoriteOffers;
const selectFavoriteOffersLoading = (state: State):boolean => state[NameSpace.Favorite].isFavoriteOffersLoading;
const selectUploadingFavoriteStatus = (state: State): StatusType => state[NameSpace.Favorite].uploadingFavoriteStatus;
const selectFavoriteStatusById = (state: State, offerId: string):boolean => state[NameSpace.Favorite].favoriteOffers.findIndex((card)=> card.id === offerId) !== -1;

export {selectFavoriteOffers, selectFavoriteStatusById, selectFavoriteOffersLoading, selectUploadingFavoriteStatus};
