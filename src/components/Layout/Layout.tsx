import React, { FC, PropsWithChildren } from "react";
import { observer } from "mobx-react-lite";
import appStore from "../../store/app.store";

import Header from "../UI/Header/Header";
import Loader from "../UI/Loader/Loader";
import ErrorBar from "../UI/ErrorBar/ErrorBar";

import s from "./Layout.module.sass";

/**
 * Основной слой приложения
 * - cодержит `Header` и `ErrorBar`
 * - отображает `Loader` во время запросов
 */
const Layout: FC<PropsWithChildren> = observer(({ children }) => {
  return (
    <div className={s.wrapper}>
      <Header />

      {appStore.isRequesting && <Loader />}

      <main className={s.content}>{children}</main>

      <ErrorBar />
    </div>
  );
});

export default Layout;
