import { View, Text, Pressable, StyleSheet } from 'react-native'

import Colors from '../utils/colors'


function PrimaryButton({children, onPress}) {  
    return (
        <View style={styles.outerContainer}>
            <Pressable onPress={onPress} style={({pressed}) => pressed ? [styles.pressed, styles.innerContainer]: styles.innerContainer} android_ripple={{color: Colors.primary600}}>
                <Text style={styles.buttonText}>{children}</Text>
            </Pressable>
        </View>
    );
}

export default PrimaryButton;

const styles = StyleSheet.create({
    outerContainer: {
        borderRadius: 28,
        overflow: 'hidden',
        margin: 4,
    },
    innerContainer: {
        backgroundColor: Colors.primary500,
        elevation: 2,
        paddingHorizontal: 16,
        paddingVertical: 8,
    },
    buttonText: {
        color: 'white',
        textAlign: 'center'
    },
    pressed: {
        opacity: 0.75,
    }
});