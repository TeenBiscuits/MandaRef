import React, { FC } from "react";
import { Text, View } from "react-native";

export interface ClothesInfo {
  id: string;
  name: string;
  price: {
    currency: string;
    value: {
      current: number;
    };
  };
  link: string;
  brand: string;
}
interface ClotheCardProps {
  clothe: ClothesInfo;
}
const ClotheCard: FC<ClotheCardProps> = ({ clothe }) => {
  return (
    <View
      className="w-full min-h-40 p-4  rounded-xl  bg-white  "
      style={{
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
      }}
    >
      <Text>ClotheCard</Text>
    </View>
  );
};

export default ClotheCard;
