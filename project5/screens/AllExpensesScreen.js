import { View, Text } from 'react-native'
import { useLayoutEffect } from 'react';

import AddExpenseButton from '../components/AddExpenseButton';
import ExpensesOverview from '../components/ExpensesOverview';

function AllExpensesScreen({navigation, route}) {
    function headerButtonPressHandler() {
        navigation.navigate('ModifyExpense');
    }

    // Set the navigation title
    useLayoutEffect(() => {
        navigation.setOptions({headerRight: () => {return <AddExpenseButton onPress={headerButtonPressHandler} />}
                               })
    }, [])

    return (
        <View>
            <ExpensesOverview period={"All expenses"} />
        </View>
    );
}

export default AllExpensesScreen;