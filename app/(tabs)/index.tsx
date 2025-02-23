import SearchImageInput from "@/components/SearchImageInput";
import SearchInput from "@/components/SearchInput";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { images } from "../../constants";

export default function HomeScreen() {
  const platform = Platform.OS;

  const isWeb = platform === "web";

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
      <KeyboardAvoidingView></KeyboardAvoidingView>
      <SafeAreaView className="flex-1 w-full h-full p-6 ">
        <View className="flex w-full min-h-20 flex-nowrap  mt-14 ">
          <Text
            className={
              platform !== "ios"
                ? "text-7xl font-bold text-slate-800"
                : " text-6xl font-bold text-slate-800"
            }
          >
            Bienvenido a MandaRef{" "}
          </Text>
        </View>
        <View className="flex-col justify-around mt-8 h-3/4 gap-10">
          <View className="flex flex-col justify-center  gap-14 ">
            <SearchInput />
            <SearchImageInput />
          </View>
          <View className=" flex justify-center items-start ">
            <Text className="text-4xl text-slate-800 font-bold  text-shadow-md mb-3">
              ¿Qué es MandaRef?
            </Text>
            <Text className="text-lg font-pmedium text-slate-800 ">
              MandaRef es una innovadora aplicación de búsqueda de ropa que te
              permite encontrar prendas de forma rápida y sencilla. Puedes
              buscar de dos maneras: describiendo la prenda que deseas o
              subiendo una foto. La búsqueda por descripción te mostrará un
              amplio catálogo de opciones en todas las marcas de Inditex,
              mientras que la búsqueda por foto te permitirá encontrar prendas
              similares exclusivamente en Zara.
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </>
  );
}
