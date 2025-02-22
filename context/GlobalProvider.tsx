import { useState } from "react";
import { ClothesInfo } from "../components/ClotheCard";
import { GlobalContext } from "./GlobalContext";

interface GlobalProviderProps {
  children: React.ReactNode;
}
export const GlobalProvider = ({ children }: GlobalProviderProps) => {
  const [favouritesClothes, setFavouritesClothes] = useState<ClothesInfo[]>([]);

  return (
    <GlobalContext.Provider
      value={{
        favouritesClothes,
        setFavouritesClothes,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
