import { useState } from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
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
            alert("Enter a number between 1 and 99!");
        }
        
        // Load the GameScreen
        return;
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
      backgroundColor: '#4e0329',
      alignItems: 'center',
      elevation: 4,
    },
    textInput: {
        height: 60,
        width: 120,
        fontSize: 32,
        borderBottomColor: '#ddb52f',
        borderBottomWidth: 2,
        marginBottom: 16,
        color: '#ddb52f',
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
  