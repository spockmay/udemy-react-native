import { FlatList, Pressable, StyleSheet, View, Text } from 'react-native';
import ExpenseItem from './ExpenseItem';

function renderer(itemData) {
return (<ExpenseItem expense={itemData.item} />);
}

function ExpensesList({expenses, period}) {
    return (
        // <FlatList data={data} keyExtractor={(item)=>item.id} renderItem={(itemData)=><ExpenseItem expense={itemData.item} />} />
        <View style={styles.container}>
            <FlatList data={expenses} keyExtractor={(item)=>item.id} renderItem={renderer} />
        </View>
    );
};

export default ExpensesList;

const styles=StyleSheet.create({
    container: {
        width: '80%',
    }
})