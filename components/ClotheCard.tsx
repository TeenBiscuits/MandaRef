import { useGlobalContext } from "@/hooks/useGlobalContext";
import { FontAwesome } from "@expo/vector-icons";

import React, { FC } from "react";
import { Image, Text, TouchableOpacity, View } from "react-native";
import { images } from "../constants";
import { Brands } from "../enums/brands.type";

export interface ClothesInfo {
  id: string;
  name: string;
  price: {
    currency: string;
    value: {
      current: number;
      original?: number;
    };
  };
  link: string;
  brand: string;
}
interface ClotheCardProps {
  clothe: ClothesInfo;
  saved?: boolean;
}
export interface FavouritesClothes {
  clothesFavourites: ClothesInfo[];
}
const ClotheCard: FC<ClotheCardProps> = ({ clothe, saved }) => {
  const { favouritesClothes, setFavouritesClothes } = useGlobalContext();
  const getImageBrand = () => {
    switch (clothe.brand) {
      case Brands.zara:
        return images.zara;
      case Brands.stradivarious:
        return images.zara;
      case Brands.oysho:
        return images.oysho;
      case Brands.pullandbear:
        return images.pullandbear;
      case Brands.lefties:
        return images.lefties;
      case Brands.massimodutti:
        return images.massimodutti;
      case Brands.zara_home:
        return images.zara_home;
      default:
        return images.zara;
    }
  };
  const handleOnClick = async () => {
    if (saved) {
      setFavouritesClothes(
        favouritesClothes.filter((item) => item.id !== clothe.id),
      );
      return;
    }
    const newFavouritesClothes = [...favouritesClothes, clothe];
    setFavouritesClothes(newFavouritesClothes);
  };
  const imageBrand = getImageBrand();
  const getDiscount =
    clothe.price.value.original !== undefined
      ? (clothe.price.value.current / clothe.price.value?.original) * 100
      : 0;

  return (
    <View
      className="relative justify-between w-full min-h-40 p-4  rounded-xl  bg-white  "
      style={{
        elevation: 4,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
      }}
    >
      <View className="relative flex-row justify-between items-center">
        <View className=" w-full flex-row flex-nowrap justify-between">
          <Text
            className="text-xl w-3/4 font-pbold text-slate-800  overflow-auto"
            numberOfLines={2}
            ellipsizeMode="tail"
          >
            {clothe.name}
          </Text>
          <View className="flex-row gap-2">
            <TouchableOpacity onPress={handleOnClick}>
              <FontAwesome
                name={saved ? "bookmark" : "bookmark-o"}
                size={20}
                color="#1e293b"
              />
            </TouchableOpacity>
            <TouchableOpacity>
              <FontAwesome name="share-square-o" size={20} color="#1e293b" />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View className=" flex-row justify-between items-center ">
        <View className="size-8">
          <Image
            source={imageBrand}
            resizeMode="contain"
            className="w-full h-full"
          />
        </View>
        <View className="flex-row gap-4 items-end">
          <View>
            {getDiscount !== 0 && (
              <Text
                className="text-sm text-red-600 self-center "
                style={{ textDecorationLine: "line-through" }}
              >
                {clothe.price.value.original}
              </Text>
            )}
            <Text className="text-lg ">{clothe.price.value.current}</Text>
          </View>
          <Text className=" font-extrabold ">{clothe.price.currency}</Text>
        </View>
      </View>
    </View>
  );
};

export default ClotheCard;
