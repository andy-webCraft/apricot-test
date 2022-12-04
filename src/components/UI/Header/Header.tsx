import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import appStore from "../../../store/app.store";

import Button from "../Button/Button";

import { ReactComponent as LogoutSvg } from "../../../assets/right-from-bracket-solid.svg";
import s from "./Header.module.sass";

/** Компонент шапки страницы. Реализует функционал:
 * - выхода из системы
 */
const Header: FC = observer(() => {
  const handleLogout = () => {
    appStore.isLoginToggle(false);
  };

  return (
    <header className={s.wrapper}>
      <a className={s.logo} href="/">
        <h1>My Favorite TodoList</h1>
      </a>

      {appStore.isLogin && (
        <div className={s.account}>
          <span className={s.user}>{appStore.userEmail}</span>

          <Button variant="text" onClick={handleLogout}>
            <LogoutSvg width={26} height={26} fill="#fff" />
          </Button>
        </div>
      )}
    </header>
  );
});

export default Header;
