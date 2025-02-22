import * as ImagePicker from "expo-image-picker";
import { ImagePickerSuccessResult } from "expo-image-picker";
import React from "react";
import { Text, TouchableOpacity } from "react-native";

const SearchImageInput = () => {
  const [image, setImage] = React.useState<ImagePickerSuccessResult>();
  const openPicker = async (selectedType: string) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      if (selectedType === "images") {
        setImage(result);
      }
    }
  };

  return (
    <TouchableOpacity
      className=" w-full h-16 px-4 bg-white rounded-2xl
       focus:border-sky-700 items-center flex-row space-x-4 text-black-200 "
      style={{
        elevation: 7,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
      }}
    >
      <Text className="text-base text-gray-100 font-pmedium">
        Upload an image for search clothes
      </Text>
    </TouchableOpacity>
  );
};

export default SearchImageInput;
