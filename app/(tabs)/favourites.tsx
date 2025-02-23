import ClotheCard from "@/components/ClotheCard";
import EmptyState from "@/components/EmptyState";
import { useGlobalContext } from "@/hooks/useGlobalContext";
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

const Favourites = () => {
  const { favouritesClothes } = useGlobalContext();

  console.log(favouritesClothes);
  const isWeb = Platform.OS === "web";
  const isLoading = false;

  return (
    <>
      <Image
        source={images.desert}
        resizeMode="cover"
        className="absolute w-full h-full"
        style={isWeb && { position: "absolute", width: "100%", height: "100%" }}
      />
      <SafeAreaView className="h-full" edges={["top"]}>
        <FlatList
          className="flex w-full h-full mt-10 p-6 bg-white rounded-t-3xl"
          data={favouritesClothes}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            if (favouritesClothes.includes(item))
              return <ClotheCard clothe={item} saved />;
            return <ClotheCard clothe={item} />;
          }}
          ItemSeparatorComponent={() => <View className="h-8" />}
          ListHeaderComponent={() => (
            <View className=" my-6 gap-8">
              <View className="justify-between item-center flex-row ">
                <View className="justify-center ">
                  <Text className="font-pbold text-4xl text-slate-800 ">
                    Favourites
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
              <View className="h-1 bg-slate-100 w-full" />
            </View>
          )}
          ListEmptyComponent={() =>
            isLoading ? (
              <View className="h-80 justify-center items-center">
                <ActivityIndicator size={70} color="#94a3b8" />
              </View>
            ) : (
              <EmptyState title="No favourites clothes found" />
            )
          }
          ListFooterComponent={() => {}}
        />
      </SafeAreaView>
    </>
  );
};

export default Favourites;
