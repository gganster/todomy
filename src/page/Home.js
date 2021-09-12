import React, {useEffect, useState} from "react";
import styles from "../style/home.module.scss";

import {
  TodoList,
  TodoListAdd
} from "../component";

import {useTodos, useTodosSnapshot, useTodo, useTodoSnapshot} from "../hook";

const Home = () => {
  return (
    <div className={styles.home}>
      <TodoListAdd />
      <TodoList />
    </div>
  )
}

export default Home;