import axios from "axios";

// colocar en variables de entorno el apiUrl
export const getLotInformation = axios.create({
  baseURL: "https://192.168.1.115:8087/api/Frontend",
});
