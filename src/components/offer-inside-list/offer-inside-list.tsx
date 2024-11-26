import OfferInsideItem from '../offer-inside-item/offer-inside-item';
import { offerInsideItems } from '../../const';

function OfferInsideList(): JSX.Element {
  const offerItems = offerInsideItems.map((item) => <OfferInsideItem key={item} offerInsideItem={item} />);

  return (
    <div className="offer__inside">
      <h2 className="offer__inside-title">What&apos;s inside</h2>
      <ul className="offer__inside-list">
        {offerItems}
      </ul>
    </div>
  );
}

export default OfferInsideList;
