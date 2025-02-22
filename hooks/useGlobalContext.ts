import { useContext } from "react";
import { GlobalContext } from "../context/GlobalContext";

export const useGlobalContext = () => {
  const { favouritesClothes, setFavouritesClothes } = useContext(GlobalContext);
  return { favouritesClothes, setFavouritesClothes };
};
