import React from "react";
import {
  NikeMenTop,
  NikeWomenTop,
  NikeKidsTop,
  AdidasMenTop,
  AdidasWomenTop,
  AdidasKidsTop,
  PumaMenTop,
  PumaWomenTop,
  PumaKidsTop,
} from "../../data/sizeData";

const useTop = () => {
  const [nikeMenTopData, setNikeMenTopData] = React.useState([]);
  const [nikeWomenTopData, setNikeWomenTopData] = React.useState([]);
  const [nikeKidsTopData, setNikeKidsTopData] = React.useState([]);
  const [adidasMenTopData, setAdidasMenTopData] = React.useState([]);
  const [adidasWomenTopData, setAdidasWomenTopData] = React.useState([]);
  const [adidasKidsTopData, setAdidasKidsTopData] = React.useState([]);
  const [pumaMenTopData, setPumaMenTopData] = React.useState([]);
  const [pumaWomenTopData, setPumaWomenTopData] = React.useState([]);
  const [pumaKidsTopData, setPumaKidsTopData] = React.useState([]);

  const [topColumn] = React.useState([
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
    },
    {
      title: "Chest",
      dataIndex: "chest",
      key: "chest",
    },
    {
      title: "Waist",
      dataIndex: "waist",
      key: "waist",
    },
    {
      title: "Hips",
      dataIndex: "hips",
      key: "hips",
    },
  ]);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        NikeMenTop.map((val) => {
          return {
            size: val.size,
            chest: val.chest,
            waist: val.waist,
            hips: val.hips,
          };
        })
      );
      setNikeMenTopData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        NikeWomenTop.map((val) => {
          return {
            size: val.size,
            chest: val.chest,
            waist: val.waist,
            hips: val.hips,
          };
        })
      );
      setNikeWomenTopData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        NikeKidsTop.map((val) => {
          return {
            size: val.size,
            chest: val.chest,
            waist: val.waist,
            hips: val.hips,
          };
        })
      );
      setNikeKidsTopData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        AdidasMenTop.map((val) => {
          return {
            size: val.size,
            chest: val.chest,
            waist: val.waist,
            hips: val.hips,
          };
        })
      );
      setAdidasMenTopData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        AdidasWomenTop.map((val) => {
          return {
            size: val.size,
            chest: val.chest,
            waist: val.waist,
            hips: val.hips,
          };
        })
      );
      setAdidasWomenTopData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        AdidasKidsTop.map((val) => {
          return {
            size: val.size,
            chest: val.chest,
            waist: val.waist,
            hips: val.hips,
          };
        })
      );
      setAdidasKidsTopData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        PumaMenTop.map((val) => {
          return {
            size: val.size,
            chest: val.chest,
            waist: val.waist,
            hips: val.hips,
          };
        })
      );
      setPumaMenTopData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        PumaWomenTop.map((val) => {
          return {
            size: val.size,
            chest: val.chest,
            waist: val.waist,
            hips: val.hips,
          };
        })
      );
      setPumaWomenTopData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        PumaKidsTop.map((val) => {
          return {
            size: val.size,
            chest: val.chest,
            waist: val.waist,
            hips: val.hips,
          };
        })
      );
      setPumaKidsTopData(arr);
    })();
  }, []);

  return {
    nikeMenTopData,
    nikeWomenTopData,
    nikeKidsTopData,
    adidasMenTopData,
    adidasWomenTopData,
    adidasKidsTopData,
    pumaMenTopData,
    pumaWomenTopData,
    pumaKidsTopData,
    topColumn,
  };
};

export default useTop;
