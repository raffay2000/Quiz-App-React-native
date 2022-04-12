import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Image,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import AwesomeAlert from 'react-native-awesome-alerts';

// import { set } from "react-native-reanimated";

const FirstScreen = ({ navigation }) => {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    // const [info, setInfo] = useState([])
    const [showAlert, setShowAlert] = useState(false)

    const showAlert1 = () => {
      setShowAlert({
        showAlert: true
      });
    };
  
    const hideAlert = () => {
      setShowAlert({
        showAlert: false
      });
    };

  const AddInfo=()=>{
  let InfoObj = {
    id:1,
    name:name,
    email:email
  }
  
  // const temp = [...info, InfoObj]

  if(!name || !email){
    alert('Name or Email is Not Given')
  }
  else{
  // alert('good to go')
  // setInfo(temp);
  navigation.navigate("QuizScreen",{name:name})
  // console.log(name,email)
  }
  setName(null)
  setEmail(null)


  }
  return (
    <ImageBackground
      source={require("../img/bg.jpg")}
      style={{ width: "100%", height: "100%" }}
    >
      <View style={styles.container}>
        <Text style={styles.textStyles}>Quiz App</Text>

        <TextInput
          placeholder="Enter You Name"
          placeholderTextColor={"black"}
          style={styles.inputStyle} value={name} onChangeText={(e)=>{setName(e)}} 
        ></TextInput>
        <TextInput
          placeholder="Enter You Email"
          placeholderTextColor={"black"}
          style={styles.inputStyle} value={email} onChangeText={(e)=>{setEmail(e)}}
        ></TextInput>
        <TouchableOpacity
          onPress={() => {AddInfo()
          }}
        >
          <View style={styles.btnStyle}>
            <Text style={{ fontSize: 20 }}>Next</Text>
          </View>
        </TouchableOpacity>
        
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: '#fff',
    alignItems: "center",
    justifyContent: "center",
  },
  inputStyle: {
    width: 300,
    padding: 10,
    height: 50,
    marginVertical: 6,
    backgroundColor: "#CAE5FF",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#4F9D69",
  },
  textStyles: {
    fontSize: 40,
    color: "black",
    // backgroundColor:'#A6B1E1',
    // borderRadius:12,
    padding: 12,
  },
  btnStyle: {
    marginVertical: 30,
    width: 150,
    height: 50,
    backgroundColor: "#89BBFE",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
  },
});
export default FirstScreen;
