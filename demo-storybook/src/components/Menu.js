import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Menu = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">BookStore</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/components/">Books</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">User</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Transactions</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/components/">Cart</NavLink>
            </NavItem>
           
          </Nav>
      
        </Collapse>
      </Navbar> 
    </div>
  );
}

export default Menu;