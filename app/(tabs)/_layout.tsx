import { FontAwesome } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import React from "react";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarInactiveTintColor: "#94a3b8",
        tabBarActiveTintColor: "#232533",
        headerShown: false,
        tabBarStyle: {
          borderTopColor: "#FFF",
          backgroundColor: "#FFF",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome size={focused ? 30 : 26} name="home" color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="favourites"
        options={{
          tabBarIcon: ({ color, focused }) => (
            <FontAwesome
              size={focused ? 30 : 26}
              name="bookmark"
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
