import { TodoFiltersType, TodoStatusType } from "../types/index.types";

const baseURL = "http://localhost:3001";
const headers = { "Content-Type": "application/json" };

export const api = {
  /**
   * Метод авторизации пользователя (POST request)
   * @param {string} email - email пользователя
   * @param {string} password - пароль пользователя
   */
  login(email: string, password: string) {
    return fetch(`${baseURL}/login`, {
      method: "POST",
      headers,
      body: JSON.stringify({ email, password }),
    });
  },
  /**
   * Метод получения списка задач (GET request)
   * @param {TodoFiltersType} filter - применяемый фильтр
   */
  getTodos(filter: TodoFiltersType) {
    return fetch(`${baseURL}/todos/get?filter=${filter}`, {
      method: "GET",
      headers,
    });
  },
  /**
   * Метод добавления новой задачи (POST request)
   * @param {string} title - заголовок задачи
   * @param {string} description - описание задачи
   */
  addTodo(title: string, description: string) {
    return fetch(`${baseURL}/todos/add`, {
      method: "POST",
      headers,
      body: JSON.stringify({ title, description }),
    });
  },
  /**
   * Метод переключения статуса задачи (GET request)
   * @param {string} todoId - идентификатор задачи
   * @param {TodoStatusType} status - статус задачи
   */
  completedTodoToggle(todoId: string, status: TodoStatusType) {
    return fetch(`${baseURL}/todos/${todoId}/${status}`, {
      method: "GET",
      headers,
    });
  },
  /**
   * Метод удаления задачи (POST request)
   * @param {string} todoId - идентификатор задачи
   */
  deleteTodo(todoId: string) {
    return fetch(`${baseURL}/todos/delete`, {
      method: "POST",
      headers,
      body: JSON.stringify({ todoId }),
    });
  },
};
