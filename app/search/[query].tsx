import ClotheCard, { ClothesInfo } from "@/components/ClotheCard";
import EmptyState from "@/components/EmptyState";
import SearchInput from "@/components/SearchInput";
import { useLocalSearchParams } from "expo-router";
import React from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Platform,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";

const Search = () => {
  const { query } = useLocalSearchParams();
  const data: ClothesInfo[] = [
    {
      id: "fasfasg",
      name: "GEOMETRIC JACQUARD SHIRT",
      price: {
        currency: "EUR",
        value: {
          current: 29.95,
        },
      },
      link: "https://www.zara.com/es/en/geometric-jacquard-shirt-p01618475.html?v1=367022517",
      brand: "zara",
    },
    {
      id: "fasfaga",
      name: "GEOMETRIC JACQUARD SHIRT",
      price: {
        currency: "EUR",
        value: {
          current: 29.95,
        },
      },
      link: "https://www.zara.com/es/en/geometric-jacquard-shirt-p01618475.html?v1=367022518",
      brand: "zara",
    },
    {
      id: "asfasf",
      name: "GEOMETRIC JACQUARD SHIRT",
      price: {
        currency: "EUR",
        value: {
          current: 29.95,
        },
      },
      link: "https://www.zara.com/es/en/geometric-jacquard-shirt-p01618475.html?v1=367022519",
      brand: "zara",
    },
    {
      id: "gsgsdgsd",
      name: "GEOMETRIC JACQUARD SHIRT",
      price: {
        currency: "EUR",
        value: {
          current: 29.95,
        },
      },
      link: "https://www.zara.com/es/en/geometric-jacquard-shirt-p01618475.html?v1=367022519",
      brand: "zara",
    },
    {
      id: "safasf",
      name: "GEOMETRIC JACQUARD SHIRT",
      price: {
        currency: "EUR",
        value: {
          current: 29.95,
        },
      },
      link: "https://www.zara.com/es/en/geometric-jacquard-shirt-p01618475.html?v1=367022519",
      brand: "zara",
    },
  ];
  const data2 = [];
  const isWeb = Platform.OS === "web";
  const isLoading = false;
  return (
    <>
      {isWeb ? (
        <Image
          source={images.desert}
          resizeMode="cover"
          style={{ position: "absolute", width: "100%", height: "100%" }}
        />
      ) : (
        <Image
          source={images.desert}
          resizeMode="cover"
          className="absolute w-full h-full"
        />
      )}
      <SafeAreaView className="h-full" edges={["top"]}>
        <FlatList
          className="flex w-full h-full mt-10 p-6 bg-white rounded-t-3xl"
          data={data}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <ClotheCard clothe={item} />}
          ItemSeparatorComponent={() => <View className="h-8" />}
          ListHeaderComponent={() => (
            <View className=" my-6 gap-8">
              <View className="justify-between item-center flex-row ">
                <View className="justify-center ">
                  <Text className="font-pbold text-4xl text-slate-800 ">
                    Results
                  </Text>
                </View>
                <View>
                  {isWeb ? (
                    <Image
                      source={images.logo}
                      style={{ width: 70, height: 70 }}
                      resizeMode="contain"
                    />
                  ) : (
                    <Image
                      source={images.logo}
                      className=" w-14 h-14 "
                      resizeMode="contain"
                    />
                  )}
                </View>
              </View>
              <SearchInput />
              <View className="h-1 bg-slate-100 w-full" />
            </View>
          )}
          ListEmptyComponent={() =>
            isLoading ? (
              <View className="h-80 justify-center items-center">
                <ActivityIndicator size={70} color="#94a3b8" />
              </View>
            ) : (
              <EmptyState title="No clothes found" />
            )
          }
        />
      </SafeAreaView>
    </>
  );
};

export default Search;
