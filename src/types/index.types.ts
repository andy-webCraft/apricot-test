/** Перечисление фильтров */
export enum todoFilters {
  all = "all",
  done = "done",
  undone = "undone",
}

/** Тип фильтров задач */
export type TodoFiltersType = keyof typeof todoFilters;

/** Тип статуса задач */
export type TodoStatusType = "done" | "undone";

/** Тип объекта задачи */
export type ITodo = {
  id: string;
  title: string;
  description: string;
  isCompleted: boolean;
};

/** Тип ответа авторизации */
export type AuthResponseType = {
  accessToken: string;
  user: { email: string };
};
