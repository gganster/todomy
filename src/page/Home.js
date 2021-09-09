import React, {useState} from "react";
import * as RS from "reactstrap";
import styles from "../style/home.module.scss";

import {
  TodoList,
  TodoListAdd
} from "../component";

const Home = () => {
  return (
    <div className={styles.home}>
      <TodoListAdd />
      <TodoList />
    </div>
  )
}

export default Home;