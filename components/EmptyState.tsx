import { FC } from "react";
import { Image, Text, View } from "react-native";
import { icons } from "../constants";

interface EmptyStateProps {
  title: string;
  subTitle?: string;
}
const EmptyState: FC<EmptyStateProps> = ({ title, subTitle }) => {
  return (
    <View className="h-full justify-center items-center px-4 ">
      <Image source={icons.notFound} className="size-30" resizeMode="contain" />
      <Text className="text-xl text-center font-semibold text-[#94a3b8] mt-2">
        {title}
      </Text>
      <Text className="font-medium text-sm text-[#94a3b8] ">{subTitle}</Text>
    </View>
  );
};

export default EmptyState;
