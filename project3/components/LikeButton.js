
import { Pressable, StyleSheet } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

function LikeButton({filled, onPress}) {
    return (
        <Pressable onPress={onPress} style={({pressed}) => [styles.button, pressed ? styles.buttonPressed : null]}>
            <AntDesign 
                name={filled ? "heart" : "hearto"} 
                size={24} color="white" />
        </Pressable>
    )
};

export default LikeButton;

const styles=StyleSheet.create({
    buttonPressed: {
        opacity: 0.5,
    }
})