import Header from '../../components/header/header';
import { PageType } from '../../const';
import { LoginStatusList } from '../../type';
import styles from './style.module.css';
import { Helmet } from 'react-helmet-async';

type LoadingPageProps = {
  loginStatus: LoginStatusList;
}

function LoadingPage({ loginStatus }: LoadingPageProps): JSX.Element {

  return (
    <div className="page page--gray page--main">
      <Helmet>
        <title>6 cities: {PageType.Loading}</title>
      </Helmet>

      <Header loginStatus={loginStatus} />

      <main className="page__main page__main--index">
        <div className={styles.loader_wrapper}>
          <span className={styles.loader}></span>
        </div>
      </main>
    </div>
  );
}

export default LoadingPage;
