import { useRef, useEffect } from 'react';
import { Icon, LayerGroup, Marker, layerGroup } from 'leaflet';
import useMap from '../../hooks';
import { OfferType, CitiesListType } from '../../type';
import { UrlMarker, CityLocation } from '../../const';
import 'leaflet/dist/leaflet.css';

type MapProps = {
  isOffer?: boolean;
  activeCity: CitiesListType;
  offers: OfferType[];
  selectedOfferId: string | null;
}

const defaultCustomIcon = new Icon({
  iconUrl: UrlMarker.Default,
  iconSize: [37, 53],
  iconAnchor: [13, 39]
});

const currentCustomIcon = new Icon({
  iconUrl: UrlMarker.Current,
  iconSize: [37, 53],
  iconAnchor: [13, 39]
});

function Map({ isOffer = false, activeCity, offers, selectedOfferId }: MapProps): JSX.Element {
  const cityLocation = CityLocation[activeCity];
  const mapRef = useRef(null);
  const map = useMap(mapRef, cityLocation);
  const markerLayer = useRef<LayerGroup>(layerGroup());

  useEffect(() => {
    if (map) {
      map.setView([cityLocation.latitude, cityLocation.longitude], cityLocation.zoom);
      markerLayer.current.addTo(map);
      markerLayer.current.clearLayers();
    }
  });

  useEffect(() => {
    if (map) {
      const selectedOffer = offers.find((offer) => offer.id === selectedOfferId);
      const markerLayerCurrent = markerLayer.current;

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
          .addTo(markerLayer.current);
      });

      return () => {
        map.removeLayer(markerLayerCurrent);
      };
    }
  }, [map, offers, selectedOfferId, activeCity]);

  return <section className={`${isOffer ? 'offer' : 'cities'}__map map`} {...(isOffer ? {} : {ref:mapRef})}></section>;
}

export default Map;
