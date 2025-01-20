import { View, Text, Pressable, StyleSheet } from 'react-native'


function PrimaryButton({children, onPress}) {  
    return (
        <View style={styles.outerContainer}>
            <Pressable onPress={onPress} style={({pressed}) => pressed ? [styles.pressed, styles.innerContainer]: styles.innerContainer} android_ripple={{color: '#610533'}}>
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
        backgroundColor: '#72063c',
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