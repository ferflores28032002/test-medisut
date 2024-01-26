import { colorsCheckbox } from "../utils/colorSchemas";

import { Color } from "../interfaces/CustomCheckbox.interface";

export const useColorSchema = (color: Color) => {
  return colorsCheckbox.find((coSchema) => coSchema.nombre === color)?.color;
};
