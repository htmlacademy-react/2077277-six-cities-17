import FavoritesListItem from '../favorites-list-item/favorites-list-item';

type FavoritesCityProps = {
  Paris: boolean;
  Cologne: boolean;
  Brussels:boolean;
  Amsterdam: boolean;
  Hamburg: boolean;
  Dusseldorf: boolean;
};

type FavoritesMainProps = {
  favoritesCity: FavoritesCityProps;
}

function FavoritesMain({favoritesCity}:FavoritesMainProps): JSX.Element {

  const favoritesList = Object.entries(favoritesCity).map((item) => {
    if (item[1]) {
      return <FavoritesListItem key={item[0]} favoriteCity={item[0]} />;
    }
  });

  return (
    <section className="favorites">
      <h1 className="favorites__title">Saved listing</h1>
      <ul className="favorites__list">
        {favoritesList}
      </ul>
    </section>
  );
}

export default FavoritesMain;
