import { View, Text, Image, StyleSheet } from 'react-native'

import TitleText from '../components/TitleText';
import Card from '../components/Card';
import Colors from '../utils/colors'
import PrimaryButton from '../components/PrimaryButton'

function GameOverScreen(props) {
    return (
        <View style={styles.rootContainer}>
            <TitleText>Game Over!</TitleText>
            <View style={styles.imageContainer}>
                <Image source={require('../assets/images/success.png')} style={styles.image} />
            </View>
            <View>
                <Text style={styles.summary}>Your phone needed <Text style={styles.highlight}>{props.numRounds}</Text> rounds to guess the number <Text style={styles.highlight}>{props.numToGuess}</Text>.</Text>
            </View>
            <PrimaryButton onPress={props.onStartNewGame}>Start New Game</PrimaryButton>
        </View>
    )
}

export default GameOverScreen;

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
    },
    imageContainer: {
        borderRadius: 150,
        width: 300,
        height: 300,
        borderWidth: 3,
        borderColor: Colors.primary800,
        overflow: 'hidden',
        margin: 36,
    },
    rootContainer: {
        flex: 1,
        padding: 24,
        justifyContent: 'center',
        alignItems: 'center',
    },
    summary: {
        fontFamily: 'open-sans',
        fontSize: 24,
        textAlign: 'center',
        marginBottom: 24,
    },
    highlight: {
        color: Colors.primary500,
        fontFamily: 'open-sans-bold',
    }
});