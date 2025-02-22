import ClotheCard from "@/components/ClotheCard";
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
import { images, mocks } from "../../constants";

const Search = () => {
  const { query } = useLocalSearchParams();

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
          data={mocks.data}
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
