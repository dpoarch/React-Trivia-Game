import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import IntroScreen from "./src/screens/intro";
import QuestionsScreen from "./src/screens/questions";
import ResultsScreen from "./src/screens/results";
import { StackNavigator } from 'react-navigation';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";
import reducers from "./src/reducers";

const Navigator = StackNavigator(
  {
    Intro: { screen: IntroScreen },
    Questions: { screen: QuestionsScreen },
    Results: { screen: ResultsScreen }
  },
  {
    headerMode: "none"
  }
);


export default class App extends React.Component {
  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Navigator />
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
