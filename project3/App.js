import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Ionicons from '@expo/vector-icons/Ionicons';
import AntDesign from '@expo/vector-icons/AntDesign';

import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewsScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen'
import FavoritesScreen from './screens/FavoritesScreen'


const Stack = createNativeStackNavigator();

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
  <Drawer.Navigator screenOptions={{
    headerStyle: {backgroundColor: '#351401'}, headerTintColor: 'white', sceneStyle: { backgroundColor: '#3f2f25'},
    drawerContentStyle: {backgroundColor: '#351401'},
    drawerInactiveTintColor: 'white',
    drawerActiveTintColor: '#351401',
    drawerActiveBackgroundColor: '#e4baa1',
  }} >
    <Drawer.Screen name="Categories" component={CategoriesScreen} options={{title: "All Categories", drawerIcon: ({color, size}) => <Ionicons name="list" size={size} color={color} /> }} />
    <Drawer.Screen name="Favorites" component={FavoritesScreen} options={{title: "Favorites", drawerIcon: ({color, size}) => <AntDesign name="heart" size={size} color={color} /> }} />
  </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#351401'}, headerTintColor: 'white', contentStyle: { backgroundColor: '#3f2f25'}}} >
          <Stack.Screen name="MealsCategories" component={DrawerNavigator} options={{headerShown: false}}/>
          <Stack.Screen name="MealsOverview" component={MealsOverviewsScreen} />
          <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
