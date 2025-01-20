import { View, Text, StyleSheet } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

import TitleText from '../components/TitleText';


function GameScreen(props) {   
    return (
        <View style={styles.screen}>
            <TitleText>Opponent's Guess</TitleText>
            <Text>{props.numToGuess}</Text>
            <View style={styles.buttonRow}>
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
        padding: 24,
    },
    buttonRow: {
        flexDirection: 'row',
    },
});