import React from "react";
import "./style.scss";

function Item({ header, img, children }) {
  return (
    <div className="tile">
      <div className="tile-content">
        <header className="tile-head">
          <strong className="tile-headline">{header}</strong>
        </header>
        <div className="tile-body">
          <div className="tile-image">
            <img src={img} alt="" loading="lazy" />
          </div>
          <div className="tile-text">{children}</div>
        </div>
      </div>
    </div>
  );
}
function Items({ children }) {
  return <div className="tiles">{children}</div>;
}

Items.Item = Item;

export default Items;
