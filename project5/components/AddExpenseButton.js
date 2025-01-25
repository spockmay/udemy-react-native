
import { Pressable, StyleSheet } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

function AddExpenseButton({onPress}) {
    return (
        <Pressable onPress={onPress} style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}>
            <Ionicons 
                name="add"
                size={24} color="black" />
        </Pressable>
    )
};

export default AddExpenseButton;

const styles=StyleSheet.create({
    buttonPressed: {
        opacity: 0.5,
    },
    button: {
        paddingRight: 16,
    }
})