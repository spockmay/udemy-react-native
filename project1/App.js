import { useState } from 'react';
import { StyleSheet, View } from 'react-native';

import Animated, { LinearTransition} from 'react-native-reanimated'

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {

  const [goals, setGoals] = useState([]);  

  function addGoalHandler(enteredGoalText) {
    setGoals((currentGoals) => [...currentGoals, {text: enteredGoalText, key: Math.random().toString()},]);
  };

  function deleteGoalHandler(id) {
    setGoals((currentGoals) => {
      return currentGoals.filter((goal) => goal.key !== id);
    });
  }

  return (
    <View style={ styles.appContainer}>
      <GoalInput onAddGoal={addGoalHandler}/>
      <View style={styles.goalsContainer}>
        <Animated.FlatList itemLayoutAnimation={LinearTransition} data={goals} renderItem={(itemData) => {
          return(<GoalItem text={itemData.item.text} onDeleteItem={deleteGoalHandler} id={itemData.item.key} />);
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
  goalsContainer: {
    flex: 8,
  },
});
