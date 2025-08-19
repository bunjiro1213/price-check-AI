import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'red',
    height: 50,
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Text>Price Check AI</Text>
    </View>
  );
};

export default AppBar;