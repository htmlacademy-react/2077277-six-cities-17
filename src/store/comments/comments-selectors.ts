import { NameSpace } from '../../const';
import { State, ReviewsType } from '../../type';

const selectOffersComments = (state: State):ReviewsType[] => state[NameSpace.Comments].offerComments;
const selectCommentsOffersStatus = (state: State):boolean => state[NameSpace.Comments].isLoadingOffersComments;
const selectCommentStatus = (state: State):boolean => state[NameSpace.Comments].isLoadingComment;

export {selectOffersComments, selectCommentsOffersStatus, selectCommentStatus};
