import React, {useState} from "react";
import { useHistory } from "react-router";
import * as RS from "reactstrap";
import firebase from "firebase";
import styles from "../style/layout.module.scss";

const auth = firebase.auth;

const Layout = ({children}) => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  const logout = async () => {
    auth().signOut();
  }

  return (
    <div className={styles.layout}>
      <RS.Navbar color="light" expand="md">
        <RS.NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <RS.Collapse isOpen={isOpen} navbar>
          <RS.Nav navbar>
            <RS.NavItem>
              <RS.NavLink onClick={() => history.push("/")}>Home</RS.NavLink>
            </RS.NavItem>
            <RS.NavItem>
              <RS.NavLink onClick={() => history.push("/profile")}>Profile</RS.NavLink>
            </RS.NavItem>
            <RS.NavItem>
              <RS.NavLink onClick={logout}>Logout</RS.NavLink>
            </RS.NavItem>
          </RS.Nav>
        </RS.Collapse>
      </RS.Navbar>
      {children}
    </div>
  )
}

export default Layout;