import styles from './style.module.css';
import { useAppSelector } from '../../hooks';
import { selectError } from '../../store/error/error-selectors';

function Error(): JSX.Element | null {
  const message = useAppSelector(selectError);

  return message ? (
    <div className={styles.error}>
      {message}
    </div>
  ) : null;
}

export default Error;
