import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import { useLayoutEffect } from 'react';

import MealDetails from '../components/MealDetail'
import { MEALS } from '../data/dummy-data';

function MealDetailsScreen({navigation, route}) {
    mealId = route.params.mealId;
    const displayedMeal = MEALS.find( (mealItem)=> mealItem.id===mealId );

    // Set the navigation title
    useLayoutEffect(() => {
        navigation.setOptions({title: displayedMeal.title})
    }, [mealId, navigation])
    
    return (
        <View style={styles.container}>
            <MealDetails {...displayedMeal}></MealDetails>
        </View>
    );
}

export default MealDetailsScreen;

const styles=StyleSheet.create({
    container: {
        padding: 16,
    }
})