import { Link } from 'react-router-dom';
import styles from './style.module.css';
import { RoutePath } from '../../const';

type ErrorConnectionProps = {
  mainPage?: boolean;
}

function ErrorConnection({mainPage = false}:ErrorConnectionProps): JSX.Element | null {
  return (
    <main className={`page__main ${styles.error}`}>
      <div className={`cities ${styles.wrapper}`}>
        <div className="cities__places-container cities__places-container--empty container">
          <section className="cities__no-places">
            <div className="cities__status-wrapper tabs__content">
              <b className="cities__status">Server error</b>
              <p className="cities__status-description">We could not find available property at the moment.<br/> Please try again later.</p>
              {mainPage ? '' : <Link to={RoutePath.Index} className={styles.link}>Return to main page</Link>}
            </div>
          </section>
          <div className="cities__right-section"></div>
        </div>
      </div>
    </main>
  );
}

export default ErrorConnection;
