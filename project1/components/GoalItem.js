import { StyleSheet, View, Text, Pressable } from "react-native";

function GoalItem(props) {
    return (
        <View style={styles.listItem}>
            <Pressable 
                android_ripple={{color:'#eeeeee'}} 
                onPress={(props.onDeleteItem.bind(this, props.id))}>
                <Text style={styles.goalText}>{props.text}</Text>
            </Pressable>
        </View>
)};

export default GoalItem;

const styles = StyleSheet.create({
    listItem: {
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
      },
    goalText: {
        padding: 10,
    }
    });