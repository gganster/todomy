import React, {useState} from "react";
import * as RS from "reactstrap";
import firebase from "firebase";
import {useUser} from "../context";
import styles from "../style/todoListItem.module.scss";

const firestore = firebase.firestore();

const TodoListItem = ({data}) => {
  const [user] = useUser();
  const [loading, setLoading] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [title, setTitle] = useState("");

  const onEdit = () => {
    setTitle(data.title);
    setIsEditing(true);
  }
  const onUpdate = async () => {
    setLoading(true);
    await firestore.collection("users/").doc(user.uid)
                   .collection("todos").doc(data.uid).update({title});
    setIsEditing(false);
    setLoading(false);
  }
  const onDelete = async () => {
    setLoading(true);
    await firestore.collection("users/").doc(user.uid)
                   .collection("todos/").doc(data.uid).delete();
    setLoading(false);
  }

  return (
    <div className={styles.container}>
      {isEditing ?
        <RS.Input type="text"
                  className={styles.todoTitleEdit}
                  value={title}
                  onChange={e => setTitle(e.target.value)}
                  onKeyDown={e => {if (e.key === "Enter") onUpdate()}} />
      : 
        <p className={styles.todoTitle}>{data.title}</p>
      }
      <div className={styles.todoActions}>
        { isEditing ?
          <RS.Button color="primary" onClick={onUpdate}>validate</RS.Button>
        :
          <RS.Button color="primary" onClick={onEdit}>edit</RS.Button>
        }
        <RS.Button color="danger" onClick={onDelete}>delete</RS.Button>
      </div>
    </div>
  )
};

export default TodoListItem;