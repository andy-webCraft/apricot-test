import React, { FC } from "react";
import s from "./Loader.module.sass";

/** Компонент отображения загрузки */
const Loader: FC = () => {
  return (
    <div className="_layout">
      <div className={s.ellipsis}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  );
};

export default Loader;
