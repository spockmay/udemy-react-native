import { Text, StyleSheet } from 'react-native'

function GameScreen({children}) { 
    return (
        <Text style={styles.title}>{children}</Text>
    )
};

export default GameScreen

const styles = StyleSheet.create({
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#ddb25f',
        textAlign: 'center',
        borderWidth: 2,
        borderColor: '#ddb25f',
        padding: 2,
    }
});