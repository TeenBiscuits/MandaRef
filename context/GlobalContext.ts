import { createContext } from "react";
import { ClothesInfo } from "../components/ClotheCard";

interface GlobalContextType {
  favouritesClothes: ClothesInfo[];
  setFavouritesClothes: (favouritesClothes: ClothesInfo[]) => void;
}
export const GlobalContext = createContext<GlobalContextType>({
  favouritesClothes: [],
  setFavouritesClothes: () => {},
});
