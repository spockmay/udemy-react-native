import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import MealDetails from '../components/MealDetail'

function MealDetailsScreen({navigation, route}) {
    mealId = route.params.mealId;
    const displayedMeals = MEALS.filter( (mealItem)=> {return mealItem.id===mealId} )
    return (
    <View>
        <MealDetails></MealDetails>
    </View>);
}

export default MealDetailsScreen;

const styles=StyleSheet.create({

})