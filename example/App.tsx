import { StyleSheet, Text, View } from 'react-native';

import * as ExpoGooglePlaces from 'expo-google-places';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoGooglePlaces.hello()}</Text>
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
