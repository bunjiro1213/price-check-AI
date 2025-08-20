import { View, Image, StyleSheet, Text, Pressable } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    flex: 1,
    paddingBottom: 150,
  },
});

const RegisterPage = () => {
  return (
    <View style={styles.container}>
    <Text>Register</Text>
    </View>
    );
};

export default RegisterPage;