import { View, StyleSheet} from 'react-native';
import { useLayoutEffect } from 'react';

import MealDetails from '../components/MealDetail'
import { MEALS } from '../data/dummy-data';
import LikeButton from '../components/LikeButton'

function MealDetailsScreen({navigation, route}) {
    const mealId = route.params.mealId;
    const displayedMeal = MEALS.find( (mealItem)=> mealItem.id===mealId );
    let isFavorite = false;

    function headerButtonPressHandler() {
        isFavorite = !isFavorite; // This doesn't toggle the state of the icon for some reason :\ ??
        console.log("pressed");
    }

    // Set the navigation title
    useLayoutEffect(() => {
        navigation.setOptions({title: displayedMeal.title,
                               headerRight: () => {return <LikeButton filled={isFavorite} onPress={headerButtonPressHandler} />}
                               })
    }, [mealId, navigation, isFavorite])
    
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