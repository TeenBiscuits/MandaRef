import React, { FC } from "react";
import { Image, Text, View } from "react-native";

interface TabsIconProps {
  icon: any;
  name?: string;
  color: string;
  focused: boolean;
}

const TabsIcon: FC<TabsIconProps> = ({ icon, name, color, focused }) => {
  return (
    <View className="flex items-center justify-center">
      <Image
        source={icon}
        resizeMode="contain"
        tintColor={color}
        className={`${focused ? "size-8" : "size-7"}`}
      />
      <Text
        className={`${focused ? "font-psemibold" : "font-pregular"} text-xs  `}
        numberOfLines={1}
        style={{ color }}
      >
        {name}
      </Text>
    </View>
  );
};

export default TabsIcon;
