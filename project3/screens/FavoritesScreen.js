import { Text, StyleSheet, View } from 'react-native'



function FavoritesScreen({navigation}) {
    return (
        <View style={styles.listContainer}>
            <Text>Favorites</Text>
        </View>
    )
}

export default FavoritesScreen;

const styles = StyleSheet.create({
    listContainer: {
        alignItems: 'center',
        flex: 1,
        // backgroundColor: 'black'
    }
});