import React from 'react';

import {

  SafeAreaView,
  StatusBar,
  StyleSheet,

  Text,

  View,
} from 'react-native';
import HomeScreen from './src/screens/Home';



const App = () => {


  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <HomeScreen />
      </SafeAreaView>

    </>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1
  },

});

export default App;
