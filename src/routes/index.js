import React from "react";
// import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import FirstScreen from "../screen/FirstScreen";
import QuizScreen from "../screen/QuizScreen";
import FinalResult from "../screen/FinalResult";

const Stack = createNativeStackNavigator();

const Routes = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            name="FirstScreen"
            component={FirstScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="QuizScreen"
            component={QuizScreen}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="FinalResult"
            component={FinalResult}
            options={{ headerShown: false }}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
export default Routes;
