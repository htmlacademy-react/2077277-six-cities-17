import { memo } from 'react';

type OfferImageProps = {
  path: string;
  type: string;
}

function OfferImage({path, type}:OfferImageProps): JSX.Element {
  return (
    <div className="offer__image-wrapper">
      <img className="offer__image" src={path} alt={`Photo ${type}`} />
    </div>

  );
}

const OfferImageMemo = memo(OfferImage);

export default OfferImageMemo;
