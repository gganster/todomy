import React, {useState, useEffect} from "react";
import firebase from "firebase";
import {sleep} from "../helper";
import {useUser} from "../context";

const auth = firebase.auth();
const firestore = firebase.firestore();

const useAuth = () => {
  const [, dispatch] = useUser();
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged(async (usr) => {
      if (usr) {//connect the user
        let counterLimit = 5; //5 attempts to connect
        let meta = await firestore.collection("users/")
                                  .doc(usr.uid)
                                  .get();
        while ((!meta || !meta.exists) && counterLimit > 0) {
          await sleep(1000);
          meta = await firestore().collection("users")
                                  .doc(usr.uid)
                                  .get();
          counterLimit--;
        }
        if (meta.exists) {
          dispatch({type: "login", user: Object.assign(usr, meta.data())});
          setUser(Object.assign(usr, meta.data()));
        } else {
          auth.signOut();
          dispatch({type: "logout"});
          setUser(false);
        }
      } else {//create anonymous account
        let res = await auth.signInAnonymously();
        let payload = {
          createdAt: new Date(),
        }
        await firestore.collection("users/")
                       .doc(res.user.uid)
                       .set(payload);
      }
      setLoading(false);
    })
    return (subscribe);
  }, [])

  return [user, loading];
}

export default useAuth;