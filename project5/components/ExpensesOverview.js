import { StyleSheet, View, Text, FlatList } from 'react-native';
import TotalCost from './TotalCost';
import ExpensesList from './ExpensesList';

const EXPENSES = [
    { id: 1, description: 'description goes here', amount: 59.99, date: new Date('2025-01-26')},
    { id: 2, description: 'another expense', amount: 0.99, date: new Date('2025-01-20')},
    { id: 3, description: 'bananas', amount: 5.99, date: new Date('2025-01-18')},
    { id: 4, description: 'beer', amount: 12.99, date: new Date('2025-01-19')},
    { id: 5, description: 'alpaca', amount: 99.99, date: new Date('2025-01-23')},
    { id: 6, description: 'monkey', amount: 6.99, date: new Date('2024-12-20')},        
]

function ExpensesOverview({expenses, period}) {
    return (
        <>
            <View style={styles.header}>
                <TotalCost period={period} expenses={EXPENSES}/>
            </View>
            <View style={styles.dataArea}> 
                <ExpensesList expenses={EXPENSES} period={period} />
            </View>
        </>
    );
};

export default ExpensesOverview;

const styles=StyleSheet.create({
    header: {
        alignItems: 'center',
    },
    dataArea: {
        alignItems: 'center',
    }
})