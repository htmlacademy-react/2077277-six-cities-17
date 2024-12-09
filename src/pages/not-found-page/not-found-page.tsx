import Header from '../../components/header/header';
import { Link } from 'react-router-dom';
import { RoutePath, PageType } from '../../const';
import { LoginStatusList } from '../../type';
import styles from './style.module.css';
import { Helmet } from 'react-helmet-async';

type NotFoundPageProps = {
  loginStatus: LoginStatusList;
}

function NotFoundPage({ loginStatus }: NotFoundPageProps): JSX.Element {

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities: {PageType.NotFound}</title>
      </Helmet>

      <Header loginStatus={loginStatus} />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">404 Not Found</h1>
        <div className={styles.container}>
          <img src="/public/img/icon-404-error.png" alt="404" width={412} height={412} />
          <p className={styles.text}> Not Found</p>
          <Link to={RoutePath.Index} className={styles.link}>Return to main page</Link>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
