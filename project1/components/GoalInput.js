import { useState } from "react";
import { StyleSheet, View, TextInput, Button } from "react-native";



function GoalInput(props) {
    const [enteredGoalText, setEnteredGoalText] = useState("");

    function goalInputHandler(enteredText) {
        setEnteredGoalText(enteredText);
    };
    function addGoalHandler() {
        props.onAddGoal(enteredGoalText);
        setEnteredGoalText("")
    }
    return (
        <View style={ styles.inputContainer }>
            <TextInput onChangeText={goalInputHandler} placeholder='Your course goal!' style={ styles.textInput} value={enteredGoalText} />
            <Button onPress={addGoalHandler} title='Add Goal' />
        </View>
    )
};

export default GoalInput;

const styles = StyleSheet.create({
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 24,
    borderBottomColor: '#cccccc',
    borderBottomWidth: 1,
  },
  textInput: {
    borderWidth: 1,
    borderColor: '#cccccc',
    width: '70%',
    marginRight: 5,
    padding: 5,
  },
});