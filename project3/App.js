import { StatusBar } from 'expo-status-bar';
import { StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CategoriesScreen from './screens/CategoriesScreen';
import MealsOverviewsScreen from './screens/MealsOverviewScreen';
import MealDetailsScreen from './screens/MealDetailsScreen'
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerStyle: {backgroundColor: '#351401'}, headerTintColor: 'white', contentStyle: { backgroundColor: '#3f2f25'}}} >
          <Stack.Screen name="MealsCategories" component={CategoriesScreen} options={{title: "Categories"}} />
          <Stack.Screen name="MealsOverview" component={MealsOverviewsScreen}
            // options={({route, navigation})=>{
            //   const catId = route.params.categoryId
            //   return {title: catId}; }}
            />
          <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="light" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
