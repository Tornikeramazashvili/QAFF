import React from "react";
import MainContainer from "./MainContaner";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={MainContainer}
          options={{ headerShown: false }}

        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default StackNavigator;
