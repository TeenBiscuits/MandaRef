import { FC, useEffect, useState } from "react";
import { Alert, Image, TextInput, TouchableOpacity, View } from "react-native";

import { router, usePathname } from "expo-router";
import { icons } from "../constants";

interface SearchInputProps {
  initialQuery?: string;
}
const SearchInput: FC<SearchInputProps> = ({ initialQuery }) => {
  const pathname = usePathname();
  const [query, setQuery] = useState<string>(initialQuery ?? "");

  useEffect(() => {}, [query]);
  return (
    <View
      className=" w-full h-16 px-4 bg-white rounded-2xl
       focus:border-sky-700 items-center flex-row space-x-4 text-black-200  "
      style={{
        elevation: 7,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      }}
    >
      <TextInput
        className="text-base mt-0.5 flex-1  font-pregular"
        value={query}
        onChangeText={(e) => setQuery(e)}
        placeholder="Search clothes by a description..."
        placeholderTextColor="#94a3b8"
      />
      <TouchableOpacity
        onPress={() => {
          if (!query) {
            return Alert.alert(
              "Missing query",
              "Please input something to search results across database",
            );
          }
          if (pathname.startsWith("/search")) router.setParams({ query });
          else router.push(`/search/${query}`);
        }}
      >
        <Image
          source={icons.search}
          className="w-5 h-5 "
          tintColor={"#94a3b8"}
          resizeMode="contain"
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchInput;
