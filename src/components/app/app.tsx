import MainPage from '../../pages/main-page/main-page';
import OfferPage from '../../pages/offer-page/offer-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoadingPage from '../../pages/loading-page/loading-page';
import PrivateRoute from '../private-route/private-route';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import { LoginStatus, RoutePath } from '../../const';
import { OfferType} from '../../type';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectOffersLoadingStatus } from '../../store/offers/offers-selectors';
import { selectLoginStatus } from '../../store/user/user-selectors';
import { useEffect } from 'react';
import { fetchOffers, checkAuthStatus } from '../../store/api-action';

type AppProps = {
  favorites: OfferType[];
}

function App({ favorites}: AppProps): JSX.Element {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectLoginStatus);
  const isOffersListLoading = useAppSelector(selectOffersLoadingStatus);

  useEffect(() => {
    dispatch(fetchOffers());
    dispatch(checkAuthStatus());
  }, [dispatch]);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        {isOffersListLoading ? <LoadingPage loginStatus={status} /> :
          <Routes>
            <Route path={RoutePath.Index}>
              <Route index element={<MainPage loginStatus={status} />}></Route>
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
              <Route path={RoutePath.Offer} element={<OfferPage />}></Route>
              <Route path={RoutePath.NotFound} element={<NotFoundPage loginStatus={status} />}></Route>
            </Route>
          </Routes>}
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
