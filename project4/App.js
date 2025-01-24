import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native'
import AntDesign from '@expo/vector-icons/AntDesign';
import UserScreen from './screens/UserScreen'
import WelcomeScreen from './screens/WelcomeScreen'

const Drawer = createDrawerNavigator();
const Tab = createBottomTabNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Tab.Navigator >
      <Tab.Screen name="Welcome" component={WelcomeScreen} options={{
        tabBarIcon: ({color, size}) => <AntDesign name="home" size={size} color={color} />
      }} />
      <Tab.Screen name="User" component={UserScreen} options={{
        tabBarIcon: ({color, size}) => <AntDesign name="user" size={size} color={color} />
      }} />
    </Tab.Navigator>
  </NavigationContainer>
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
