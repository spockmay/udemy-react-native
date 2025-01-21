import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import PrimaryButton from '../components/PrimaryButton'

import TitleText from '../components/TitleText';
import Colors from '../utils/colors'


function GameScreen(props) {

    const [guess, setGuess] = useState(50);
    const [delta, setDelta] = useState(50);

    function computeNewDelta(oldDelta) {
        let d = parseInt(delta/2)
        return d > 0 ? d : 1
    }

    function guessTooLow() {
        setDelta(computeNewDelta(delta));
        setGuess(guess + computeNewDelta(delta));
    }

    function guessTooHigh() {
        setDelta(computeNewDelta(delta));
        setGuess(guess - computeNewDelta(delta));
    }

    useEffect(() => {
        if (guess === props.numToGuess) {
            console.log('end game')
            props.onGameOver(true)
        }
    });

    return (
        <View style={styles.screen}>
            <TitleText>Opponent's Guess</TitleText>
            <Text style={styles.guessText}>{guess}</Text>
            <View style={styles.buttonRow}>
                <PrimaryButton onPress={guessTooHigh}>+</PrimaryButton>
                <PrimaryButton onPress={guessTooLow}>-</PrimaryButton>
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
        justifyContent: 'center',
    },
    guessText: {
        textAlign: 'center',
        fontSize: 36,
        fontWeight: 'bold',
        color: Colors.secondary500,
    }
});