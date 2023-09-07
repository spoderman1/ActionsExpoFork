import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';

import { useState } from 'react';

export default function App() {
  const [counter, setCounter] = useState(0);
  return (
    <View style={styles.container}>
       <Text style={styles.countText}>{counter}</Text>
       <View style={styles.buttonContainer}>
        <Button title="Increment" onPress={() => setCounter(counter + 1)} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  countText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 150,
  }, 
  buttonContainer: {
    bottom: 80,
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    paddingHorizontal: 15,
  }
});

