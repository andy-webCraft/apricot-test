import React, { FC, PropsWithChildren } from "react";
import { useBodyLock } from "../../hooks";

import s from "./Modal.module.sass";

interface ModalProps extends PropsWithChildren {
  /** Функция обратного вызова закрытия окна */
  closeCallback: () => any;
}

/**
 * Компонент модального окна
 * - блокирует прокрутку страницы при монтировании
 */
const Modal: FC<ModalProps> = ({ closeCallback, children }) => {
  useBodyLock();

  const stopPropagation = (e: React.MouseEvent<HTMLDivElement>) => {
    e.stopPropagation();
  };

  return (
    <div className="_layout" onClick={closeCallback}>
      <div className={s.body} onClick={stopPropagation}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
