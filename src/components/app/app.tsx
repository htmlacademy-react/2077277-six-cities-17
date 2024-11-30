import { BrowserRouter, Routes, Route } from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import OfferPage from '../../pages/offer-page/offer-page';
import LoginPage from '../../pages/login-page/login-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import NotFoundPage from '../../pages/not-found-page/not-found-page';
import PrivateRoute from '../private-route/private-route';
import { LoginStatus, RoutePath } from '../../const';

type AppProps = {
  cardsNumber: number;
}

function App({ cardsNumber }: AppProps): JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={RoutePath.Index}>
          <Route index element={<MainPage cardsNumber={cardsNumber}/>}></Route>
          <Route path={RoutePath.Login} element={<LoginPage/>}></Route>
          <Route path={RoutePath.Favorites} element={
            <PrivateRoute loginStatus={LoginStatus.NoAuth}>
              <FavoritesPage />
            </PrivateRoute>
          }
          />
          <Route path={RoutePath.Offer} element={<OfferPage />}></Route>
          <Route path={RoutePath.NotFound} element={<NotFoundPage />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
