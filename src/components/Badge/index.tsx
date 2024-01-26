import { Flex } from "@chakra-ui/react";
import { memo } from "react";

interface BadgeProps {
  name: string;
}

const Badge = memo(({ name }: BadgeProps) => {
  return (
    <Flex
      width="5rem"
      borderRadius="8px"
      height="30px"
      bg="neAccent.500"
      fontSize="0.7rem"
      color="neWhite.500"
      overflow="hidden"
      justifyContent="center"
      alignItems="center"
      fontWeight="500"
    >
      {name}
    </Flex>
  );
});

export default Badge;
