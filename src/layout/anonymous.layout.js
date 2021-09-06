import React, {useState} from "react";
import * as RS from "reactstrap";

import styles from "../style/layout.module.scss";

const Layout = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.layout}>
      <RS.Navbar color="light" expand="md">
        <RS.NavbarToggler onClick={() => setIsOpen(!isOpen)} />
        <RS.Collapse isOpen={isOpen} navbar>
          <RS.Nav navbar>
            <RS.NavItem>
              <RS.NavLink onClick={() => {console.log("hello")}}>Home</RS.NavLink>
            </RS.NavItem>
            <RS.NavItem>
              <RS.NavLink onClick={() => {console.log("hello")}}>Login</RS.NavLink>
            </RS.NavItem>
            <RS.NavItem>
              <RS.NavLink onClick={() => {console.log("hello")}}>Register</RS.NavLink>
            </RS.NavItem>
          </RS.Nav>
        </RS.Collapse>
      </RS.Navbar>
    </div>
  )
}

export default Layout;