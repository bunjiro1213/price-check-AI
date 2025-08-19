import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';
import AppBar from './AppBar';

const styles = StyleSheet.create({
  container: {
    marginTop: Constants.statusBarHeight,
    flexGrow: 1,
    flexShrink: 1,
  },
});

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar/>
    </View>
  );
};

export default Main;