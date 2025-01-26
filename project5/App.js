import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import Ionicons from '@expo/vector-icons/Ionicons';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import RecentExpensesScreen from './screens/RecentExpensesScreen';
import AllExpensesScreen from './screens/AllExpensesScreen';
import ModifyExpenseScreen from './screens/ModifyExpenseScreen';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="RecentExpenses" component={RecentExpensesScreen} title="Recent" options={{
        tabBarIcon: ({color, size}) => <Ionicons name="timer-outline" size={size} color={color} />,
        title: 'Recent',
        headerTitle: "Recent Expenses",
      }} />
      <Tab.Screen name="AllExpenses" component={AllExpensesScreen} options={{
        tabBarIcon: ({color, size}) => <Ionicons name="calendar" size={size} color={color} />,
        title: "All Expenses",
      }} />
    </Tab.Navigator>    
  );
}

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar style="dark" />
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Main" component={TabNavigator} options={{headerShown: false}}/>
          <Stack.Screen name="ModifyExpense" component={ModifyExpenseScreen} />
        </Stack.Navigator>
      </NavigationContainer>
   </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
