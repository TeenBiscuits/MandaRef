import SearchInput from "@/components/SearchInput";
import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  return (
    <SafeAreaView className="flex-1 bg-white ">
      <ScrollView className="p-6">
        <View className="flex-1 w-3/4 flex-nowrap">
          <Text className=" text-4xl font-pbold">Bienvenido a MandaRef </Text>
        </View>
        <View className="flex justify-center h-80  ">
          <SearchInput />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}
