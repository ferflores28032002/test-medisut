import { Box, Heading, Text } from "@chakra-ui/react";
import BodyCard from "./components/BodyCard";

interface CardProps {
  customer: string;
  comentario: string;
  src: string;
}

const Card = ({ comentario, customer, src }: CardProps) => {
  return (
    <BodyCard src={src}>
      <Box>
        <Heading
          size="sm"
          paddingY="0.4rem"
          fontWeight="bold"
          color="txPrimary"
          noOfLines={[2, 2]}
        >
          {comentario}
        </Heading>
        <Text
          paddingTop="0.9rem"
          paddingBottom="0.2rem"
          color="txPrimary"
          noOfLines={[1, 1]}
          fontSize="0.7rem"
        >
          {customer}
        </Text>
      </Box>
    </BodyCard>
  );
};

export default Card;
