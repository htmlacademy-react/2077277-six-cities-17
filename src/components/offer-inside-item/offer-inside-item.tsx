type OfferInsideItemProps = {
  offerInsideItem: string;
}

function OfferInsideItem({ offerInsideItem }: OfferInsideItemProps): JSX.Element {
  return (
    <li className="offer__inside-item">
      {offerInsideItem}
    </li>
  );
}

export default OfferInsideItem;
