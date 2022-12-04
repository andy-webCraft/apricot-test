import React, { FC, useState } from "react";

import RadioBtn from "../UI/RadioBtn/RadioBtn";

import { todoFilters, TodoFiltersType } from "../../types/index.types";
import s from "./TodoFilter.module.sass";

/** Список фильтров */
const filters = [todoFilters.all, todoFilters.done, todoFilters.undone];

type TodoFilterProps = {
  /** Функция обратного вызова переключения фильтра */
  onChange: (filter: TodoFiltersType) => any;
};

/**
 * Компонент фильтров задач. Реализует функционал:
 * - переключение текущего фильтра
 */
const TodoFilter: FC<TodoFilterProps> = ({ onChange }) => {
  const [currentFilter, setCurrentFilter] = useState<TodoFiltersType>(todoFilters.all);

  const handleFilterChange = (value: string) => {
    const filter = value as TodoFiltersType;

    setCurrentFilter(filter);
    onChange(filter);
  };

  return (
    <ul className={s.wrapper}>
      {filters.map((filter) => (
        <li className={s.item} key={filter}>
          <RadioBtn
            name="todo-filter"
            label={filter}
            value={filter}
            checked={filter === currentFilter}
            onChange={handleFilterChange}
          />
        </li>
      ))}
    </ul>
  );
};

export default TodoFilter;
