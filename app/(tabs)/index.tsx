import SearchImageInput from "@/components/SearchImageInput";
import SearchInput from "@/components/SearchInput";
import { Image, ScrollView, Text, View } from "react-native";
import { images } from "../../constants";
export default function HomeScreen() {
  return (
    <View className="flex h-full bg-white ">
      <Image
        source={images.desert}
        resizeMode="cover"
        className="absolute w-full h-full"
      />
      <ScrollView className="p-6 mt-14 z-">
        <View className="flex-1 w-3/4 flex-nowrap">
          <Text className=" text-4xl font-pbold">Bienvenido a MandaRef </Text>
        </View>
        <View className="flex justify-center h-80  ">
          <SearchInput />
          <SearchImageInput />
        </View>
      </ScrollView>
    </View>
  );
}
