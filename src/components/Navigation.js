import React from "react";
import { Navbar, Nav, OverlayTrigger, Tooltip } from "react-bootstrap";
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
        sticked="bottom"
        className="justify-content-center"
        style={{ height: "9vh", backgroundColor: "#181818", marginBottom: "0" }}
      >
        <Nav>
          <Nav.Item>
            <OverlayTrigger overlay={<Tooltip>Home</Tooltip>}>
              <Nav.Link href="/">
                <HouseFill size={30} color="#00ffff" />
              </Nav.Link>
            </OverlayTrigger>
          </Nav.Item>
          <Nav.Item>
            <OverlayTrigger overlay={<Tooltip>About me</Tooltip>}>
              <Nav.Link href="/about">
                <PersonCircle size={30} color="#00ffff" />
              </Nav.Link>
            </OverlayTrigger>
          </Nav.Item>
          <Nav.Item>
            <OverlayTrigger overlay={<Tooltip>Skills</Tooltip>}>
              <Nav.Link href="/skill">
                <GearWideConnected size={30} color="#00ffff" />
              </Nav.Link>
            </OverlayTrigger>
          </Nav.Item>
          <Nav.Item>
            <OverlayTrigger overlay={<Tooltip>Projects</Tooltip>}>
              <Nav.Link href="/project">
                <Box size={30} color="#00ffff" />
              </Nav.Link>
            </OverlayTrigger>
          </Nav.Item>
          <Nav.Item>
            <OverlayTrigger overlay={<Tooltip>Contact me</Tooltip>}>
              <Nav.Link href="/contact">
                <PersonLinesFill size={30} color="#00ffff"></PersonLinesFill>
              </Nav.Link>
            </OverlayTrigger>
          </Nav.Item>
        </Nav>
      </Navbar>
    </div>
  );
}

export default Navigation;
