import { useState } from 'react';
import { StyleSheet, View, Button, } from 'react-native';
import { StatusBar } from 'expo-status-bar';

import Animated, { LinearTransition} from 'react-native-reanimated'

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goals, setGoals] = useState([]);
  const [modalIsVisible, setModalIsVisible] = useState(false)

  function addGoalHandler(enteredGoalText) {
    setGoals((currentGoals) => [...currentGoals, {text: enteredGoalText, key: Math.random().toString()},]);
    endAddGoalHandler()
  };

  function deleteGoalHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== id);
    });
  }

  function startAddGoalHandler() {
    setModalIsVisible(true);
  }
  function endAddGoalHandler() {
    setModalIsVisible(false);
  }

  return (
    <>
      <StatusBar style='light' />
      <View style={ styles.appContainer}>
        <Button title='Add New Goal' onPress={startAddGoalHandler} color="#a065ec" />
        <GoalInput onAddGoal={addGoalHandler} visible={modalIsVisible} onCancel={endAddGoalHandler} />
        <View style={styles.goalsContainer}>
          <Animated.FlatList itemLayoutAnimation={LinearTransition} data={goals} renderItem={(itemData) => {
            return(<GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.key} />);
          }} />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  goalsContainer: {
    flex: 8,
  },
});
