import { View, Text, StyleSheet, Image, Pressable } from 'react-native';


function MealItem({title, imageURL, onPress}) {
    return (
        <View style={styles.container}>
            <Pressable style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]} onPress={onPress}>
                <Image source={{uri: imageURL}} style={styles.image}/>
                <Text style={styles.title}>{title}</Text>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    container: {
        margin: 8,
        flex: 1,
        borderWidth: 1,
        borderRadius: 16,
        borderColor: 'white',
        overflow: 'hidden',
    },
    image: {
        width: '100%',
        height: 200,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
        margin: 16,
    },
    button: {

    },
    buttonPressed: {
        opacity: 0.5,
    }
});