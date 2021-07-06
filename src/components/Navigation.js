import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import {
  Box,
  GearWideConnected,
  HouseFill,
  PersonCircle,
  PersonLinesFill,
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
            <Nav.Link href="/">
              <HouseFill size={30} color="#00ffff" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/about">
              <PersonCircle size={30} color="#00ffff" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/skill">
              <GearWideConnected size={30} color="#00ffff" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/project">
              <Box size={30} color="#00ffff" />
            </Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="/contact">
              <PersonLinesFill size={30} color="#00ffff"></PersonLinesFill>
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navigation;
