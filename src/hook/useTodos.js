import React, {useState, useEffect} from "react";
import firebase from "firebase";
import {useUser} from "../context";
import { id } from "postcss-selector-parser";

const firestore = firebase.firestore();

const useTodos = () => {
  const [user] = useUser();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const unsubscribe = firestore.collection("users/")
                                 .doc(user.uid)
                                 .collection("todos")
                                 .onSnapshot(snap => {
      const data = snap.docs.map(doc => {return ({uid: doc.id, ...doc.data()})});
      setData(data);
      setLoading(false);
    });
    return () => unsubscribe()
  }, [])

  return ([data, loading]);
}

const useTodosSnapshot = () => {
  return ([null, null]);
}

const useTodo = () => {
  return ([null, null]);
}

const useTodoSnapshot = () => {
  return ([null, null]);
}

export default useTodos;
export {
  useTodos,
  useTodosSnapshot,
  useTodo,
  useTodoSnapshot
};