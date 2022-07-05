import React from "react";
import { Nav } from "react-bootstrap";

export default function Topnavbar() {
  return (
    <Nav className="justify-content-center" activeKey="/home">
      <Nav.Item>
        <Nav.Link className="heading1">NEWS</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="heading1">POPULAR</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="heading1">SAVED</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="heading1">LATEST</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link className="heading1">CONTACT</Nav.Link>
      </Nav.Item>
    </Nav>
  );
}
