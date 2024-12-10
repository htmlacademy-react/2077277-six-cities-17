type MainTitleProps = {
  citiesCount: number;
}

function MainTitle({citiesCount}: MainTitleProps): JSX.Element {
  return (
    <b className="places__found">{citiesCount} place{citiesCount > 1 ? 's' : ''} to stay in Amsterdam</b>
  );
}

export default MainTitle;
