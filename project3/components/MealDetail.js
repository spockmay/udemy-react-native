import { View, Text, StyleSheet, Image, Pressable } from 'react-native';


function MealDetails({affordability,complexity,duration,ingredients,steps}) {
    return (
    <View>
        <Text>{affordability}</Text>
        <Text>{complexity}</Text>
        <Text>{duration}m</Text>   
        <Text>{ingredients}</Text>
        <Text>{steps}</Text>        
    </View>);
}

export default MealDetails;

const styles=StyleSheet.create({

})