import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {
  Box,
  GearWideConnected,
  HouseFill,
  PersonCircle,
} from "react-bootstrap-icons";

function Navigation() {
  return (
    <div>
      <Navbar
        bg="dark"
        variant="dark"
        fixed="bottom"
        className="justify-content-center"
      >
        <Nav>
          <Nav.Item>
            <Nav.Link href="#home">
              <HouseFill size={30} color="#00ffff" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#features">
              <PersonCircle size={30} color="#00ffff" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#pricing">
              <GearWideConnected size={30} color="#00ffff" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#project">
              <Box size={30} color="#00ffff" />
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navigation;
