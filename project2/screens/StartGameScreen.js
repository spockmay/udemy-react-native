import { View, TextInput, StyleSheet } from 'react-native'
import PrimaryButton from '../components/PrimaryButton';

function StartGameScreen() {
    return (
        <View style={styles.container}>
            <TextInput style={styles.textInput} maxLength={2} keyboardType="number-pad" autoCorrect={false} />
            <View style={styles.buttons}>
                <View style={styles.button}>
                    <PrimaryButton>Reset</PrimaryButton>
                </View>
                <View style={styles.button}>
                    <PrimaryButton>Confirm</PrimaryButton>
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
  