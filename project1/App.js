import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [goals, setGoals] = useState(['1','2','3']);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    setGoals((currentGoals) => [...currentGoals, enteredGoalText,]);
  };

  return (
    <View style={ styles.appContainer}>
      <View style={ styles.inputContainer }>
        <TextInput onChangeText={goalInputHandler} placeholder='Your course goal!' style={ styles.textInput} />
        <Button onPress={addGoalHandler} title='Add Goal' />
      </View>
      <View style={styles.goalsContainer}>
        { goals.map((goal, index) => (<Text key={index}>{goal}</Text>)) }
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,

  },
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
  goalsContainer: {
    flex: 8,
  },
});
