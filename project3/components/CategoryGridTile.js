import { Pressable, View, Text, StyleSheet } from 'react-native';

function CategoryGridTile({title, color, onPress}) {
    return (
        <View style={[styles.tile,]}>
            <Pressable style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]} onPress={onPress}>
                <View style={[styles.textView ,{backgroundColor: color}]} >
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
        margin: 12,
        overflow: 'hidden',
    },
    text: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    textView: {
        flex: 1,
        alignItems: 'center',
        borderRadius: 8,
        justifyContent: 'center',
        padding: 12,
        borderWidth: 1,
        borderColor: 'black',
    },
    button: {
        flex: 1,
    },
    buttonPressed: {
        opacity: 0.5,
    }

});
