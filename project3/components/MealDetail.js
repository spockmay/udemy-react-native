import { View, Text, StyleSheet, Image, Pressable } from 'react-native';


function MealDetails({meal}) {
    return (
    <View>
        <Text>{meal.title}</Text>
        <Text>{meal.affordability}</Text>
        <Text>{meal.complexity}</Text>
        <Text>{meal.duration}m</Text>   
        <Text>{meal.ingredients}</Text>
        <Text>{meal.steps}</Text>        
    </View>);
}

export default MealDetails;

const styles=StyleSheet.create({

})