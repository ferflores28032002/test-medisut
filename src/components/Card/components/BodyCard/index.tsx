import { ReactNode, memo } from "react";

import { Box, Image } from "@chakra-ui/react";
import CustomCheckbox from "../../../CustomCheckbox";
import Badge from "../../../Badge";

interface BodyCardProps {
  children: ReactNode;
  src: string;
}

// utilizamos memo para evitar renderizaciones innesesarias de nuestro componente
const BodyCard = memo(({ children, src }: BodyCardProps) => {
  return (
    <Box
      width="160px"
      height="250px"
      boxShadow="0px 3px 6px"
      color="bgShadow"
      borderRadius="8px"
      overflow="hidden"
      position="relative"
    >
      <Box w="100%" h="130px" position="relative">
        <Image
          className="resetBgSelected lazyImage"
          height="100%"
          src={src}
          width="100%"
          alt="Image Alt"
          loading="lazy"
        />

        {/* mostrar el nombre del pais */}

        <Box position="absolute" left="5%" bottom="6%" zIndex={999}>
          <Badge name="Nicaragua" />
        </Box>
      </Box>

      {/* selecccionar la card */}
      <Box position="absolute" left="5%" top="3%">
        <CustomCheckbox
          defaultChecked={false}
          isChecked={false}
          isDisabled={false}
          isInvalid={false}
          onChange={() => {}}
          size="sm"
          type="accent"
        />
      </Box>

      <Box p="5%">{children}</Box>
    </Box>
  );
});

export default BodyCard;
