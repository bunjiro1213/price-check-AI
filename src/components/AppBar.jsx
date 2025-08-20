import { View, Image, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'darkgray',
  },
  image: {
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../images/logo(2).png')} />
    </View>
  );
};

export default AppBar;