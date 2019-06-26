import React from 'react';
import { StyleSheet, View,Text } from 'react-native';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers';
import SearchBar from './components/SearchBar/SearchBar';
import SearchResults from './components/SearchResults/SearchResults';

class App extends React.Component {
  render() {
    const store = createStore(rootReducer);

    store.subscribe(() => console.log('store', store.getState()));
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <SearchBar />
          <SearchResults />
        </View>
      </Provider>

    );
  }
}

export default App;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});



