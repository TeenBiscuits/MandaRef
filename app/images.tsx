import ClotheCard from "@/components/ClotheCard";
import EmptyState from "@/components/EmptyState";
import { useGlobalContext } from "@/hooks/useGlobalContext";
import { useSearchImage } from "@/hooks/useSearchImage";
import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { icons, images } from "../constants";

const Search = () => {
  const { image } = useLocalSearchParams();
  const { favouritesClothes } = useGlobalContext();
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(5);

  const { data, isFetching } = useSearchImage({
    image: image as string,
    page,
    pageSize,
  });

  const isWeb = Platform.OS === "web";
  const isLoading = isFetching;
  return (
    <>
      <Image
        source={images.desert}
        resizeMode="cover"
        className="absolute w-full h-full"
        style={isWeb && { position: "absolute", width: "100%", height: "100%" }}
      />
      <SafeAreaView className="h-full" edges={["top"]}>
        <TouchableOpacity
          className="flex flex-row ml-4"
          onPress={() => router.back()}
        >
          <Image source={icons.arrow_back} className="size-6" />
          <Text className="text-xl font-pbold text-slate-800 ">Back</Text>
        </TouchableOpacity>
        <FlatList
          className="flex w-full h-full mt-10 p-6 bg-white rounded-t-3xl"
          data={data}
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
                    Results
                  </Text>
                </View>
                <TouchableOpacity onPress={() => router.replace("/")}>
                  <Image
                    source={images.logo}
                    style={isWeb && { width: 70, height: 70 }}
                    className="w-14 h-14 "
                    resizeMode="contain"
                  />
                </TouchableOpacity>
              </View>
              <View className="h-0.5 bg-slate-100 w-full" />
            </View>
          )}
          ListEmptyComponent={() =>
            isLoading || !data ? (
              <View className="h-80 justify-center items-center">
                <ActivityIndicator size={70} color="#94a3b8" />
              </View>
            ) : (
              <View>
                <EmptyState title="No clothes found" />
              </View>
            )
          }
          ListFooterComponent={() => {
            if (!isLoading && data) {
              return (
                <>
                  <View className="h-0.5 mt-8 bg-[#ebebeb] w-full" />
                  <View className="flex flex-row w-full h-30 mb-80 mt-10 gap-4">
                    <TouchableOpacity
                      className="flex-1 h-20 items-center justify-center bg-white rounded-2xl"
                      disabled={page === 0}
                      onPress={() => setPage(page - 1)}
                      style={styles.shadows}
                    >
                      <Text className="text-xl font-pbold text-slate-800">
                        Back
                      </Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                      className="flex-1 h-20 items-center justify-center bg-slate-800 rounded-2xl"
                      disabled={!data}
                      onPress={() => setPage(page + 1)}
                      style={styles.shadows}
                    >
                      <Text className="text-xl font-pbold text-white">
                        Next
                      </Text>
                    </TouchableOpacity>
                  </View>
                </>
              );
            }
            return null;
          }}
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  shadows: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 7,
  },
});
export default Search;
