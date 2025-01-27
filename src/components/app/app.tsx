import MainPage from '../../pages/main-page/main-page';
import OfferPage from '../../pages/offer-page/offer-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import LoadingPage from '../../pages/loading-page/loading-page';
import ErrorConnection from '../error-connection/error-connection';
import PrivateRoute from '../private-route/private-route';
import ScrollToTop from '../scroll-to-top/scroll-to-top';
import { RoutePath, LoginStatus } from '../../const';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { selectOffersLoadingStatus } from '../../store/offers/offers-selectors';
import { selectLoginStatus, selectLoadingLogout } from '../../store/user/user-selectors';
import { useEffect } from 'react';
import { fetchOffers, checkAuthStatus, fetchFavoriteOffers } from '../../store/api-action';
import { setErrorConnectionStatusOffers } from '../../store/offers/offers-slice';
import { selectErrorConnectionOffers } from '../../store/offers/offers-selectors';
import { selectFavoriteOffersLoading } from '../../store/favorites/favorites-selectors';

function App(): JSX.Element {
  const dispatch = useAppDispatch();
  const status = useAppSelector(selectLoginStatus);
  const isOffersListLoading = useAppSelector(selectOffersLoadingStatus);
  const errorConnectionStatus = useAppSelector(selectErrorConnectionOffers);
  const isLoadingLogout = useAppSelector(selectLoadingLogout);
  const isFavoriteOffersLoading = useAppSelector(selectFavoriteOffersLoading);

  useEffect(() => {
    dispatch(fetchOffers())
      .unwrap()
      .then(() => {
        dispatch(setErrorConnectionStatusOffers(false));
        dispatch(checkAuthStatus())
          .then((response) => {
            if (response.meta.requestStatus === 'fulfilled') {
              dispatch(fetchFavoriteOffers());
            }
          });
      })
      .catch(() => {
        dispatch(setErrorConnectionStatusOffers(true));
      });
  }, [dispatch]);

  if (errorConnectionStatus) {
    return (
      <HelmetProvider>
        <BrowserRouter>
          <ScrollToTop />
          <ErrorConnection mainPage />;
        </BrowserRouter>
      </HelmetProvider>
    );
  }

  return (
    <HelmetProvider>
      <BrowserRouter>
        <ScrollToTop />
        {isOffersListLoading || isFavoriteOffersLoading || isLoadingLogout || status === LoginStatus.Unknown ? <LoadingPage loginStatus={status} /> :
          <Routes>
            <Route path={RoutePath.Index}>
              <Route index element={<MainPage loginStatus={status} />}></Route>
              <Route path={RoutePath.Login} element={
                <PrivateRoute isLogin >
                  <LoginPage />
                </PrivateRoute>
              }
              />
              <Route path={RoutePath.Favorites} element={
                <PrivateRoute >
                  <FavoritesPage loginStatus={status} />
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
