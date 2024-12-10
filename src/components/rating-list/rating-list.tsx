import RatingStar from '../rating-star/rating-star';
import { nanoid } from '@reduxjs/toolkit';
import { RATING_STARS, RATING_MEANING } from '../../const';

function RatingList(): JSX.Element {
  const starsList = RATING_STARS.map((star, index) => <RatingStar key={nanoid()} starNumber={star} ratingMeaning={RATING_MEANING[index]} />);

  return (
    <div className="reviews__rating-form form__rating">
      {starsList}
    </div>
  );
}

export default RatingList;
