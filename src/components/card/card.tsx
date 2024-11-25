type CardProps = {
  isFavorites?: boolean;
}

function Card({isFavorites = false}:CardProps): JSX.Element {
  return (
    <article className={`${isFavorites ? 'favorites' : 'cities'}__card place-card`}>
      <div className="place-card__mark">
        <span>Premium</span>
      </div>
      <div className={`${isFavorites ? 'favorites' : 'cities'}__image-wrapper place-card__image-wrapper`}>
        <a href="#">
          <img className="place-card__image" src="img/apartment-01.jpg" width={`${isFavorites ? 150 : 260}`} height={`${isFavorites ? 110 : 200}`} alt="Place image" />
        </a>
      </div>
      <div className={`${isFavorites ? 'favorites__card-info' : ''} place-card__info`}>
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;120</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className="place-card__bookmark-button place-card__bookmark-button--active button" type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">To bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={isFavorites ? { width: '100%' } : { width: '80%' }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <a href="#">Beautiful &amp; luxurious apartment at great location</a>
        </h2>
        <p className="place-card__type">Apartment</p>
      </div>
    </article>
  );
}

export default Card;