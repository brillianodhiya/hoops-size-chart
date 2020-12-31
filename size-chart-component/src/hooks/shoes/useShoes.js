import React from "react";
import {
  NikeMenShoes,
  NikeWomenShoes,
  NikeKidsShoes,
  AdidasMenShoes,
  AdidasWomenShoes,
  AdidasKidsShoes,
  PumaMenShoes,
  PumaWomenShoes,
  PumaKidsShoes,
} from "../../data/sizeData";
const useShoes = () => {
  const [nikeMenShoesData, setNikeMenShoesData] = React.useState([]);
  const [nikeWomenShoesData, setNikeWomenShoesData] = React.useState([]);
  const [nikeKidsShoesdata, setNikeKidsShoesData] = React.useState([]);
  const [adidasMenShoesData, setAdidasMenShoesData] = React.useState([]);
  const [adidasWomenShoesData, setAdidasWomenShoesData] = React.useState([]);
  const [adidasKidsShoesdata, setAdidasKidsShoesData] = React.useState([]);
  const [pumaMenShoesData, setPumaMenShoesData] = React.useState([]);
  const [pumaWomenShoesData, setPumaWomenShoesData] = React.useState([]);
  const [pumaKidsShoesdata, setPumaKidsShoesData] = React.useState([]);
  const [shoesColumn] = React.useState([
    {
      title: "US Size",
      dataIndex: "us",
      key: "us",
    },
    {
      title: "UK Size",
      dataIndex: "uk",
      key: "uk",
    },
    {
      title: "Eu Size",
      dataIndex: "eu",
      key: "eu",
    },
    {
      title: "CM",
      dataIndex: "cm",
      key: "cm",
    },
  ]);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        NikeMenShoes.map((val) => {
          return {
            us: val.us,
            uk: val.uk,
            eu: val.eu,
            cm: val.cm,
          };
        })
      );
      setNikeMenShoesData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        NikeWomenShoes.map((val) => {
          return {
            us: val.us,
            uk: val.uk,
            eu: val.eu,
            cm: val.cm,
          };
        })
      );
      setNikeWomenShoesData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        NikeKidsShoes.map((val) => {
          return {
            us: val.us,
            uk: val.uk,
            eu: val.eu,
            cm: val.cm,
          };
        })
      );
      setNikeKidsShoesData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        AdidasMenShoes.map((val) => {
          return {
            us: val.us,
            uk: val.uk,
            eu: val.eu,
            cm: val.cm,
          };
        })
      );
      setAdidasMenShoesData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        AdidasWomenShoes.map((val) => {
          return {
            us: val.us,
            uk: val.uk,
            eu: val.eu,
            cm: val.cm,
          };
        })
      );
      setAdidasWomenShoesData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        AdidasKidsShoes.map((val) => {
          return {
            us: val.us,
            uk: val.uk,
            eu: val.eu,
            cm: val.cm,
          };
        })
      );
      setAdidasKidsShoesData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        PumaMenShoes.map((val) => {
          return {
            us: val.us,
            uk: val.uk,
            eu: val.eu,
            cm: val.cm,
          };
        })
      );
      setPumaMenShoesData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        PumaWomenShoes.map((val) => {
          return {
            us: val.us,
            uk: val.uk,
            eu: val.eu,
            cm: val.cm,
          };
        })
      );
      setPumaWomenShoesData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        PumaKidsShoes.map((val) => {
          return {
            us: val.us,
            uk: val.uk,
            eu: val.eu,
            cm: val.cm,
          };
        })
      );
      setPumaKidsShoesData(arr);
    })();
  }, []);

  return {
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
  };
};

export default useShoes;
