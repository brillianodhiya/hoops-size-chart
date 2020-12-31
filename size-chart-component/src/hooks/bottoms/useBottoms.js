import React from "react";
import {
  NikeMenBottom,
  NikeWomenBottom,
  NikeKidsBottom,
  AdidasMenBottom,
  AdidasWomenBottom,
  AdidasKidsBottoms,
  PumaMenBottoms,
  PumaWomenBottoms,
  PumaKidsBottoms,
} from "../../data/sizeData";

const useBottoms = () => {
  const [nikeMenBottomData, setNikeMenBottomData] = React.useState([]);
  const [nikeWomenBottomData, setNikeWomenBottomData] = React.useState([]);
  const [nikeKidsBottomData, setNikeKidsBottomData] = React.useState([]);
  const [adidasMenBottomData, setAdidasMenBottomData] = React.useState([]);
  const [adidasWomenBottomData, setAdidasWomenBottomData] = React.useState([]);
  const [adidasKidsBottomData, setAdidasKidsBottomData] = React.useState([]);
  const [pumaMenBottomData, setPumaMenBottomData] = React.useState([]);
  const [pumaWomenBottomData, setPumaWomenBottomData] = React.useState([]);
  const [pumaKidsBottomData, setPumaKidsBottomData] = React.useState([]);

  const [bottomsColumn] = React.useState([
    {
      title: "Size",
      dataIndex: "size",
      key: "size",
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
    {
      title: "Reg Inside RL",
      dataIndex: "reginsiderl",
      key: "reginsiderl",
    },
    {
      title: "Short Inside RL",
      dataIndex: "shortinsiderl",
      key: "shortinsiderl",
    },
  ]);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        NikeMenBottom.map((val) => {
          return {
            size: val.size,
            chest: val.chest,
            hips: val.hips,
            waist: val.waist,
            reginsiderl: val.reginsiderl,
            shortinsiderl: val.shortinsiderl,
          };
        })
      );
      setNikeMenBottomData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        NikeWomenBottom.map((val) => {
          return {
            size: val.size,
            chest: val.chest,
            hips: val.hips,
            waist: val.waist,
            reginsiderl: val.reginsiderl,
            shortinsiderl: val.shortinsiderl,
          };
        })
      );
      setNikeWomenBottomData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        NikeKidsBottom.map((val) => {
          return {
            size: val.size,
            chest: val.chest,
            hips: val.hips,
            waist: val.waist,
            reginsiderl: val.reginsiderl,
            shortinsiderl: val.shortinsiderl,
          };
        })
      );
      setNikeKidsBottomData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        AdidasMenBottom.map((val) => {
          return {
            size: val.size,
            chest: val.chest,
            hips: val.hips,
            waist: val.waist,
            reginsiderl: val.reginsiderl,
            shortinsiderl: val.shortinsiderl,
          };
        })
      );
      setAdidasMenBottomData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        AdidasWomenBottom.map((val) => {
          return {
            size: val.size,
            chest: val.chest,
            hips: val.hips,
            waist: val.waist,
            reginsiderl: val.reginsiderl,
            shortinsiderl: val.shortinsiderl,
          };
        })
      );
      setAdidasWomenBottomData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        AdidasKidsBottoms.map((val) => {
          return {
            size: val.size,
            chest: val.chest,
            hips: val.hips,
            waist: val.waist,
            reginsiderl: val.reginsiderl,
            shortinsiderl: val.shortinsiderl,
          };
        })
      );
      setAdidasKidsBottomData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        PumaMenBottoms.map((val) => {
          return {
            size: val.size,
            chest: val.chest,
            hips: val.hips,
            waist: val.waist,
            reginsiderl: val.reginsiderl,
            shortinsiderl: val.shortinsiderl,
          };
        })
      );
      setPumaMenBottomData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        PumaWomenBottoms.map((val) => {
          return {
            size: val.size,
            chest: val.chest,
            hips: val.hips,
            waist: val.waist,
            reginsiderl: val.reginsiderl,
            shortinsiderl: val.shortinsiderl,
          };
        })
      );
      setPumaWomenBottomData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        PumaKidsBottoms.map((val) => {
          return {
            size: val.size,
            chest: val.chest,
            hips: val.hips,
            waist: val.waist,
            reginsiderl: val.reginsiderl,
            shortinsiderl: val.shortinsiderl,
          };
        })
      );
      setPumaKidsBottomData(arr);
    })();
  }, []);

  return {
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
  };
};

export default useBottoms;
