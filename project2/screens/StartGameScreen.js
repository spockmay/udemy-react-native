import { useState } from 'react'
import { View, TextInput, StyleSheet, Alert } from 'react-native'
import PrimaryButton from '../components/PrimaryButton';
import Colors from '../utils/colors'

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
        <View style={styles.container}>
            <TextInput onChangeText={numInputHandler} style={styles.textInput} maxLength={2} keyboardType="number-pad" autoCorrect={false} value={enteredNum} />
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
                </View>
                <View style={styles.button}>
                    <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
                </View>
            </View>
        </View>
    );
}

export default StartGameScreen;

const styles = StyleSheet.create({
    container: {
      padding: 16,
      marginTop: 100,
      marginHorizontal: 24,
      borderRadius: 8,
      backgroundColor: Colors.primary700,
      alignItems: 'center',
      elevation: 4,
    },
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
    }
  });
  