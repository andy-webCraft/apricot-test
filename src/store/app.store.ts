import { makeAutoObservable } from "mobx";

class AppStore {
  isLogin: boolean = false;
  isRequesting: boolean = false;
  userEmail: string | null = null;
  errors: Array<string> = [];

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Метод переключения флага авторизации пользователя
   * @param value - значение флага
   */
  isLoginToggle(value: boolean) {
    this.isLogin = value;
  }
  /**
   * Метод переключения флага запроса
   * @param value - значение флага
   */
  isRequestingToggle(value: boolean) {
    this.isRequesting = value;
  }
  /**
   * Метод установки email текущего пользователя
   * @param userEmail - email пользователя, либо `null` при отсутсвии
   */
  setUserEmail(userEmail: string | null) {
    this.userEmail = userEmail;
  }
  /**
   * Метод добавления ошибки
   * @param value - текст ошибки
   */
  addError(value: string) {
    this.errors.push(value);
  }
  /** Метод удаления первой ошибки в очереди */
  deleteFirstError() {
    this.errors.shift();
  }
}

export default new AppStore();
