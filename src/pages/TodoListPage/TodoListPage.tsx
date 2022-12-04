import React, { FC, useState, useEffect } from "react";
import { api } from "../../api/index.api";
import todoStore from "../../store/todo.store";

import TodoFilter from "../../components/TodoFilter/TodoFilter";
import TodoForm from "../../components/TodoForm/TodoForm";
import TodoList from "../../components/TodoList/TodoList";
import Button from "../../components/UI/Button/Button";
import Modal from "../../components/Modal/Modal";

import { fetchWrapper } from "../../helpers";
import { ITodo, TodoFiltersType } from "../../types/index.types";
import s from "./TodoListPage.module.sass";

/** Страница списка задач. Реализует функционал:
 * - запроса списка задач
 * - отображения списка задач
 * - добавления новой задачи
 */
const TodoListPage: FC = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(false);

  useEffect(() => {
    handleGetTodos();
  }, []);

  const handleModalOpenToggle = () => {
    setModalOpen(!modalOpen);
  };

  const handleGetTodos = async (filter: TodoFiltersType = "all") => {
    await fetchWrapper<Array<ITodo>>(api.getTodos(filter)).then((response) => {
      todoStore.setTodos(response);
    });
  };

  const handleAddTodo = async (title: string, description: string) => {
    handleModalOpenToggle();

    await fetchWrapper<ITodo>(api.addTodo(title, description)).then((response) => {
      todoStore.addTodo(response);
      handleGetTodos();
    });
  };

  return (
    <section className={s.section}>
      <h2 className="_section-title">TodoList Page</h2>

      <div className={s.filters}>
        <TodoFilter onChange={handleGetTodos} />
      </div>

      <Button onClick={handleModalOpenToggle}>add new todo</Button>

      <div className={s.list}>
        <TodoList />
      </div>

      {modalOpen && (
        <Modal closeCallback={handleModalOpenToggle}>
          <TodoForm submitCallback={handleAddTodo} />
        </Modal>
      )}
    </section>
  );
};

export default TodoListPage;
