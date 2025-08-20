import { View, Image, StyleSheet, Text, Pressable } from 'react-native';

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingBottom: 150,
  },
  image: {
    width: 100,
    height: 100,
  },
  text: {
    color: 'black',
    fontSize: 16,
    fontWeight: 'bold',
  },
  text2: {
    color: 'black',
    fontSize: 14,
  },
  button: {
    backgroundColor: '#00ADB5',
    paddingVertical: 15,
    paddingHorizontal: 60,
    borderRadius: 25,
    marginVertical: 10,
    width: 280,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  buttonContainer: {
    position: 'absolute',
    bottom: 100,
    alignItems: 'center',
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  text3: {
    color: '#00ADB5',
    fontSize: 14,
    textAlign: 'center',
  },
});

const AppBar = () => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={require('../images/logo(2).png')} />
      <Text style={styles.text}>Welcome</Text>
      <Text style={styles.text2}>Start or sign in to your account</Text>
      <View style={styles.buttonContainer}>
      <Pressable onPress={() => {}} style={styles.button}>
         <Text style={styles.buttonText}>Start</Text>
      </Pressable>
      <Text style={styles.text2}> Already have an account? </Text>
      <Pressable onPress={() => {}}>
        <Text style={styles.text3}>Sign in</Text>
      </Pressable>
      </View>
    </View> 
  );
};

export default AppBar;