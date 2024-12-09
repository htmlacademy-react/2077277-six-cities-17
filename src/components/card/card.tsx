import { PageParamsType } from '../../type';
import { RoutePath, RATING_SHARE } from '../../const';
import { Link } from 'react-router-dom';

type CardProps = {
  page: PageParamsType;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  rating: number;
  isPremium: boolean;
  isFavorite: boolean;
}

function Card({ page, title, type, price, previewImage, rating, isPremium, isFavorite }: CardProps): JSX.Element {
  return (
    <article className={`${page.ImageWrapperClass}__card place-card`}>
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={`${page.ImageWrapperClass}__image-wrapper place-card__image-wrapper`}>
        <Link to={RoutePath.Offer}>
          <img className="place-card__image" src={previewImage} width={`${page.ImgWidth}`} height={`${page.ImgHeight}`} alt="Place image" />
        </Link>
      </div>
      <div className={`${page.CardInfoClass} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${isFavorite && 'place-card__bookmark-button--active'} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${rating * RATING_SHARE}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={RoutePath.Offer}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
}

export default Card;
