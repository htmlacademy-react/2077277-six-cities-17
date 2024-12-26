import { UserType } from '../../type';
import { RATING_SHARE } from '../../const';
import { getHumanizeDate } from '../../utils';

type ReviewsItemProps = {
  comment: string;
  date: string;
  rating: number;
  user: UserType;
}

function ReviewsItem({ comment, date, rating, user }: ReviewsItemProps): JSX.Element {
  const visibleDate = getHumanizeDate(date, 'MMMM YYYY');
  const attributeDate = getHumanizeDate(date, 'YYYY-MM-DD');

  return (
    <li className="reviews__item">
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={user.avatarUrl} width="54" height="54" alt="Reviews avatar" />
        </div>
        <span className="reviews__user-name">
          {user.name}
        </span>
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{ width: `${rating * RATING_SHARE}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={attributeDate}>{visibleDate}</time>
      </div>
    </li>
  );
}

export default ReviewsItem;
