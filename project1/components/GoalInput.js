import { useState } from "react";
import { StyleSheet, View, TextInput, Button, Modal } from "react-native";

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
            <TextInput onChangeText={goalInputHandler} placeholder='Your course goal!' style={ styles.textInput} value={enteredGoalText} />
            <View style={styles.buttonContainer}>
              <View style={styles.button}>
                <Button onPress={addGoalHandler} title='Add Goal' />
              </View>
              <View style={styles.button}>
                <Button onPress={props.onCancel} title="Cancel" />
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
    marginBottom: 24,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
    padding: 16,
  },
  buttonContainer: {
    flexDirection: 'row',
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '100%',
    padding: 5,
  },
  button: {
    width: '30%',
    marginHorizontal: 8,
    marginTop: 16,
  }
});