import { Fragment, ChangeEvent, memo } from 'react';
import { RatingMeaningType, RatingStarsType } from '../../type';
import { StarsColor } from '../../const';
import { selectCommentStatus } from '../../store/comments/comments-selectors';
import { useAppSelector } from '../../hooks';

type RatingStarProps = {
  starNumber: RatingStarsType;
  ratingMeaning: RatingMeaningType;
  onChangeRating: (evt: ChangeEvent<HTMLInputElement>) => void;
  dataRating: null | number;
}

function RatingStar({ starNumber, ratingMeaning, onChangeRating, dataRating }: RatingStarProps): JSX.Element {

  const isChecked = !!dataRating && starNumber <= dataRating;
  const starColor = isChecked ? StarsColor.Checked : StarsColor.UnChecked;
  const isCommentStatusPending = useAppSelector(selectCommentStatus);

  return (
    <Fragment>
      <input className="form__rating-input visually-hidden" onChange={onChangeRating} checked={dataRating === starNumber} name="rating" value={starNumber} id={`${starNumber}-stars`} type="radio" disabled={isCommentStatusPending}/>
      <label htmlFor={`${starNumber}-stars`} className="reviews__rating-label form__rating-label" title={ratingMeaning}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star" fill={starColor}></use>
        </svg>
      </label>
    </Fragment>
  );
}

const RatingStarMemo = memo(RatingStar);

export default RatingStarMemo;
