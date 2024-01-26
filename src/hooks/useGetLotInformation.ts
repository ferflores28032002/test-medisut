import { useState } from "react";
import { getLotInformation } from "../api/getLotInformation";

export const useGetLogInformation = () => {
  const [getLotInformationData, setgetLotInformationData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const getAllInformation = async () => {
    try {
      setIsLoading(true);
      const data = await getLotInformation.get("/getLotInformation");
      setgetLotInformationData(data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    // propiedades
    getLotInformationData,
    isLoading,

    // metodos
    getAllInformation,
  };
};
