import { Text, StyleSheet } from 'react-native'
import Colors from '../utils/colors'

function GameScreen({children}) { 
    return (
        <Text style={styles.title}>{children}</Text>
    )
};

export default GameScreen

const styles = StyleSheet.create({
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 24,
        color: Colors.secondary500,
        textAlign: 'center',
        borderWidth: 2,
        borderColor: Colors.secondary500,
        padding: 2,
    }
});