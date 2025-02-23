import { router, useLocalSearchParams } from "expo-router";
import React, { useState } from "react";
import {
  ActivityIndicator,
  Image,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { WebView } from "react-native-webview";
import { icons } from "../constants";

const ViewClothes = () => {
  const [isLoading, setIsLoading] = useState(true);
  const { url } = useLocalSearchParams();

  return (
    <SafeAreaView className="w-full h-full">
      <View className=" flex flex-row justify-between p-4 h-16 bg-white ">
        <TouchableOpacity
          className="flex flex-row "
          onPress={() => router.back()}
        >
          <Image source={icons.arrow_back} className="size-6" />
          <Text className="text-xl font-pbold text-slate-800 ">Back</Text>
        </TouchableOpacity>
        <View className="justify-center w-3/4 items-center overflow-hidden ">
          <Text
            className="text-sm font-pbold text-slate-500 "
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {url}
          </Text>
        </View>
      </View>
      <View className="w-full h-full">
        {isLoading && (
          <View className="absolute  w-full h-full justify-center items-center z-10">
            <ActivityIndicator size={70} color="#94a3b8" />
          </View>
        )}
        <WebView
          source={{ uri: url }}
          onError={(error) => (
            <View>
              <Text>Has ocurred an error</Text>
            </View>
          )}
          onLoad={() => setIsLoading(false)}
          onLoadStart={() => setIsLoading(true)}
        />
      </View>
    </SafeAreaView>
  );
};

export default ViewClothes;
