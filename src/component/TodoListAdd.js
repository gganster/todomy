import React, {useState} from "react";
import * as RS from "reactstrap";
import firebase from "firebase";
import {useUser} from "../context";
import styles from "../style/todoListAdd.module.scss";

const firestore = firebase.firestore();

const TodoListAdd = () => {
  const [, setLoading] = useState(false);
  const [title, setTitle] = useState("");
  const [user] = useUser();

  const addTodo = async () => {
    if (!title) return;
    setLoading(true);
    firestore.collection("users/")
             .doc(user.uid)
             .collection("todos/")
             .add({
               title: title,
               createdAt: new Date()
             })
    setTitle("");
    setLoading(false);
  }

  return (
    <RS.Card className={styles.container}>
      <RS.Input type="text"
                placeholder="Todo..."
                onChange={e => setTitle(e.target.value)}
                value={title}
                onKeyDown={(e) => {if (e.key === "Enter") addTodo()}} />
      <RS.Button color="primary" onClick={addTodo}>+</RS.Button>
    </RS.Card>
  )
}
export default TodoListAdd;