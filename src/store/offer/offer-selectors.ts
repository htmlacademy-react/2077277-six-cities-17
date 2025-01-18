import { NameSpace } from '../../const';
import { State, OneOfferType } from '../../type';

const selectOffer = (state: State):OneOfferType | null => state[NameSpace.Offer].offer;
const selectOfferLoadingStatus = (state: State):boolean => state[NameSpace.Offer].isLoadingOffer;
const selectErrorConnection = (state: State): boolean => state[NameSpace.Offer].isErrorConnection;

export {selectOffer, selectOfferLoadingStatus, selectErrorConnection};
