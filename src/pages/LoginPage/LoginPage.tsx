import React, { FC } from "react";
import { api } from "../../api/index.api";
import appStore from "../../store/app.store";

import LoginForm from "../../components/LoginForm/LoginForm";

import { fetchWrapper } from "../../helpers";
import { AuthResponseType } from "../../types/index.types";
import s from "./LoginPage.module.sass";

/** Страница авторизации пользователя. Реализует функционал:
 * - авторизации пользователя
 */
const LoginPage: FC = () => {
  const handleLogin = async (email: string, password: string) => {
    await fetchWrapper<AuthResponseType>(api.login(email, password)).then((response) => {
      appStore.isLoginToggle(true);
      appStore.setUserEmail(response.user.email);
    });
  };

  return (
    <section className={s.section}>
      <h2 className="_section-title">Login Page</h2>

      <LoginForm submitCallback={handleLogin} />
    </section>
  );
};

export default LoginPage;
