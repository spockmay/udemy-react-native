
import { Pressable, StyleSheet, View, Text } from 'react-native';

function ExpenseItem({onPress, expense}) {
    return (
        // <Pressable onPress={onPress} style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}>
            <View style={styles.row}>
                <View>
                    <Text>{expense.description}</Text>
                    <Text>{expense.date.toDateString()}</Text>
                </View>
                <Text>{expense.amount}</Text>                                
            </View>
        // </Pressable>
    )
};

export default ExpenseItem;

const styles=StyleSheet.create({
    buttonPressed: {
        opacity: 0.5,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 8,
        padding: 4,
        borderWidth: 1,
        borderRadius: 4,
        borderColor: 'black',
    }
})