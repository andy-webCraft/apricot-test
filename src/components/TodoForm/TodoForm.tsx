import React, { FC, useState } from "react";

import Button from "../UI/Button/Button";
import InputField from "../UI/InputField/InputField";

import s from "./TodoForm.module.sass";

type TodoFormProps = {
  /** Изначальное значение заголовка */
  initialTitle?: string;
  /** Изначальное значение описания */
  initialDescription?: string;
  /** Функция обратного вызова отправки формы */
  submitCallback: (title: string, description: string) => any;
};

/** Компонент формы задачи */
const TodoForm: FC<TodoFormProps> = ({
  initialTitle = "",
  initialDescription = "",
  submitCallback,
}) => {
  const [title, setTitle] = useState<string>(initialTitle);
  const [description, setDescription] = useState<string>(initialDescription);

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    submitCallback(title, description);
    setTitle("");
    setDescription("");
  };

  return (
    <form className={s.wrapper} onSubmit={handleSubmit}>
      <InputField
        type="text"
        name="title"
        label="Title"
        value={title}
        onChange={handleTitleChange}
      />

      <InputField
        type="text"
        name="description"
        label="Description"
        value={description}
        onChange={handleDescriptionChange}
      />

      <Button type="submit" disabled={!title}>
        Save
      </Button>
    </form>
  );
};

export default TodoForm;
