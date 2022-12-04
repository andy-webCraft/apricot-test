import { useEffect } from "react";

/** Хук блокировки прокрутки страницы
 * - добавляет и удаляет класс `_lock` у `body` элемента
 */
export const useBodyLock = () => {
  useEffect(() => {
    document.body.classList.add("_lock");

    return () => {
      document.body.classList.remove("_lock");
    };
  }, []);
};
