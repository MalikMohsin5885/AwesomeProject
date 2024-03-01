import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, Button, TextInput } from 'react-native';

export default function App() {
  number = "f" 
  return (
    <View style={styles.container}>
      <StatusBar translucent={true} />

      <View style={styles.top}>
        <Image
          style={{ width: 100, height: 100, }}
          source={require('./assets/icon.png')}
        />
      </View>
      <View style={styles.center}>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        />
      </View>

      <View style={styles.bottom}>
        <Button
          // onPress={onPressLearnMore}
          title="Learn More"
          color="#841584"
        // accessibilityLabel="Learn more about this purple button"
        />
      </View>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  top: {
    flex: 0.20,
    // backgroundColor:'red',
    alignItems: 'center',
    justifyContent: 'center',
  },
  center: {
    flex: 0.60,
    backgroundColor: 'green'

  },
  bottom: {
    flex: 0.20,
    // backgroundColor:'blue'
  }
});
