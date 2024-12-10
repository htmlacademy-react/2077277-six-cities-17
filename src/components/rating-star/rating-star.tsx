import { Fragment, ChangeEvent } from 'react';
import { RatingMeaningType, RatingStarsType } from '../../type';

type RatingStarProps = {
  starNumber: RatingStarsType;
  ratingMeaning: RatingMeaningType;
  onChangeRating: (evt: ChangeEvent<HTMLInputElement>) => void;
}

function RatingStar({ starNumber, ratingMeaning, onChangeRating }: RatingStarProps): JSX.Element {

  return (
    <Fragment>
      <input className="form__rating-input visually-hidden" onChange={onChangeRating} name="rating" value={starNumber} id={`${starNumber}-stars`} type="radio" />
      <label htmlFor={`${starNumber}-stars`} className="reviews__rating-label form__rating-label" title={ratingMeaning}>
        <svg className="form__star-image" width="37" height="33">
          <use xlinkHref="#icon-star"></use>
        </svg>
      </label>
    </Fragment>
  );
}

export default RatingStar;
