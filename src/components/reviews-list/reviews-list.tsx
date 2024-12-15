import ReviewsForm from '../reviews-form/reviews-form';
import ReviewsItem from '../reviews-item/reviews-item';
import { LoginStatusList, ReviewsType } from '../../type';
import { LoginStatus } from '../../const';

type ReviewsListProps = {
  loginStatus: LoginStatusList;
  reviews: ReviewsType[];
}

function ReviewsList({ loginStatus, reviews }: ReviewsListProps): JSX.Element {

  const reviewsSliced = reviews.slice(0, 10);
  const reviewsList = reviewsSliced.map((review) => <ReviewsItem key={review.id} comment={review.comment} date={review.date} rating={review.rating} user={review.user} />);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviewsList}
      </ul>
      {loginStatus === LoginStatus.Auth ? <ReviewsForm /> : ''}
    </section>
  );
}

export default ReviewsList;
