import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
const FinalResult = ({ navigation ,route}) => {
const {score,name,currentQuestion} = route.params
let total_ques = 4


  return (
    
    <View style={styles.container}>
      <Text style={styles.textStyle}>Name : {name}</Text>
      {/* <Text style={styles.textStyle}>Result : {score+1}</Text> */}
      <Text style={styles.textStyle}>Correct : {score} </Text>
      <Text style={styles.textStyle}>InCorrect : {total_ques-score}</Text>

      {/* <TouchableOpacity
        onPress={() => {
          navigation.goBack();
        }}
      >
        <View style={styles.btn}>
          <Text style={{ color: "white", fontSize: 23 }}>Try Again</Text>
        </View>
      </TouchableOpacity> */}
      <TouchableOpacity
        onPress={() => {
          navigation.popToTop();
        }}
      >
        <View style={styles.btn}>
          <Text style={{ color: "white", fontSize: 23 }}>Go To Login</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FED9B7",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    fontSize: 30,
    color: "#01200F",
  },
  btn: {
    marginVertical: 12,
    width: 200,
    height: 40,
    backgroundColor: "#0081A7",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
});
export default FinalResult;
