import React, { FC, HTMLInputTypeAttribute } from "react";
import s from "./InputField.module.sass";

type InputFieldProps = {
  /** Заголовок поля */
  label?: string;
  /** HTML тип поля */
  type: HTMLInputTypeAttribute;
  /** Имя поля */
  name?: string;
  /** Значение поля */
  value: any;
  /** Функция обратного вызова изменения значения */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

/** Компонетн текстового поля ввода */
const InputField: FC<InputFieldProps> = ({ label, type, name, value, onChange }) => {
  return (
    <div className={s.field}>
      {label && <label className={s.label}>{label}</label>}
      <input
        className={s.input}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default InputField;
