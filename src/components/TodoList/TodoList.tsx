import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import todoStore from "../../store/todo.store";

import Todo from "../Todo/Todo";

import s from "./TodoList.module.sass";

/** Компонент списка задач */
const TodoList: FC = observer(() => {
  return (
    <ul className={s.wrapper}>
      {todoStore.todos.length ? (
        todoStore.todos.map((todo) => <Todo key={todo.id} todo={todo} />)
      ) : (
        <p className={s.empty}>yippee, there are no tasks!</p>
      )}
    </ul>
  );
});

export default TodoList;
