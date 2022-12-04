import React, { FC } from "react";
import { api } from "../../api/index.api";
import { fetchWrapper } from "../../helpers";
import todoStore from "../../store/todo.store";

import Button from "../UI/Button/Button";
import CheckBox from "../UI/CheckBox/CheckBox";

import { ReactComponent as DeleteSvg } from "../../assets/trash-solid.svg";
import { ITodo } from "../../types/index.types";
import s from "./Todo.module.sass";

type TodoProps = {
  /** Объект задачи */
  todo: ITodo;
};

/**
 * Компонент задачи. Реализует функционал:
 * - переключение статуса задачи
 * - удаление задачи
 */
const Todo: FC<TodoProps> = ({ todo }) => {
  const { id, title, description, isCompleted } = todo;

  const handleCompletedToggle = async (value: boolean) => {
    const newStatus = value ? "done" : "undone";

    await fetchWrapper(api.completedTodoToggle(id, newStatus)).then(() => {
      todoStore.isCompletedToggle(id, value);
    });
  };

  const handleDelete = async () => {
    await fetchWrapper(api.deleteTodo(id)).then(() => {
      todoStore.deleteTodo(id);
    });
  };

  return (
    <li className={s.wrapper}>
      <CheckBox
        name={`todo-${id}-completed`}
        checked={isCompleted}
        onChange={handleCompletedToggle}
      />

      <div className={s.info}>
        <h3>Title: {title}</h3>
        {description && <p>Description: {description}</p>}
      </div>

      <Button variant="text" onClick={handleDelete}>
        <DeleteSvg width={20} height={20} fill="#979A9A" />
      </Button>
    </li>
  );
};

export default Todo;
