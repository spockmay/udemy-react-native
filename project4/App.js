import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'
import AntDesign from '@expo/vector-icons/AntDesign';
import UserScreen from './screens/UserScreen'
import WelcomeScreen from './screens/WelcomeScreen'

const Drawer = createDrawerNavigator();

export default function App() {
  return (
  <NavigationContainer>
    <Drawer.Navigator screenOptions={{
              drawerActiveBackgroundColor: '#dcbff8',
              }}>
      <Drawer.Screen name="Welcome" component={WelcomeScreen} options={{
        headerStyle: {backgroundColor: '#af7fdd'},
        drawerLabel: 'Welcome Screen',
        drawerIcon: ({color, size}) => <AntDesign name="home" size={size} color={color} />
      }} />
      <Drawer.Screen name="User" component={UserScreen} options={{
        drawerIcon: ({color, size}) => <AntDesign name="user" size={size} color={color} />
      }} />
    </Drawer.Navigator>
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
