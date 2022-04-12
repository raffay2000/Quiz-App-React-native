import React from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";

const Questions = ({
  Name,
  Question,
  QuestionCount,
  QuestionOptions,
  style,
}) => {

  return (
    <>
      <View style={style}>
        <View style={styles.nameStyle}>
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              marginTop: 5,
              alignSelf: "center",
            }}
          >
            WelCome : {Name}
          </Text>
        </View>
        <View style={styles.text}>
          <Text style={styles.textStyles}>{Question}</Text>
          <Text style={styles.textStyles}>{QuestionCount+1}/5</Text>
        </View>
        <View>
          <Text style={styles.textStyles}>{QuestionOptions}</Text>
          </View>
        

        {/* <TouchableOpacity>
          <View style={styles.options}>
            <Text>{QuestionOptions}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.options}>
            <Text>{QuestionOptions}</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity>
          <View style={styles.options}>
            <Text>{QuestionOptions}</Text>
          </View>
        </TouchableOpacity> */}
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  text: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 20,
  },
  textStyles: {
    fontSize: 15,
  },
 
  nameStyle: {
    width: 365,
    height: 50,
    backgroundColor: "#FED9B7",
    borderRadius: 12,
    marginTop: 12,
  },
});
export default Questions;
