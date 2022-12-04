import React, { FC, useEffect } from "react";
import { observer } from "mobx-react-lite";
import appStore from "../../../store/app.store";

import s from "./ErrorBar.module.sass";

/** Компонент панели ошибок
 * - отображает текущие ошибки
 * - удаляет ошибку по истечении 3 сек.
 */
const ErrorBar: FC = observer(() => {
  useEffect(() => {
    if (!appStore.errors.length) return;

    setTimeout(() => {
      appStore.deleteFirstError();
    }, 3000);
  }, [appStore.errors.length]);

  return (
    <ul className={s.wrapper}>
      {appStore.errors.map((error, index) => (
        <li className={s.error} key={index}>
          {error}
        </li>
      ))}
    </ul>
  );
});

export default ErrorBar;
