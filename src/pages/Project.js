import React from "react";
import { Row } from "react-bootstrap";

import Title from "../components/Title";
// import Gallery from "../components/Gallery";
import Items from "../components/Items";
function Project() {
  return (
    <div className="common-container">
      <div style={{ textAlign: "center" }}>
        <Title>Projects</Title>
      </div>
      <Items>
        <Items.Item
          header="React Shopping Cart"
          img="https://user-images.githubusercontent.com/66517361/129296452-ea1f187c-d052-4fe5-8ab5-3a6712ece44d.png"
        >
          It provides the basic functions and user friendly interface for
          customers.
        </Items.Item>
        <Items.Item header="6-Eleven" img="images/6_eleven.png">
          Built with modern web frameworks, the project consists of key
          components of a commercial E-commerce website that aims to provide a
          rich user experience.
        </Items.Item>
      </Items>
    </div>
  );
}

export default Project;
