import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsItem from '../reviews-item/reviews-item';
import { REVIEWS_NUMBER } from '../../const';
import { nanoid } from '@reduxjs/toolkit';

type ReviewsProps = {
  isLoggedIn?: boolean;
}

function Reviews({isLoggedIn = false}:ReviewsProps): JSX.Element {

  const reviews = Array.from({length: REVIEWS_NUMBER}).map(() => <ReviewsItem key={nanoid()}/>);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">1</span></h2>
      <ul className="reviews__list">
        {reviews}
      </ul>
      {isLoggedIn ? <ReviewsForm /> : ''}
    </section>
  );
}

export default Reviews;
