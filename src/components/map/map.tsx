import { useRef, useEffect } from 'react';
import { Icon, Marker, layerGroup } from 'leaflet';
import useMap from '../../hooks';
import { CityType, OfferType} from '../../type';
import { URL_MARKER_DEFAULT, URL_MARKER_CURRENT } from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  isOffer?: boolean;
  activeCity: CityType;
  offers: OfferType[];
  selectedOfferId: string | null;
}

const defaultCustomIcon = new Icon({
  iconUrl: URL_MARKER_DEFAULT,
  iconSize: [37, 53],
  iconAnchor: [13, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: URL_MARKER_CURRENT,
  iconSize: [37, 53],
  iconAnchor: [13, 39]
});

function Map({ isOffer = false, activeCity, offers, selectedOfferId }: MapProps): JSX.Element {

  const mapRef = useRef(null);
  const map = useMap(mapRef, activeCity);


  useEffect(() => {
    if (map) {
      const markerLayer = layerGroup().addTo(map);
      const selectedOffer = offers.find((offer) => offer.id === selectedOfferId);

      offers.forEach((offer) => {
        const marker = new Marker({
          lat: offer.location.latitude,
          lng: offer.location.longitude
        });

        marker
          .setIcon(
            selectedOffer !== undefined && offer.id === selectedOffer.id
              ? currentCustomIcon
              : defaultCustomIcon
          )
          .addTo(markerLayer);
      });

      return () => {
        map.removeLayer(markerLayer);
      };
    }
  }, [map, offers, selectedOfferId]);

  return <section className={`${isOffer ? 'offer' : 'cities'}__map map`} ref={mapRef}></section>;
}

export default Map;
