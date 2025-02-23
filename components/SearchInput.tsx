import { FC, useState } from "react";
import {
  Alert,
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import { Brands } from "@/enums/brands.type";
import { router, usePathname } from "expo-router";
import RNPickerSelect from "react-native-picker-select";
import { icons } from "../constants";
interface SearchInputProps {
  initialQuery?: string;
  initalBrand?: Brands;
}
const SearchInput: FC<SearchInputProps> = ({ initialQuery, initalBrand }) => {
  const pathname = usePathname();
  const [query, setQuery] = useState<string>(initialQuery ?? "");
  const [selectedBrand, setSelectedBrand] = useState(initalBrand ?? "");
  const handleBrandChange = (value: Brands) => {
    setSelectedBrand(value);
  };
  console.log(query);
  return (
    <View
      className=" w-full h-16 px-4 bg-white rounded-2xl
       focus:border-sky-700 items-center flex-row gap-4 text-black-200  "
      style={{
        elevation: 7,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      }}
    >
      <TextInput
        className="text-sm w-3/4 mt-0.5 flex-1  font-pregular"
        value={query}
        onChangeText={(e) => setQuery(e)}
        placeholder="Search clothes by a description..."
        placeholderTextColor="#94a3b8"
      />
      <RNPickerSelect
        onValueChange={handleBrandChange}
        value={selectedBrand}
        items={[
          { label: "Zara", value: Brands.zara },
          { label: "Zara Home", value: Brands.zara_home },
          { label: "Oysho", value: Brands.oysho },
          { label: "Masimo dutti", value: Brands.massimodutti },
          { label: "Pull and bear", value: Brands.pullandbear },
          { label: "Lefties", value: Brands.lefties },
          { label: "Stradivarius", value: Brands.stradivarious },
        ]}
        placeholder={{ label: "Marca", value: null, color: "#94a3b8" }}
        style={pickerSelectStyles}
        Icon={() => null}
        useNativeAndroidPickerStyle={false}
      />
      <TouchableOpacity
        onPress={() => {
          if (!query) {
            return Alert.alert(
              "Missing query",
              "Please input something to search results across database",
            );
          }
          if (pathname.startsWith("/search"))
            router.setParams({ query, brand: selectedBrand });
          else router.push(`/search/${query}?brand=${selectedBrand}`);
        }}
      >
        <Image
          source={icons.search}
          className="w-5 h-5 text-[#d7d4d4] "
          tintColor={"#94a3b8"}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};
const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    height: 50,
    width: 140,
    flex: 1,
    backgroundColor: "#fff",
    borderColor: "purple",
    color: "black",
    borderRadius: 8,
    borderWidth: 1,
  },
  inputAndroid: {
    height: 50,
    width: 100,
    textAlign: "center",
    textAlignVertical: "center",
    color: "black",
    borderLeftWidth: 1,
    borderLeftColor: "#d7d4d4",
    borderRightWidth: 1,
  },
});
export default SearchInput;
