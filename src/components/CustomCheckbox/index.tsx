import { memo } from "react";

import { Checkbox } from "@chakra-ui/react";

import { CustomCheckboxProps } from "./interfaces/CustomCheckbox.interface";

import { sizes } from "./utils/sizes.checkBox";
import { useColorSchema } from "./hooks/useColorSchema";

const CustomCheckbox = memo((props: CustomCheckboxProps) => {
  const { size, type, colorScheme } = props;

  const color = useColorSchema(type);

  return (
    <Checkbox
      _hover={{ borderColor: "bgShadow", _dark: { borderColor: "gray.700" } }}
      sx={{
        ".chakra-checkbox__control": {
          borderRadius: "3px",
          width: sizes[size].width,
          height: sizes[size].height,
        },
      }}
      colorScheme={colorScheme ? colorScheme : color}
      {...props}
    />
  );
});

export default CustomCheckbox;
