import { uploadFile } from "@/lib/appwrite";
import { FontAwesome } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { router } from "expo-router";
import React, { useEffect, useState } from "react";
import { Image, Text, TouchableOpacity } from "react-native";

const SearchImageInput = () => {
  const [image, setImage] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState<URL | null>(null);
  const [loading, setLoading] = useState(false);

  const openPicker = async (selectedType: string) => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    if (!result.canceled) {
      if (selectedType === "images") {
        setImage(result.assets[0]);
        handleUpload(result.assets[0]);
      }
    }
  };

  const handleUpload = async (selectedImage: any) => {
    setLoading(true);
    try {
      console.log("selectedImage", selectedImage);
      const fileUrl = await uploadFile(selectedImage, "image");
      setUploadedImageUrl(fileUrl);
    } catch (error) {
      console.error("Error al subir la imagen:", error);
    } finally {
      setLoading(false);
    }
  };
  useEffect(() => {
    if (uploadedImageUrl) {
      router.push(`/images?image=${uploadedImageUrl}`);
    }
  }, [uploadedImageUrl]);
  return (
    <>
      {image && !uploadedImageUrl && (
        <Image
          source={{ uri: image.uri }}
          style={{ width: 100, height: 100, marginTop: 10, borderRadius: 10 }}
        />
      )}
      <TouchableOpacity
        className=" w-full h-16 px-4 bg-[#1e293b] rounded-2xl
       focus:border-sky-700 items-center justify-between flex-row space-x-4 text-black-200 "
        style={{
          elevation: 7,
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 2 },
          shadowOpacity: 0.25,
          shadowRadius: 3.84,
        }}
        onPress={() => openPicker("images")}
      >
        <Text
          className="text-base text-slate-300 font-pmedium overflow-hidden"
          numberOfLines={1}
          ellipsizeMode="tail"
        >
          Upload an image to search clothes
        </Text>
        <FontAwesome name="upload" size={20} color="#94a3b8" />
      </TouchableOpacity>
    </>
  );
};

export default SearchImageInput;
