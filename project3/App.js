import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import CategoriesScreen from './screens/CategoriesScreen';

export default function App() {
  return (
    <SafeAreaView style={{flex: 1}}>
      <CategoriesScreen />
      <StatusBar style="dark" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({

});
