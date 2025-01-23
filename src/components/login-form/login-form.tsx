import { FormEvent, useRef } from 'react';
import { loginAction } from '../../store/api-action';
import { useAppDispatch } from '../../hooks';
import { useNavigate } from 'react-router-dom';
import { RoutePath } from '../../const';
import { useSelector } from 'react-redux';
import { isLoadingLogin } from '../../store/user/user-selectors';

function LoginForm(): JSX.Element {
  const emailRef = useRef<HTMLInputElement | null>(null);
  const passwordRef = useRef<HTMLInputElement | null>(null);

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const LoadingLoginStatus = useSelector(isLoadingLogin);

  const handleSubmitLoginForm = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    if (emailRef.current && passwordRef.current) {
      dispatch(loginAction({
        login: emailRef.current.value,
        password: passwordRef.current.value
      }))
        .then((response) => {
          if (response.meta.requestStatus === 'fulfilled') {
            navigate(RoutePath.Index);
          }
        });
    }
  };

  return (
    <form className="login__form form" action="#" method="post" onSubmit={handleSubmitLoginForm}>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">E-mail</label>
        <input className="login__input form__input" type="email" name="email" placeholder="Email" ref={emailRef} required disabled={LoadingLoginStatus}/>
      </div>
      <div className="login__input-wrapper form__input-wrapper">
        <label className="visually-hidden">Password</label>
        <input className="login__input form__input" type="password" name="password" placeholder="Password" pattern="^.*(?=.*[a-zA-Z])(?=.*\d).*$" title="Пароль должен содержать как минимум 1 букву и 1 цифру" ref={passwordRef} required disabled={LoadingLoginStatus}/>
      </div>
      <button className="login__submit form__submit button" type="submit" disabled={LoadingLoginStatus}>Sign in</button>
    </form>
  );
}

export default LoginForm;
