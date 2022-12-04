import { db } from "./index.js";

/**
 * Обработчик запроса на получение списка задачи и фильтрации
 * @return Отфильтрованный список задач
 */
export const getTodosByFilter = (req, res) => {
  try {
    const filter = req.query.filter;
    const resource = db.get("todos").value();

    switch (filter) {
      case "all": {
        return res.json(resource);
      }
      case "done": {
        return res.json(resource.filter((item) => item.isCompleted));
      }
      case "undone": {
        return res.json(resource.filter((item) => !item.isCompleted));
      }

      default: {
        return res.status(400).json("incorrect filter");
      }
    }
  } catch (error) {
    res.status(500).json(error);
  }
};

/**
 * Обработчик добавления новой задачи
 * @return Объект новой задачи
 */
export const addNewTodo = (req, res) => {
  try {
    const { title, description } = req.body;
    const resource = db.get("todos").value();

    const newTodo = { id: Date.now().toString(), title, description, isCompleted: false };

    resource.push(newTodo);
    db.write();
    res.json(newTodo);
  } catch (error) {
    res.status(500).json(error);
  }
};

/**
 * Обработчик переключения статуса задачи
 * @returns `"success"`, в случае успешного выполнения
 */
export const setTodoStatus = (req, res) => {
  try {
    const todoId = req.params.todoId;
    const completeStatus = req.params.completeStatus;
    const resource = db.get("todos").value();
    const targetItem = resource.find((item) => item.id === todoId);

    switch (completeStatus) {
      case "done": {
        targetItem.isCompleted = true;
        break;
      }
      case "undone": {
        targetItem.isCompleted = false;
        break;
      }
      default:
        return res.status(400).json("incorrect status");
    }

    db.write();
    res.json("success");
  } catch (error) {
    res.status(500).json(error);
  }
};

/**
 * Обработчик удаления задачи
 * @returns `"success"`, в случае успешного выполнения
 */
export const deleteTodo = (req, res) => {
  try {
    const { todoId } = req.body;
    const resource = db.get("todos").value();
    const targetItem = resource.findIndex((item) => item.id === todoId);

    resource.splice(targetItem, 1);
    db.write();
    res.json("success");
  } catch (error) {
    res.status(500).json(error);
  }
};
