import { View, Text, StyleSheet, FlatList } from 'react-native';


function MealDetails({affordability,complexity,duration,ingredients,steps}) {
    return (
    <View>
        <View style={styles.row}>
            <Text style={styles.text}>DURATION: {duration}m</Text>   
            <Text style={styles.text}>{complexity.toUpperCase()}</Text>
            <Text style={styles.text}>{affordability.toUpperCase()}</Text>
        </View>
        <Text style={[styles.text, styles.heading]}>INGREDIENTS:</Text>
        <FlatList data={ingredients} keyExtractor={(ingredient)=>ingredient} renderItem={(itemData)=><Text style={styles.text}>• {itemData.item}</Text>} />
        <Text style={[styles.text, styles.heading]}>DIRECTIONS:</Text>
        <FlatList data={steps} keyExtractor={(step)=>step} renderItem={(itemData)=><Text style={styles.text}>{itemData.index+1}. {itemData.item}</Text>} />
    </View>);
}

export default MealDetails;

const styles=StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 8,
    },
    heading: {
        fontWeight: 'bold',
        fontSize: 18,
        marginTop: 12,
        textDecorationLine: 'underline',
    },
    text: {
        color: 'white',
        margin: 2,
    }
})