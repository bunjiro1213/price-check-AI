import Constants from 'expo-constants';
import { Text, StyleSheet, View } from 'react-native';
import { Route, Routes, Navigate } from 'react-router-native';
import AppBar from './AppBar';
import RegisterPage from './Register';

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
      <Routes>
      <Route path="/" element={<AppBar />} />
      <Route path="/register" element={<RegisterPage />} />
      </Routes>

    </View>
  );
};

export default Main;