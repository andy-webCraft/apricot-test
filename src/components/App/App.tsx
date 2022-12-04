import React, { FC } from "react";
import { observer } from "mobx-react-lite";
import appStore from "../../store/app.store";

import Layout from "../Layout/Layout";
import TodoListPage from "../../pages/TodoListPage/TodoListPage";
import LoginPage from "../../pages/LoginPage/LoginPage";

/** Корневой компонентн приложения */
const App: FC = observer(() => {
  return <Layout>{appStore.isLogin ? <TodoListPage /> : <LoginPage />}</Layout>;
});

export default App;
