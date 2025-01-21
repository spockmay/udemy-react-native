import { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native'
import Entypo from '@expo/vector-icons/Entypo';

import PrimaryButton from '../components/PrimaryButton'
import TitleText from '../components/TitleText';
import Colors from '../utils/colors'
import Card from '../components/Card';


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
    }, [guess, props.numToGuess, props.onGameOver]);

    return (
        <View style={styles.screen}>
            <TitleText>Opponent's Guess</TitleText>
            <Card>
                <Text style={styles.guessText}>{guess}</Text>
                <View style={styles.buttonRow}>
                    <PrimaryButton onPress={guessTooHigh}><Entypo name="plus" size={24} color="white" /></PrimaryButton>
                    <PrimaryButton onPress={guessTooLow}><Entypo name="minus" size={24} color="white" /></PrimaryButton>
                </View>
            </Card>
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