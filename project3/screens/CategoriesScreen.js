import { FlatList, StyleSheet, View } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'

import CategoryGridTile from '../components/CategoryGridTile'



function CategoriesScreen({navigation}) {
    function renderCategoryItem(itemData) {
        function pressHandler() {
            navigation.navigate('MealsOverview', {categoryId: itemData.item.id});
        }

        return (
        <CategoryGridTile title={itemData.item.title} color={itemData.item.color} onPress={pressHandler} />
        );
    }

    return (
        <View style={styles.listContainer}>
            <FlatList data={CATEGORIES} 
            renderItem={renderCategoryItem}
            keyExtractor={(item) => item.id}
            numColumns={2}
            />
        </View>
    )
}

export default CategoriesScreen;

const styles = StyleSheet.create({
    listContainer: {
        alignItems: 'center',
        flex: 1,
        // backgroundColor: 'black'
    }
});