import {Text, View, StyleSheet} from 'react-native'
import Colors from '../utils/colors'

function RoundLog (props) {
    return (
        <View style={styles.logContainer}>
            <Text style={styles.logText}>Phone guessed {props.text}</Text>
        </View>
    )
}

export default RoundLog;

const styles=StyleSheet.create({
    logContainer: {
        borderRadius: 40,
        borderWidth: 1,
        borderColor: Colors.primary700,
        backgroundColor: Colors.secondary500,
        margin: 8,
        padding: 8,
        elevation: 4,
    },
    logText: {
        fontFamily: 'open-sans',
    }
});