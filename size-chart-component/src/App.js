import React from "react";
import "./App.css";
import { Table } from "antd";
import TableMenu from "./components/TableMenu";
import useShoes from "./hooks/shoes/useShoes";
import useTop from "./hooks/top/useTop";
import useBottoms from "./hooks/bottoms/useBottoms";
import usePants from "./hooks/bottoms/usePants";
import BrandMenu from "./components/BrandMenu";

function App() {
  const [brandTitle, setBrandTitle] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [subtitle, setSubtitle] = React.useState("");
  const [visible, setVisible] = React.useState(false);
  const [subVisible, setSubVisible] = React.useState(false);
  const {
    nikeMenShoesData,
    nikeWomenShoesData,
    nikeKidsShoesdata,
    adidasMenShoesData,
    adidasWomenShoesData,
    adidasKidsShoesdata,
    pumaMenShoesData,
    pumaWomenShoesData,
    pumaKidsShoesdata,
    shoesColumn,
  } = useShoes();

  const {
    nikeMenTopData,
    nikeWomenTopData,
    nikeKidsTopdata,
    adidasMenTopData,
    adidasWomenTopData,
    adidasKidsTopdata,
    pumaMenTopData,
    pumaWomenTopData,
    pumaKidsTopdata,
    topColumn,
  } = useTop();

  const {
    nikeMenBottomData,
    nikeWomenBottomData,
    nikeKidsBottomData,
    adidasMenBottomData,
    adidasWomenBottomData,
    adidasKidsBottomData,
    pumaMenBottomData,
    pumaWomenBottomData,
    pumaKidsBottomData,
    bottomsColumn,
  } = useBottoms();

  const {
    nikeMenPantsData,
    nikeWomenPantsData,
    nikeKidsPantsData,
    adidasMenPantsData,
    adidasWomenPantsData,
    adidasKidsPantsData,
    pumaMenPantsData,
    pumaWomenPantsData,
    pumaKidsPantsData,
    pantsColumn,
  } = usePants();

  console.log(nikeKidsShoesdata);

  const handleNikeBrandMenu = () => {
    setBrandTitle("Nike");
  };
  const handleAdidasBrandMenu = () => {
    setBrandTitle("Adidas");
  };
  const handlePumaBrandMenu = () => {
    setBrandTitle("Puma");
  };

  const handleMenMenu = () => {
    setTitle("Men");
    setVisible(true);
  };

  const handleWomenMenu = () => {
    setTitle("Women");
    setVisible(true);
  };

  const handleKidsMenu = () => {
    setTitle("Kids");
    setVisible(true);
  };

  const handleShoesMenu = () => {
    setSubtitle("Shoes");
    setVisible(true);
    setSubVisible(false);
  };

  const handleTopMenu = () => {
    setSubtitle("Top");
    setVisible(true);
    setSubVisible(false);
  };

  const handleBottomMenu = () => {
    setSubVisible(true);
  };

  const handleBottomsMenu = () => {
    setSubtitle("Bottoms");
  };

  const handlePantsMenu = () => {
    setSubtitle("Pants");
  };

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>SIZE CHART</h1>
      </div>
      <BrandMenu
        onClickNike={handleNikeBrandMenu}
        onClickAdidas={handleAdidasBrandMenu}
        onClickPuma={handlePumaBrandMenu}
      />
      <div style={{ height: "20px" }} />
      <TableMenu
        handleMenMenu={handleMenMenu}
        handleWomenMenu={handleWomenMenu}
        handleKidsMenu={handleKidsMenu}
        onShoesClick={handleShoesMenu}
        onTopClick={handleTopMenu}
        onBottomClick={handleBottomMenu}
        onBottomsClick={handleBottomsMenu}
        onPantsClick={handlePantsMenu}
        visible={visible}
        subVisible={subVisible}
      />
      <div>
        <h2 style={{ color: "#e08a6a", textAlign: "center" }}>
          {[title, " ", subtitle] || ["Title", "Subtitle"]}
        </h2>
        <h5 style={{ color: "#808080", textAlign: "center" }}>
          FIND YOUR SIZE
        </h5>
        <p style={{ textAlign: "center" }}>
          Use your measurements and the chart below to determine your shoe size
        </p>
        <Table
          dataSource={
            brandTitle === "Nike" && title === "Men" && subtitle === "Shoes"
              ? nikeMenShoesData
              : brandTitle === "Nike" &&
                title === "Women" &&
                subtitle === "Shoes"
              ? nikeWomenShoesData
              : brandTitle === "Nike" &&
                title === "Kids" &&
                subtitle === "Shoes"
              ? nikeKidsShoesdata
              : brandTitle === "Nike" && title === "Men" && subtitle === "Top"
              ? nikeMenTopData
              : brandTitle === "Nike" && title === "Women" && subtitle === "Top"
              ? nikeWomenTopData
              : brandTitle === "Nike" && title === "Kids" && subtitle === "Top"
              ? nikeKidsTopdata
              : brandTitle === "Nike" &&
                title === "Men" &&
                subtitle === "Bottoms"
              ? nikeMenBottomData
              : brandTitle === "Nike" &&
                title === "Women" &&
                subtitle === "Bottoms"
              ? nikeWomenBottomData
              : brandTitle === "Nike" &&
                title === "Kids" &&
                subtitle === "Bottoms"
              ? nikeKidsBottomData
              : brandTitle === "Nike" && title === "Men" && subtitle === "Pants"
              ? nikeMenPantsData
              : brandTitle === "Nike" &&
                title === "Women" &&
                subtitle === "Pants"
              ? nikeWomenPantsData
              : brandTitle === "Nike" &&
                title === "Kids" &&
                subtitle === "Pants"
              ? nikeKidsPantsData
              : brandTitle === "Adidas" &&
                title === "Men" &&
                subtitle === "Shoes"
              ? adidasMenShoesData
              : brandTitle === "Adidas" &&
                title === "Women" &&
                subtitle === "Shoes"
              ? adidasWomenShoesData
              : brandTitle === "Adidas" &&
                title === "Kids" &&
                subtitle === "Shoes"
              ? adidasKidsShoesdata
              : brandTitle === "Adidas" && title === "Men" && subtitle === "Top"
              ? adidasMenTopData
              : brandTitle === "Adidas" &&
                title === "Women" &&
                subtitle === "Top"
              ? adidasWomenTopData
              : brandTitle === "Adidas" &&
                title === "Kids" &&
                subtitle === "Top"
              ? adidasKidsTopdata
              : brandTitle === "Adidas" &&
                title === "Men" &&
                subtitle === "Bottoms"
              ? adidasMenBottomData
              : brandTitle === "Adidas" &&
                title === "Women" &&
                subtitle === "Bottoms"
              ? adidasWomenBottomData
              : brandTitle === "Adidas" &&
                title === "Kids" &&
                subtitle === "Bottoms"
              ? adidasKidsBottomData
              : brandTitle === "Adidas" &&
                title === "Men" &&
                subtitle === "Pants"
              ? adidasMenPantsData
              : brandTitle === "Adidas" &&
                title === "Women" &&
                subtitle === "Pants"
              ? adidasWomenPantsData
              : brandTitle === "Adidas" &&
                title === "Kids" &&
                subtitle === "Pants"
              ? adidasKidsPantsData
              : brandTitle === "Puma" && title === "Men" && subtitle === "Shoes"
              ? pumaMenShoesData
              : brandTitle === "Puma" &&
                title === "Women" &&
                subtitle === "Shoes"
              ? pumaWomenShoesData
              : brandTitle === "Puma" &&
                title === "Kids" &&
                subtitle === "Shoes"
              ? pumaKidsShoesdata
              : brandTitle === "Puma" && title === "Men" && subtitle === "Top"
              ? pumaMenTopData
              : brandTitle === "Puma" && title === "Women" && subtitle === "Top"
              ? pumaWomenTopData
              : brandTitle === "Puma" && title === "Kids" && subtitle === "Top"
              ? pumaKidsTopdata
              : brandTitle === "Puma" &&
                title === "Men" &&
                subtitle === "Bottoms"
              ? pumaMenBottomData
              : brandTitle === "Puma" &&
                title === "Women" &&
                subtitle === "Bottoms"
              ? pumaWomenBottomData
              : brandTitle === "Puma" &&
                title === "Kids" &&
                subtitle === "Bottoms"
              ? pumaKidsBottomData
              : brandTitle === "Puma" && title === "Men" && subtitle === "Pants"
              ? pumaMenPantsData
              : brandTitle === "Puma" &&
                title === "Women" &&
                subtitle === "Pants"
              ? pumaWomenPantsData
              : pumaKidsPantsData
          }
          columns={
            subtitle === "Shoes"
              ? shoesColumn
              : subtitle === "Top"
              ? topColumn
              : subtitle === "Bottoms"
              ? bottomsColumn
              : pantsColumn
          }
        />
      </div>
    </>
  );
}

export default App;
