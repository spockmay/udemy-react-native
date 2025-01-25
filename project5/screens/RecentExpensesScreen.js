import { View, Text } from 'react-native'
import { useLayoutEffect } from 'react';

import AddExpenseButton from '../components/AddExpenseButton';

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
            <Text>Recent Expense</Text>
        </View>
    );
}

export default RecentExpensesScreen;