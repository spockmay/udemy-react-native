import { View, Text, StyleSheet, Image, Pressable } from 'react-native';


function MealItem({title, imageURL}) {
    return (
        <View style={styles.container}>
            <Pressable style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}>
                <Image source={{uri: imageURL}} style={styles.image}/>
                <Text style={styles.title}>{title}</Text>
            </Pressable>
        </View>
    )
}

export default MealItem;

const styles = StyleSheet.create({
    container: {
        padding: 16,
        margin: 8,
        flex: 1,
        borderWidth: 1,
        borderRadius: 16,
        borderColor: 'white',
    },
    image: {
        width: 300,
        height: 200,
        marginBottom: 8,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 16,
        color: 'white',
    },
    button: {

    },
    buttonPressed: {
        opacity: 0.5,
    }
});