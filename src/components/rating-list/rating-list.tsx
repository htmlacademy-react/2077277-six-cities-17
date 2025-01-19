import RatingStarMemo from '../rating-star/rating-star';
import { RATING_STARS, RATING_MEANING } from '../../const';
import { ChangeEvent, memo } from 'react';

type RatingListProps = {
  onChangeRating: (evt: ChangeEvent<HTMLInputElement>) => void;
  dataRating: null | number;
}

function RatingList({onChangeRating, dataRating}:RatingListProps): JSX.Element {
  const starsList = RATING_STARS.map((star, index) => <RatingStarMemo key={star} dataRating={dataRating} starNumber={star} ratingMeaning={RATING_MEANING[index]} onChangeRating={onChangeRating} />);

  return (
    <div className="reviews__rating-form form__rating">
      {starsList}
    </div>
  );
}

const RatingListMemo = memo(RatingList);

export default RatingListMemo;
