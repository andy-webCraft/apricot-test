import React, { FC } from "react";
import s from "./RadioBtn.module.sass";

type RadioBtnProps = {
  /** Заголовок переключателя */
  label: string;
  /** Имя переключателя */
  name: string;
  /** Значение переключателя */
  value: string;
  /** Значение состояния */
  checked: boolean;
  /** Функция обратного вызова сменя состояния */
  onChange: (value: string) => any;
};

/** Компонент кнопки-переключателя */
const RadioBtn: FC<RadioBtnProps> = ({ label, value, checked, onChange }) => {
  const labelClasses = checked ? `${s.label} ${s.check}` : s.label;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onChange(value);
  };

  return (
    <label className={labelClasses}>
      {label}
      <input
        type="radio"
        name="todo-filter"
        value={value}
        checked={checked}
        onChange={handleChange}
        hidden
      />
    </label>
  );
};

export default RadioBtn;
