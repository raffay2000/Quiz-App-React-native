import React, { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import Questions from "../components/Questions";

const QuizScreen = ({ navigation, route }) => {
  const { name } = route.params;
  const [currentQuestion, setCurrentQuestion] = useState(0);
  // const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);
  const [selected, setSelected] = useState("");
  const questions = [
    {
      questionText: "What is the capital of France?",
      answerOptions: [
        { answerText: "New York" },
        { answerText: "London" },
        { answerText: "Paris" },
        { answerText: "Dublin" },
      ],
      isCorrect: "Paris",
    },
    {
      questionText: "Who is CEO of Tesla?",
      answerOptions: [
        { answerText: "Jeff Bezos" },
        { answerText: "Elon Musk" },
        { answerText: "Bill Gates" },
        { answerText: "Tony Stark" },
      ],
      isCorrect: "Elon Musk",
    },
    {
      questionText: "The iPhone was created by which company?",
      answerOptions: [
        { answerText: "Apple" },
        { answerText: "Intel" },
        { answerText: "Amazon" },
        { answerText: "Microsoft" },
      ],
      isCorrect: "Apple",
    },
    {
      questionText: "How many Harry Potter books are there?",
      answerOptions: [
        { answerText: "1" },
        { answerText: "4" },
        { answerText: "6" },
        { answerText: "7" },
      ],
      isCorrect: "7",
    },
    {
      questionText: "Rate Our Quiz App Out Of 5",
      answerOptions: [
        { answerText: "1" },
        { answerText: "2" },
        { answerText: "3" },
        { answerText: "4" },
        { answerText: "5" }
      ]
      // isCorrect: "7",
    }
  ];

  const clickOnAnswer = (answer) => {
    setSelected(answer.answerText);
  };
  
  const NextQuestion = () => {
    if (questions[currentQuestion].isCorrect == selected) {
      setScore(score + 1);
  }
    let nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length){
      setCurrentQuestion(nextQuestion);
    } else {
      navigation.navigate("FinalResult",{
        score,
        name,
      });
    }

    // navigation.navigate("FinalResult");
  };
  // if (isCorrect) {
  // }
  // const nextQuestion = currentQuestion + 1;
  // if (nextQuestion < questions.length) {
  // 	setCurrentQuestion(nextQuestion);
  // } else {
  // 	setShowScore(true);
  // }	setScore(score + 1);

  return (
    <View style={styles.container}>
      <Text style={{ fontSize: 40 }}> QuizScreen </Text>
      <Questions
        // style={{}}
        Name={name}
        Question={questions[currentQuestion].questionText}
        // QuestionCount={questions[0]}
        QuestionCount={currentQuestion}
        QuestionOptions={questions[currentQuestion].answerOptions.map(
          (value, index) => {
            return (
              <TouchableOpacity
                onPress={() => {
                  clickOnAnswer(value);
                }}
                key={index}
              >
                <View
                  style={[
                    styles.options,
                    selected == value.answerText && {
                      backgroundColor: "#FED9B7",
                    },
                  ]}
                >
                  <Text>{value.answerText}</Text>
                </View>
              </TouchableOpacity>
            );
          }
        )}
      />

      <TouchableOpacity
        style={styles.btnStyles}
        onPress={() => {
          NextQuestion();
        }}>
        <Text>{currentQuestion < 3 ? "Next Question" : "Show Result"}</Text>
      </TouchableOpacity>
      {/* <Text>{score}</Text> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#ACEDFF",
    alignItems: "center",
    // justifyContent: 'center',
    paddingTop: 60,
  },
  btnStyles: {
    backgroundColor: "#FED9B7",
    width: 200,
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#F07167",
    marginTop: 12,
  },
  options: {
    marginVertical: 8,
    height: 45,
    width: 365,
    backgroundColor: "#F07167",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#01200F",
    justifyContent: "center",
    alignItems: "center",
  },
  // options1:{
  //     marginVertical: 8,
  //     height: 45,
  //     width: 365,
  //     backgroundColor: "#FED9B7",
  //     borderRadius: 12,
  //     borderWidth: 1,
  //     borderColor: "#01200F",
  //     justifyContent: "center",
  //     alignItems: "center",

  // }
});

export default QuizScreen;
