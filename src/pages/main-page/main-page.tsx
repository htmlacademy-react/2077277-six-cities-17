import Header from '../../components/header/header';
import CitiesList from '../../components/cities-list/cities-list';
import Main from '../../components/main/main';
import MainEmpty from '../../components/main-empty/main-empty';

type MainPageProps = {
  cardsNumber: number;
}

function MainPage({ cardsNumber }: MainPageProps): JSX.Element {
  return (
    <div className="page page--gray page--main">

      <Header isMainPage isLoggedIn/>
      <CitiesList />

      <main className={`page__main page__main--index ${!cardsNumber ? 'page__main--index-empty' : ''}`}>
        <h1 className="visually-hidden">Cities</h1>
        <div className="cities">

          {!cardsNumber ? <MainEmpty /> : <Main cardsNumber={cardsNumber} />}

        </div>
      </main>
    </div>
  );
}

export default MainPage;
