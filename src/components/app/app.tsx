import MainPage from '../../pages/main-page/main-page';
import OfferPage from '../../pages/offer-page/offer-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import { LoginStatus, RoutePath} from '../../const';
import { OfferType, OneOfferType, ReviewsType } from '../../type';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';


type AppProps = {
  offers: OfferType[];
  favorites: OfferType[];
  offersNearby: OfferType[];
  offer: OneOfferType[];
  reviews: ReviewsType[];
}

function App({ offers, favorites, offersNearby, offer, reviews }: AppProps): JSX.Element {
  const status = LoginStatus.Auth;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path={RoutePath.Index}>
            <Route index element={<MainPage loginStatus={status} offers={offers} />}></Route>
            <Route path={RoutePath.Login} element={
              <PrivateRoute loginStatus={status} loginStatusExpected={LoginStatus.NoAuth} routePath={RoutePath.Index}>
                <LoginPage />
              </PrivateRoute>
            }
            />
            <Route path={RoutePath.Favorites} element={
              <PrivateRoute loginStatus={status} loginStatusExpected={LoginStatus.Auth} routePath={RoutePath.Login}>
                <FavoritesPage loginStatus={status} favorites={favorites} />
              </PrivateRoute>
            }
            />
            <Route path={RoutePath.Offer} element={<OfferPage loginStatus={status} offersNearby={offersNearby} offer={offer} reviews={reviews} />}></Route>
            <Route path={RoutePath.NotFound} element={<NotFoundPage loginStatus={status} />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
