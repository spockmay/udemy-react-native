import { useState } from 'react'
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native'
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../utils/colors'
import TitleText from '../components/TitleText';
import Card from '../components/Card';

function StartGameScreen({onPickNumber}) {
    const [enteredNum, setEnteredNum] = useState("")

    function numInputHandler(enteredText) {
        setEnteredNum(enteredText)
    }

    function resetInputHandler() {
        setEnteredNum("");
    }

    function confirmInputHandler() {
        const chosenNum = parseInt(enteredNum)
        if (isNaN(chosenNum) || chosenNum < 1 || chosenNum > 99) {
            Alert.alert("Invalid entry", "Enter a number between 1 and 99!");
            return;
        }
        
        // Load the GameScreen
        onPickNumber(chosenNum);
    }

    return (
        <View style={styles.rootContainer}>
            <TitleText>Guess My Number!</TitleText>
            <Card>
                <Text style={styles.instructions}>Enter a number</Text>
                <TextInput onChangeText={numInputHandler} style={styles.textInput} maxLength={2} keyboardType="number-pad" autoCorrect={false} value={enteredNum} />
                <View style={styles.buttons}>
                    <View style={styles.button}>
                        <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                    </View>
                    <View style={styles.button}>
                        <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                    </View>
                </View>
            </Card>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    textInput: {
        height: 60,
        width: 120,
        fontSize: 32,
        borderBottomColor: Colors.secondary500,
        borderBottomWidth: 2,
        marginBottom: 16,
        color: Colors.secondary500,
        marginVertical: 8,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    buttons: {
        flexDirection: 'row',
        justifyContent: 'center'
    },
    button: {
        flex: 1,
    },
    rootContainer: {
        paddingTop: 100,
        alignItems: 'center',
    },
    instructions: {
        color: Colors.secondary500,
        fontFamily: 'open-sans',
        fontSize: 24,
    }
  });
  