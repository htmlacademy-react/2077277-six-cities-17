import { NameSpace } from '../../const';
import { State, OfferType, StatusType } from '../../type';

const selectFavoriteOffers = (state: State):OfferType[] => state[NameSpace.Favorite].favoriteOffers;
const selectFavoriteOffersLoading = (state: State):boolean => state[NameSpace.Favorite].isFavoriteOffersLoading;
const selectUploadingFavoriteStatus = (state: State): StatusType => state[NameSpace.Favorite].uploadingFavoriteStatus;

export {selectFavoriteOffers, selectFavoriteOffersLoading, selectUploadingFavoriteStatus};
