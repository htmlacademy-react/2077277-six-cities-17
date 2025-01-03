import { store } from '../store';
import { setError } from '../store/action';
import { clearError } from '../store/api-action';

const processErrorHandle = (message: string): void => {
  store.dispatch(setError(message));
  store.dispatch(clearError());
};

export { processErrorHandle };
