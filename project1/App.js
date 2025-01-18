import { useState } from 'react';
import { StyleSheet, Text, View, TextInput, Button, FlatList } from 'react-native';

export default function App() {
  const [enteredGoalText, setEnteredGoalText] = useState("");
  const [goals, setGoals] = useState([]);

  function goalInputHandler(enteredText) {
    setEnteredGoalText(enteredText);
  };

  function addGoalHandler() {
    setGoals((currentGoals) => [...currentGoals, {text: enteredGoalText, key: Math.random().toString()},]);
  };

  return (
    <View style={ styles.appContainer}>
      <View style={ styles.inputContainer }>
        <TextInput onChangeText={goalInputHandler} placeholder='Your course goal!' style={ styles.textInput} />
        <Button onPress={addGoalHandler} title='Add Goal' />
      </View>
      <View style={styles.goalsContainer}>
        <FlatList data={goals} renderItem={(itemData) => {
          return(<View style={styles.listItem}><Text>{itemData.item.text}</Text></View>)
        }} />
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
  listItem: {
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
  },
});
