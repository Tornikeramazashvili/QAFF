import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";

// Screens
import CategoriesScreen from "./screens/CategoriesScreen";
import CarScreen from "./screens/CarScreen";
import DropScreen from "./screens/DropScreen";
import ListenScreen from "./screens/ListenScreen";
import ProfileScreen from "./screens/ProfileScreen";

// Screen names
const categoriesName = "CategoriesScreen";
const carName = "CarScreen";
const dropName = "DropScreen";
const listenName = "ListenScreen";
const profileName = "ProfileScreen";

const Tab = createBottomTabNavigator();

export default function MainContainer() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        showLabel: false,
        activeTintColor: "#ffffff",
        inactiveTintColor: "#7d90a7",
        activeBackgroundColor: "#3585EF",
        style: {
          position: "absolute",
          height: "10%",
          marginBottom: "1%",
          paddingHorizontal: 10,
          borderTopWidth: 0,
          elevation: 0,
          backgroundColor: "transparent",
        },
        tabStyle: {
          borderRadius: 50,
          margin: 10,
        },
      }}
      initialRouteName={CategoriesScreen}
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;
          let rn = route.name;
          if (rn === categoriesName) {
            iconName = focused ? "md-apps-outline" : "md-apps";
          } else if (rn == carName) {
            iconName = focused ? "car-sport-outline" : "car-sport";
          } else if (rn == dropName) {
            iconName = focused ? "water" : "water-outline";
          } else if (rn == listenName) {
            iconName = focused ? "headset-outline" : "headset";
          } else if (rn == profileName) {
            iconName = focused ? "person-outline" : "person";
          }
          return <Ionicons name={iconName} size={28} color={color} />;
        },
      })}
    >
      <Tab.Screen name={categoriesName} component={CategoriesScreen}
      // listeners={({ navigation }) => ({
      //   tabPress: event => {
      //     event.preventDefault();
      //     navigation.navigate("Name of screen from stack screen")
      //   }
      // })}
       />
      <Tab.Screen name={carName} component={CarScreen} />
      <Tab.Screen name={dropName} component={DropScreen} />
      <Tab.Screen name={listenName} component={ListenScreen} />
      <Tab.Screen name={profileName} component={ProfileScreen} />
    </Tab.Navigator>
  );
}
