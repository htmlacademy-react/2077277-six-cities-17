import MainPage from '../../pages/main-page/main-page';

type AppProps = {
  cardsNumber: number;
}

function App({ cardsNumber }: AppProps): JSX.Element {
  return (
    <MainPage cardsNumber={cardsNumber} />
  );
}

export default App;
