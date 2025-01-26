import { View, Text } from 'react-native'
import { useLayoutEffect } from 'react';

import AddExpenseButton from '../components/AddExpenseButton';
import ExpensesOverview from '../components/ExpensesOverview';

function RecentExpensesScreen({navigation, route}) {
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
            <ExpensesOverview period={"Last 7 days"} />
        </View>
    );
}

export default RecentExpensesScreen;