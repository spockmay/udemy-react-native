import { View, FlatList, StyleSheet } from 'react-native';
import { useLayoutEffect } from 'react';

import MealItem from '../components/MealItem';
import { MEALS, CATEGORIES } from '../data/dummy-data';

function MealsOverviewsScreen({navigation, route}) {
    const categoryId = route.params.categoryId;


    const displayedMeals = MEALS.filter( (mealItem)=> {
        return mealItem.categoryIds.indexOf(categoryId) >= 0;
    })

    // set page navigation title
    useLayoutEffect(() => {
        const categoryTitle = CATEGORIES.find((category) => category.id === categoryId).title;

        navigation.setOptions({title: categoryTitle})
    }, [categoryId, navigation])

    function renderMealItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealDetails', {mealId: itemData.item.id});
        }    
    

        return (
            <View>
                <MealItem title={itemData.item.title} imageURL={itemData.item.imageUrl} onPress={pressHandler}/>
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