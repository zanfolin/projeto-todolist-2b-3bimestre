import { StatusBar } from 'expo-status-bar';
import { Image, StyleSheet, Text, View } from 'react-native';
import logo from './assets/icon_todo_list.png'

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <Image source={logo} />
      </View>
      <Text>Projeto 2B - 12+1/08/2025</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
