import React, {useState, useEffect} from "react";
import firebase from "firebase";
import {sleep} from "../helper";
import {useUI} from "../context";

const auth = firebase.auth();
const firestore = firebase.firestore();

const useAuth = () => {
  const [, dispatch] = useUI();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const subscribe = auth.onAuthStateChanged(async (user) => {
      console.log(user);
      if (user) {//connect the user
        let counterLimit = 5; //5 attempts to connect
        let meta = await firestore.collection("users/")
                                  .doc(user.uid)
                                  .get();
        while ((!meta || !meta.exists) && counterLimit > 0) {
          await sleep(1000);
          meta = await firestore().collection("users")
                                  .doc(user.uid)
                                  .get();
          counterLimit--;
        }
        if (!meta.exists) {
          auth.signOut();
        }
      } else {//create anonymous account
        let usr = await auth.signInAnonymously();
        let payload = {
          createdAt: new Date(),
        }
        await firestore.collection("users/")
                       .doc(usr.user.uid)
                       .set(payload);
      }
      setLoading(false);
    })
    return (subscribe);
  }, [])

  return [null, loading];
}

export default useAuth;