import { ColorCheckbox } from "../interfaces/ColorCheckbox.interface";

export const colorsCheckbox: ColorCheckbox[] = [
  { nombre: "primary", color: "baOceanBlue" },
  { nombre: "secondary", color: "baPomegranate" },
  { nombre: "success", color: "stSuccess" },
  { nombre: "danger", color: "stError" },
  { nombre: "warning", color: "stProgress" },
  { nombre: "info", color: "lkBlue" },
  { nombre: "light", color: "stWarning" },
  { nombre: "lkred", color: "lkRed" },
  { nombre: "accent", color: "neAccent" },
  { nombre: "custom", color: "neGrey" },
];

export const optionsColors = colorsCheckbox.map((color) => color.nombre);
