import React, { FC } from "react";
import s from "./CheckBox.module.sass";

type CheckBoxProps = {
  /** Имя чекбокса */
  name: string;
  /** Значение состояния чекбокса */
  checked: boolean;
  /** Функция обратного вызова переключения состояния */
  onChange: (value: boolean) => any;
};

/** Компонент чекбокса */
const CheckBox: FC<CheckBoxProps> = ({ name, checked, onChange }) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(!checked);
  };

  return (
    <div className={s.wrapper}>
      <input
        className={s.input}
        type="checkbox"
        name={name}
        checked={checked}
        onChange={handleChange}
      />
      <label className={s.checkbox}></label>
    </div>
  );
};

export default CheckBox;
