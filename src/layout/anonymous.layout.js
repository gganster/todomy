import React, {useState} from "react";
import * as RS from "reactstrap";
import { useHistory } from "react-router";
import styles from "../style/layout.module.scss";

const Layout = ({children}) => {
  const history = useHistory();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <RS.Navbar color="light" expand="md">
        <RS.NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <RS.Collapse isOpen={isOpen} navbar>
          <RS.Nav navbar>
            <RS.NavItem>
              <RS.NavLink onClick={() => {history.push("/")}}>Home</RS.NavLink>
            </RS.NavItem>
            <RS.NavItem>
              <RS.NavLink onClick={() => {history.push("/login")}}>Login</RS.NavLink>
            </RS.NavItem>
            <RS.NavItem>
              <RS.NavLink onClick={() => {history.push("/register")}}>Register</RS.NavLink>
            </RS.NavItem>
          </RS.Nav>
        </RS.Collapse>
      </RS.Navbar>
      <div className={styles.body}>
        {children}
      </div>
    </div>
  )
}

export default Layout;