import ReviewsFormMemo from '../reviews-form/reviews-form';
import ReviewsItemMemo from '../reviews-item/reviews-item';
import { LoginStatusList, ReviewsType } from '../../type';
import { LoginStatus } from '../../const';
import { getReviewsByDate } from '../../utils';

type ReviewsListProps = {
  loginStatus: LoginStatusList;
  reviews: ReviewsType[];
}

function ReviewsList({ loginStatus, reviews }: ReviewsListProps): JSX.Element {

  const reviewsSlicedAndSorted = reviews.toSorted(getReviewsByDate).slice(0, 10);
  const reviewsList = reviewsSlicedAndSorted.map((review) => <ReviewsItemMemo key={review.id} comment={review.comment} date={review.date} rating={review.rating} user={review.user} />);

  return (
    <section className="offer__reviews reviews">
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviews.length}</span></h2>
      <ul className="reviews__list">
        {reviewsList}
      </ul>
      {loginStatus === LoginStatus.Auth ? <ReviewsFormMemo /> : ''}
    </section>
  );
}

export default ReviewsList;
