import { makeAutoObservable } from "mobx";
import { ITodo } from "../types/index.types";

class TodoStore {
  todos: Array<ITodo> = [];

  constructor() {
    makeAutoObservable(this);
  }

  /**
   * Метод установки списка задач
   * @param todos - список задач
   */
  setTodos(todos: Array<ITodo>) {
    this.todos = todos;
  }
  /**
   * Метод добавления новой задачи
   * @param todo - объект задачи
   */
  addTodo(todo: ITodo) {
    this.todos.push(todo);
  }
  /**
   * Метод переключения статуса задачи
   * @param todoId - идентификатор задачи
   * @param value - статус задачи
   */
  isCompletedToggle(todoId: string, value: boolean) {
    this.todos = this.todos.map((item) => {
      if (item.id === todoId) item.isCompleted = value;
      return item;
    });
  }
  /**
   * Метод удаления задачи
   * @param todoId - идентификатор задачи
   */
  deleteTodo(todoId: string) {
    this.todos = this.todos.filter((todo) => todo.id !== todoId);
  }
}

export default new TodoStore();
