import { Link } from 'react-router-dom';
import Header from '../../components/header/header';
import { RoutePath } from '../../const';

function NotFoundPage(): JSX.Element {
  const styles = {
    container: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      height: '100vh',
      backgroundColor: '#f8f8f8',
      color: '#333',
      textAlign: 'center',
      fontFamily: 'Arial, sans-serif',
    },
    heading: {
      fontSize: '72px',
      margin: '0',
    },
    subheading: {
      fontSize: '24px',
      margin: '10px 0',
    },
    link: {
      marginTop: '20px',
      fontSize: '18px',
      color: '#007BFF',
      textDecoration: 'none',
    },
  } as const;

  return (
    <div className="page page--gray page--main">

      <Header isLoginPage />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">404 Not Found</h1>
        <div style={styles.container}>
          <h1 style={styles.heading}>404</h1>
          <p style={styles.subheading}> Not Found</p>
          <Link to={RoutePath.Index} style={styles.link}>Return to main page</Link>
        </div>
      </main>
    </div>
  );
}

export default NotFoundPage;
