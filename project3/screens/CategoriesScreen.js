import { FlatList, StyleSheet, View } from 'react-native'

import { CATEGORIES } from '../data/dummy-data'

import CategoryGridTile from '../components/CategoryGridTile'

function renderCategoryItem(itemData) {
    return (
    <CategoryGridTile title={itemData.item.title} color={itemData.item.color} />
    );
}

function CategoriesScreen() {
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
        backgroundColor: 'black'
    }
});