import {useState} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View,Button } from 'react-native';

export default function App() {
  const[count,setCount]=useState(0);
  return (
    <View style={styles.container}>
      <Text style={styles.text}>This is my first react native application</Text>
      <Text style={styles.counter}>{count}</Text>
      <Button
      title="This is a self closing button please click me"
      color="green"
      onPress={() => setCount(count+10)}
      />
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
  text:{
    fontSize: 24,
    color: 'blue',
    margin: 10,
  },
    counter:{
    fontSize: 14,
    color: 'red',
    margin: 10,
  }
});
