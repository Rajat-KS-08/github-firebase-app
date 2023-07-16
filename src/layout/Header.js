import React, { useContext, useState } from "react";
import {
  Collapse,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from "reactstrap";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";

const Header = () => {
  const ctx = useContext(UserContext);
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  return (
    <Navbar color="info" light expand="md">
      <NavbarBrand>
        <Link to="/" className="text-white">
          Gitty App
        </Link>
      </NavbarBrand>
      <NavbarText className="text-white">
        {ctx.user?.email ? ctx.user.email : ""}
      </NavbarText>
      <NavbarToggler onClick={toggle} />
      <Collapse isOpen={isOpen} navbar>
        <Nav className="ml-auto" navbar>
          {ctx.user ? (
            <NavItem>
              <NavLink tag={Link} to="/" className="text-white">
                Logout
              </NavLink>
            </NavItem>
          ) : (
            <React.Fragment>
              <NavItem>
                <NavLink onClick={() => {ctx.setUser(null)}} tag={Link} to="/signin" className="text-white">
                  Sign IN
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink tag={Link} to="/signup" className="text-white">
                  Sign UP
                </NavLink>
              </NavItem>
            </React.Fragment>
          )}
        </Nav>
      </Collapse>
    </Navbar>
  );
};

export default Header;
