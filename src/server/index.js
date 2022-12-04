import jsonServer from "json-server";
import auth from "json-server-auth";
import path, { join } from "path";
import url from "url";
import { addNewTodo, deleteTodo, getTodosByFilter, setTodoStatus } from "./handlers.js";

/** Основные переменные */
const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const PORT = 3001;

const server = jsonServer.create();
const router = jsonServer.router(join(__dirname, "db.json"), { foreignKeySuffix: "_id" });
const middlewares = jsonServer.defaults();

server.use(jsonServer.bodyParser);

/** Заголовки ответа сервера */
server.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );

  setTimeout(next, 400);
});

/** Маршруты взаимодействия */
server.get("/todos/get?:filter", getTodosByFilter);
server.post("/todos/add", addNewTodo);
server.get("/todos/:todoId/:completeStatus", setTodoStatus);
server.post("/todos/delete", deleteTodo);

server.db = router.db;
export const db = router.db;

server.use(middlewares);
server.use(auth);
server.use(router);

server.listen(PORT, () => {
  console.log("JSON Server is running on port " + PORT);
});
