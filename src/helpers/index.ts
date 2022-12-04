import appStore from "../store/app.store";

/**
 * Функция-обёртка запросов
 * - переключает флаг `isRequesting` до и после запроса
 * - обрабатывает ошибку, в случае возникновения
 * - типизирует возвращаемое значение запроса
 * @param {Promise<Response>} apiFetch - Promise запроса
 * @returns Типизированный Promise ответа запроса, либо текст ошибки
 */
export const fetchWrapper = async <T = any>(apiFetch: Promise<Response>): Promise<T> => {
  appStore.isRequestingToggle(true);

  const response = await apiFetch;

  appStore.isRequestingToggle(false);

  if (response.ok) return response.json();
  else {
    const error: string = await response.json();

    appStore.addError(error);
    throw new Error(error);
  }
};
