import CardMemo from '../card/card';
import { FavoritesPage, RoutePath } from '../../const';
import { OfferType } from '../../type';
import { Link } from 'react-router-dom';

type FavoritesListItemProps = {
  offers: OfferType[];
  city: string;
}

function FavoritesListItem({ offers, city }: FavoritesListItemProps): JSX.Element {

  const cardsList = offers.map((offer) => <CardMemo key={offer.id} id={offer.id} title={offer.title} type={offer.type} price={offer.price} previewImage={offer.previewImage} rating={offer.rating} isPremium={offer.isPremium} page={FavoritesPage} />);

  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link className="locations__item-link" to={RoutePath.Index}>
            <span>{city}</span>
          </Link>
        </div>
      </div>
      <div className="favorites__places">
        {cardsList}
      </div>
    </li>
  );
}

export default FavoritesListItem;
