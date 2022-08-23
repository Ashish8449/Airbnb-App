import React from 'react';

import {

  SafeAreaView,
  StatusBar,
  StyleSheet,

  Text,

  View,
} from 'react-native';
import Post from './src/components/Post';
import HomeScreen from './src/screens/Home';
import feed from './assets/data/feed'
import SearchResultScreen from './src/screens/SearchResult';
import DestionationSearch from './src/screens/DestinationSearch';


const App = () => {

  console.log(feed[0]);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        {/* <HomeScreen /> */}
        {/* <SearchResultScreen /> */}
        <DestionationSearch />

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
