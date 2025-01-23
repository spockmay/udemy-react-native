import { Pressable, View, Text, StyleSheet } from 'react-native';

function CategoryGridTile({title, color}) {
    return (
        <View style={[styles.tile, {backgroundColor: color}]}>
            <Pressable>
                <View style={styles.textView}>
                    <Text style={styles.text}>{title}</Text>
                </View>
            </Pressable>
        </View>
    )
}

export default CategoryGridTile;

const styles = StyleSheet.create({
    tile: {
        width: 150,
        height: 150,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: 'black',
        padding: 12,
        margin: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    }

});
