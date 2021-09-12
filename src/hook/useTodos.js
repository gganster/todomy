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
                                 .collection("todos/")
                                 .onSnapshot(snap => {
      const data = snap.docs.map(doc => ({uid: doc.id, ...doc.data()}));
      setData(data);
      setLoading(false);
    });
    return () => unsubscribe()
  }, [])

  return ([data, loading]);
}

const useTodosSnapshot = () => {
  const [user] = useUser();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      let newData = [];
      const res = await firestore.collection("users/")
                           .doc(user.uid)
                           .collection("todos/")
                           .get();
      res.forEach(doc => {
        newData.push({uid: doc.id, ...doc.data()});
      })
      setData(newData);
      setLoading(false);
    })()
  }, []);

  return ([data, loading]);
}

const useTodo = (uid) => {
  const [user] = useUser();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    const unsubscribe = firestore.collection("users")
                                  .doc(user.uid)
                                  .collection("todos/")
                                  .doc(uid)
                                  .onSnapshot({includeMetadataChanges: true}, (doc) => {
      if (doc.exists) {
        setData({uid: doc.id, ...doc.data()});
        setLoading(false);
      } else {
        setData(null);
        setLoading(false);
      }
    })
    return (unsubscribe);
  }, [])

  return ([data, loading]);
}

const useTodoSnapshot = (uid) => {
  const [user] = useUser();
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState(null);

  useEffect(() => {
    (async () => {
      const doc = await firestore.collection("users/")
                                 .doc(user.uid)
                                 .collection("todos/")
                                 .doc(uid)
                                 .get()
      if (doc.exists) {
        setData({uid: doc.id, ...doc.data()});
      }
      setLoading(false);
    })()
  }, [])
  return ([data, loading]);
}

export default useTodos;
export {
  useTodos,
  useTodosSnapshot,
  useTodo,
  useTodoSnapshot
};