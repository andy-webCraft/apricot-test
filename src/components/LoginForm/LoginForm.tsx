import React, { FC, useState } from "react";

import InputField from "../UI/InputField/InputField";
import Button from "../UI/Button/Button";

import s from "./LoginForm.module.sass";

type LoginFormProps = {
  /** Функция обратного вызова отправки формы */
  submitCallback: (email: string, password: string) => any;
};

/** Компонент формы авторизации */
const LoginForm: FC<LoginFormProps> = ({ submitCallback }) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    submitCallback(email, password);
  };

  const handleHack = () => {
    setEmail("admin@todolist.com");
    setPassword("bestPass");
  };

  return (
    <form className={s.wrapper} onSubmit={handleSubmit}>
      <InputField
        type="email"
        name="email"
        label="Your email"
        value={email}
        onChange={handleEmailChange}
      />

      <InputField
        type="password"
        name="password"
        label="Your password"
        value={password}
        onChange={handlePasswordChange}
      />

      <Button type="submit" disabled={!email || !password}>
        Login
      </Button>

      <Button variant="text" type="button" onClick={handleHack}>
        set admin data(hacker feature)
      </Button>
    </form>
  );
};

export default LoginForm;
