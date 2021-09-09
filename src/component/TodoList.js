import React from "react";
import * as RS from "reactstrap";
import TodoListItem from "./TodoListItem";
import {useTodos} from "../hook";
import styles from "../style/todoList.module.scss";

const TodoList = () => {
  const [todos, loading] = useTodos();

  return (
    <RS.Card className={styles.container}>
      {loading ? 
        <RS.Spinner />
      : todos.length === 0 ?
        <p>no todos</p>
      :
        todos.map(i => <TodoListItem data={i} key={i.uid}/>)
      }
    </RS.Card>
  )
};

export default TodoList;