import { View, Text, StyleSheet } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

function GameScreen() {
    return (
        <View style={styles.screen}>
            <Text>Opponent's Guess</Text>
            <Text>GUESS</Text>
            <View>
                <PrimaryButton>+</PrimaryButton>
                <PrimaryButton>-</PrimaryButton>
            </View>
            <View>
                <Text>Round Logs</Text>
            </View>
        </View>
)};

export default GameScreen

const styles = StyleSheet.create({
    screen: { 
        flex: 1,
        padding: 12,
    }
});