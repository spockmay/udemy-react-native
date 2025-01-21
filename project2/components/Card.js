import { View, StyleSheet } from 'react-native';
import Colors from '../utils/colors';


function Card({children}) {
    return (
        <View style={styles.card}>
            {children}
        </View>
    );
};

export default Card;

const styles = StyleSheet.create({
    card: {
        padding: 16,
        marginTop: 100,
        marginHorizontal: 24,
        borderRadius: 8,
        backgroundColor: Colors.primary700,
        alignItems: 'center',
        elevation: 4,
    }
});