import { TOKEN_NAME } from '../const';
import { Token } from '../type';

const getToken = (): Token => localStorage.getItem(TOKEN_NAME) ?? '';

const saveToken = (token: Token): void => localStorage.setItem(TOKEN_NAME, token);

const dropToken = (): void => localStorage.removeItem(TOKEN_NAME);

export { getToken, saveToken, dropToken };
