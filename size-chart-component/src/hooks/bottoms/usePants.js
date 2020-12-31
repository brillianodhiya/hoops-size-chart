import React from "react";
import {
  NikeMenPants,
  NikeWomenPants,
  NikeKidsPants,
  AdidasMenPants,
  AdidasWomenPants,
  AdidasKidsPants,
  PumaMenPants,
  PumaWomenPants,
  PumaKidsPants,
} from "../../data/sizeData";

const usePants = () => {
  const [nikeMenPantsData, setNikeMenPantsData] = React.useState([]);
  const [nikeWomenPantsData, setNikeWomenPantsData] = React.useState([]);
  const [nikeKidsPantsData, setNikeKidsPantsData] = React.useState([]);
  const [adidasMenPantsData, setAdidasMenPantsData] = React.useState([]);
  const [adidasWomenPantsData, setAdidasWomenPantsData] = React.useState([]);
  const [adidasKidsPantsData, setAdidasKidsPantsData] = React.useState([]);
  const [pumaMenPantsData, setPumaMenPantsData] = React.useState([]);
  const [pumaWomenPantsData, setPumaWomenPantsData] = React.useState([]);
  const [pumaKidsPantsData, setPumaKidsPantsData] = React.useState([]);

  const [pantsColumn] = React.useState([
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
      title: "Tall In Leg",
      dataIndex: "tallinleg",
      key: "tallinleg",
    },
    {
      title: "Short In Leg",
      dataIndex: "shortinleg",
      key: "shortinleg",
    },
    {
      title: "Reg Inside RL",
      dataIndex: "reginleg",
      key: "reginleg",
    },
  ]);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        NikeMenPants.map((val) => {
          return {
            size: val.size,
            chest: val.chest,
            hips: val.hips,
            tallinleg: val.tallinleg,
            shortinleg: val.shortinleg,
            reginleg: val.reginleg,
          };
        })
      );
      setNikeMenPantsData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        NikeWomenPants.map((val) => {
          return {
            size: val.size,
            chest: val.chest,
            hips: val.hips,
            tallinleg: val.tallinleg,
            shortinleg: val.shortinleg,
            reginleg: val.reginleg,
          };
        })
      );
      setNikeWomenPantsData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        NikeKidsPants.map((val) => {
          return {
            size: val.size,
            chest: val.chest,
            hips: val.hips,
            tallinleg: val.tallinleg,
            shortinleg: val.shortinleg,
            reginleg: val.reginleg,
          };
        })
      );
      setNikeKidsPantsData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        AdidasMenPants.map((val) => {
          return {
            size: val.size,
            chest: val.chest,
            hips: val.hips,
            tallinleg: val.tallinleg,
            shortinleg: val.shortinleg,
            reginleg: val.reginleg,
          };
        })
      );
      setAdidasMenPantsData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        AdidasWomenPants.map((val) => {
          return {
            size: val.size,
            chest: val.chest,
            hips: val.hips,
            tallinleg: val.tallinleg,
            shortinleg: val.shortinleg,
            reginleg: val.reginleg,
          };
        })
      );
      setAdidasWomenPantsData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        AdidasKidsPants.map((val) => {
          return {
            size: val.size,
            chest: val.chest,
            hips: val.hips,
            tallinleg: val.tallinleg,
            shortinleg: val.shortinleg,
            reginleg: val.reginleg,
          };
        })
      );
      setAdidasKidsPantsData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        PumaMenPants.map((val) => {
          return {
            size: val.size,
            chest: val.chest,
            hips: val.hips,
            tallinleg: val.tallinleg,
            shortinleg: val.shortinleg,
            reginleg: val.reginleg,
          };
        })
      );
      setPumaMenPantsData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        PumaWomenPants.map((val) => {
          return {
            size: val.size,
            chest: val.chest,
            hips: val.hips,
            tallinleg: val.tallinleg,
            shortinleg: val.shortinleg,
            reginleg: val.reginleg,
          };
        })
      );
      setPumaWomenPantsData(arr);
    })();
  }, []);

  React.useEffect(() => {
    (async () => {
      const arr = await Promise.all(
        PumaKidsPants.map((val) => {
          return {
            size: val.size,
            chest: val.chest,
            hips: val.hips,
            tallinleg: val.tallinleg,
            shortinleg: val.shortinleg,
            reginleg: val.reginleg,
          };
        })
      );
      setPumaKidsPantsData(arr);
    })();
  }, []);

  return {
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
  };
};

export default usePants;
