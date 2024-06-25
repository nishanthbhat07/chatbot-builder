import { useContext } from "react";
import { GlobalContext } from "./global";

export const useGlobalContext = () => useContext(GlobalContext);
