type MapProps = {
  isOffer?: boolean;
}

function Map({isOffer = false}:MapProps): JSX.Element {
  return (
    <section className = {`${isOffer ? 'offer' : 'cities'}__map map`}></section>
  );
}

export default Map;
