import { View, Text } from "react-native";
import React, { useState } from "react";

export default function CategoriesScreen() {
  const [loggedIn, setLoggedIn] = useState(false);
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Categories Screen</Text>
    </View>
  );
}
