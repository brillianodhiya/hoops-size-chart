import { Button } from "antd";
import React from "react";

const BrandMenu = (props) => {
  const [hover, setHover] = React.useState(false);
  const [hover2, setHover2] = React.useState(false);
  const [hover3, setHover3] = React.useState(false);

  const handleMouseOver = () => {
    setHover(true);
  };

  const handleMouseLeave = () => {
    setHover(false);
  };

  const handleMouseOver2 = () => {
    setHover2(true);
  };

  const handleMouseLeave2 = () => {
    setHover2(false);
  };

  const handleMouseOver3 = () => {
    setHover3(true);
  };

  const handleMouseLeave3 = () => {
    setHover3(false);
  };

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div
        style={{ borderBottom: hover ? "2px solid #e08a6a" : "none" }}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <Button onClick={props.onClickNike} type="text">
          Nike
        </Button>
      </div>
      <div
        style={{ borderBottom: hover2 ? "2px solid #e08a6a" : "none" }}
        onMouseOver={handleMouseOver2}
        onMouseLeave={handleMouseLeave2}
      >
        <Button onClick={props.onClickAdidas} type="text">
          Adidas
        </Button>
      </div>
      <div
        style={{ borderBottom: hover3 ? "2px solid #e08a6a" : "none" }}
        onMouseOver={handleMouseOver3}
        onMouseLeave={handleMouseLeave3}
      >
        <Button onClick={props.onClickPuma} type="text">
          Puma
        </Button>
      </div>
    </div>
  );
};

export default BrandMenu;
