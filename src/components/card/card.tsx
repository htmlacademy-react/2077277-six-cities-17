import BookmarkMemo from '../bookmark/bookmark';
import { PageParamsType } from '../../type';
import { RoutePath, RATING_SHARE } from '../../const';
import { Link, generatePath } from 'react-router-dom';
import { capitalizeFirstLetter } from '../../utils';
import { memo } from 'react';

type CardProps = {
  page: PageParamsType;
  title: string;
  type: string;
  price: number;
  previewImage: string;
  rating: number;
  isPremium: boolean;
  id: string;
  onHandleActiveOfferChange?: (id: string | null) => void;
}

function Card({ page, title, type, price, previewImage, rating, isPremium, id, onHandleActiveOfferChange}: CardProps): JSX.Element {
  const roundRating = Math.round(rating);

  return (
    <article
      className={`${page.ImageWrapperClass}__card place-card`}
      onMouseEnter={() => onHandleActiveOfferChange && onHandleActiveOfferChange(id)}
      onMouseLeave={() => onHandleActiveOfferChange && onHandleActiveOfferChange(null)}
    >
      {isPremium &&
        <div className="place-card__mark">
          <span>Premium</span>
        </div>}
      <div className={`${page.ImageWrapperClass}__image-wrapper place-card__image-wrapper`}>
        <Link to={generatePath(RoutePath.Offer, { offerId: id })}>
          <img className="place-card__image" src={previewImage} width={`${page.ImgWidth}`} height={`${page.ImgHeight}`} alt="Place image" />
        </Link>
      </div>
      <div className={`${page.CardInfoClass} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <BookmarkMemo offerId={id}/>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: `${roundRating * RATING_SHARE}%` }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={generatePath(RoutePath.Offer, { offerId: id })}>{title}</Link>
        </h2>
        <p className="place-card__type">{capitalizeFirstLetter(type)}</p>
      </div>
    </article>
  );
}

const CardMemo = memo(Card);

export default CardMemo;
