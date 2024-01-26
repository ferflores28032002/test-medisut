import { useEffect } from "react";

import { Box } from "@chakra-ui/react";

import Card from "../Card";
import { useGetLogInformation } from "../../hooks/useGetLotInformation";

const GridCards = () => {
  const { getAllInformation, getLotInformationData, isLoading } =
    useGetLogInformation();

  useEffect(() => {
    getAllInformation();
  }, []);

  if (isLoading) return <div>loading....</div>;

  return (
    <Box
      padding="2rem"
      display="flex"
      alignItems="center"
      gap="4"
      flexWrap="wrap"
      width="100%"
      minHeight="100vh"
    >
      {getLotInformationData.map((getLotInformation) => (
        <Card
          comentario="nica production since fernando oo"
          customer="assr production since jfewjfjwenjn"
          src="https://img.freepik.com/fotos-premium/hombre-grabando-camara-video-camara_905510-15766.jpg"
        />
      ))}
    </Box>
  );
};

export default GridCards;
