import React, {useState, useEffect} from "react";
import * as RS from "reactstrap";
import firebase from "firebase";
import { useHistory } from "react-router";
import {useUser} from "../context";
import styles from "../style/login.module.scss";

const Page = () => {
  const history = useHistory();
  const [user] = useUser();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await firebase.auth().signInWithEmailAndPassword(mail, password);
    } catch (e) {
      console.error(e);
    }
  }

  useEffect(() => {
    if (user.isAnonymous === false)
      history.push("/home");
  }, [user, history]);

  return (
    <div className={styles.login}>
      <RS.Card className={styles.card}>
        <h2>Login</h2>
        <RS.Form onSubmit={onSubmit}>
          <RS.FormGroup>
            <RS.Label>Email:</RS.Label>
            <RS.Input type="email"
                      placeholder="Mail ..."
                      value={mail}
                      onChange={e => setMail(e.target.value)} />
          </RS.FormGroup>
          <RS.FormGroup>
            <RS.Label>Mot de passe</RS.Label>
            <RS.Input type="password"
                      placeholder="Mot de passe ..."
                      value={password}
                      onChange={e => setPassword(e.target.value)} />
          </RS.FormGroup>
          <RS.FormGroup className={styles.actionContainer}>
            <RS.Button color="primary" type="submit">Valider</RS.Button>
          </RS.FormGroup>
        </RS.Form>
      </RS.Card>
    </div>
  )
}

export default Page;