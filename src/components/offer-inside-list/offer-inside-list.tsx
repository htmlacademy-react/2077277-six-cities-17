import OfferInsideItem from '../offer-inside-item/offer-inside-item';

type OfferInsideListProps = {
  goods: string[];
}

function OfferInsideList({goods}:OfferInsideListProps): JSX.Element {
  const offerItems = goods.map((good) => <OfferInsideItem key={good} offerInsideItem={good} />);

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
