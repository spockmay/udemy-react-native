import { StyleSheet, View, Text } from 'react-native';

function TotalCost({period, expenses}) {

    const expensesSum = expenses.reduce( (sum, expense) => {
        return sum + expense.amount;
    }, 0 );

    return (
            <View style={styles.row}>
                <Text>{period}</Text>
                <Text>${expensesSum.toFixed(2)}</Text>
            </View>
    )
};

export default TotalCost;

const styles=StyleSheet.create({
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
        borderWidth: 1,
        backgroundColor: 'white',
        borderRadius: 4,
        padding: 6,
        margin: 6

    }
})