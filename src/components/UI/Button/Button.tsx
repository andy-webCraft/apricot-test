import React, { FC, PropsWithChildren } from "react";
import s from "./Button.module.sass";

interface ButtonProps extends PropsWithChildren {
  /** Вариант стилизации */
  variant?: "fill" | "text";
  /** HTML тип кнопки */
  type?: "button" | "reset" | "submit";
  /** Функция обратного вызова нажатия кнопки */
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  /** Условие отключения кнопки */
  disabled?: boolean;
}

/** Компонент кнопки */
const Button: FC<ButtonProps> = ({
  variant = "fill",
  type,
  onClick,
  disabled,
  children,
}) => {
  const classes = `${s.btn} ${s[variant]}`;

  return (
    <button className={classes} type={type} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;
