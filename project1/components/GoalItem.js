import { StyleSheet, View, Text } from "react-native";

function GoalItem(props) {
    return <View style={styles.listItem}><Text>{props.text}</Text></View>
};

export default GoalItem;

const styles = StyleSheet.create({
    listItem: {
        padding: 10,
        margin: 10,
        borderWidth: 1,
        borderRadius: 10,
      },
    });