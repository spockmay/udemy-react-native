import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal, Image } from "react-native";

function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText("")
    };

    return (
        <Modal visible={props.visible} animationType="slide">
        <View style={ styles.inputContainer }>
            <Image style={styles.image} source={require('../assets/images/goal.png')} />
            <TextInput onChangeText={goalInputHandler} placeholder='Your course goal!' style={ styles.textInput} value={enteredGoalText} />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button onPress={addGoalHandler} title='Add Goal' color="#a065ec" />
              </View>
              <View style={styles.button}>
                <Button onPress={props.onCancel} title="Cancel" color="#f31282" />
              </View>
            </View>
        </View>
        </Modal>
    )
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#311b6b'
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#e4d0ff',
    backgroundColor: '#e4d0ff',
    borderRadius: 6,
    width: '100%',
    padding: 16,
    color: '#120438',
  },
  button: {
    width: '30%',
    marginHorizontal: 8,
    marginTop: 16,
  },
  image: {
    width: 100,
    height: 100,
    margin: 20,
  },
});