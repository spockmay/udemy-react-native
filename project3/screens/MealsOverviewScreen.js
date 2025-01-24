import { View, FlatList, Text, StyleSheet } from 'react-native';

import MealItem from '../components/MealItem';
import { MEALS } from '../data/dummy-data';

function MealsOverviewsScreen({navigation, route}) {
    categoryId = route.params.categoryId;

    const displayedMeals = MEALS.filter( (mealItem)=> {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    })

    function renderMealItem(itemData) {
        return (
            <View>
                <MealItem title={itemData.item.title} />
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList data={displayedMeals} keyExtractor={(item)=>item.id} renderItem={renderMealItem}/>
        </View>
    )
}

export default MealsOverviewsScreen;

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
    }
});