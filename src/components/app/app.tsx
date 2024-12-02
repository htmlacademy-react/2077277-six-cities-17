import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import OfferPage from '../../pages/offer-page/offer-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { LoginStatus, RoutePath } from '../../const';
import { HelmetProvider } from 'react-helmet-async';

type AppProps = {
  cardsNumber: number;
}

function App({ cardsNumber }: AppProps): JSX.Element {
  const status = LoginStatus.Auth;

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path={RoutePath.Index}>
            <Route index element={<MainPage cardsNumber={cardsNumber} loginStatus={status} />}></Route>
            <Route path={RoutePath.Login} element={<LoginPage />}></Route>
            <Route path={RoutePath.Favorites} element={
              <PrivateRoute loginStatus={status} routePath={RoutePath.Login}>
                <FavoritesPage loginStatus={status} />
              </PrivateRoute>
            }
            />
            <Route path={RoutePath.Offer} element={<OfferPage loginStatus={status} />}></Route>
            <Route path={RoutePath.NotFound} element={<NotFoundPage loginStatus={status}/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
