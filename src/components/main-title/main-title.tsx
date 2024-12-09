type MainTitleProps = {
  citiesCount: number;
}

function MainTitle({citiesCount}: MainTitleProps): JSX.Element {
  return (
    <b className="places__found">{citiesCount} places to stay in Amsterdam</b>
  );
}

export default MainTitle;
