import React, {useState} from "react";
import * as RS from "reactstrap";
import firebase from "firebase";
import { useHistory } from "react-router";
import styles from "../style/register.module.scss"

const auth = firebase.auth;

const Register = () => {
  const history = useHistory();
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");

  const onSubmit = async (e) => {
    e.preventDefault();

    let credential = auth.EmailAuthProvider.credential(mail, password);
    await auth().currentUser.linkWithCredential(credential);
    window.location.reload(true)
  }

  return (
    <div className={styles.register}>
      <RS.Card className={styles.card}>
        <h2>Register</h2>
        <RS.Form onSubmit={onSubmit}>
          <RS.FormGroup>
            <RS.Label>Email:</RS.Label>
            <RS.Input type="email"
                      placeholder="Mail..."
                      value={mail}
                      onChange={e => setMail(e.target.value)} />
          </RS.FormGroup>
          <RS.FormGroup>
            <RS.Label>Mot de passe:</RS.Label>
            <RS.Input type="password"
                      placeholder="Mot de passe..."
                      value={password}
                      onChange={e => setPassword(e.target.value)} />
          </RS.FormGroup>
          <RS.FormGroup>
            <RS.Label>Confirmer:</RS.Label>
            <RS.Input type="password"
                      placeholder="Confirmer..."
                      value={confirm}
                      onChange={e => setConfirm(e.target.value)} />
          </RS.FormGroup>
          <RS.FormGroup className={styles.actionContainer}>
            <RS.Button color="primary" type="submit">Valider</RS.Button>
          </RS.FormGroup>
        </RS.Form>
      </RS.Card>
    </div>
  )
}

export default Register;