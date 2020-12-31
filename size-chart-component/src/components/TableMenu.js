import React from "react";
import { Button } from "antd";

const TableMenu = (props) => {
  return (
    <>
      <div
        style={{
          width: "700px",
          display: "flex",
          justifyContent: "space-between",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "#3e3e3e",
        }}
      >
        <Button
          type="text"
          block
          style={{ color: "white" }}
          onClick={props.handleMenMenu}
        >
          Men
        </Button>
        <Button
          type="text"
          block
          style={{ color: "white" }}
          onClick={props.handleWomenMenu}
        >
          Women
        </Button>
        <Button
          type="text"
          block
          style={{ color: "white" }}
          onClick={props.handleKidsMenu}
        >
          Kids
        </Button>
      </div>
      <div
        style={{
          width: "700px",
          display: props.visible ? "flex" : "none",
          justifyContent: "space-between",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "#d3d3d3",
        }}
      >
        <Button
          onClick={props.onShoesClick}
          type="text"
          block
          style={{ color: "white" }}
        >
          Shoes
        </Button>
        <Button
          onClick={props.onTopClick}
          type="text"
          block
          style={{ color: "white" }}
        >
          Top
        </Button>
        <Button
          onClick={props.onBottomClick}
          type="text"
          block
          style={{ color: "white" }}
        >
          Bottom
        </Button>
      </div>
      <div
        style={{
          width: "700px",
          display: props.subVisible ? "flex" : "none",
          justifyContent: "space-between",
          marginLeft: "auto",
          marginRight: "auto",
          backgroundColor: "#f5f5f5",
        }}
      >
        <Button
          onClick={props.onBottomsClick}
          type="text"
          block
          style={{ color: "white" }}
        >
          Bottoms
        </Button>
        <Button
          onClick={props.onPantsClick}
          type="text"
          block
          style={{ color: "white" }}
        >
          Pants
        </Button>
      </div>
    </>
  );
};

export default TableMenu;
