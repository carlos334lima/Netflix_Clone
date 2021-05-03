import React from 'react';

import {DefaultTheme, Provider as PaperProvider} from 'react-native-paper';
import {StatusBar} from 'react-native';
console.disableYellowBox = true;

import Login from "./src/pages/Login";

const App = () => {

  const theme = {
    ...DefaultTheme,
    roundness: 5,
    colors: {
      ...DefaultTheme.colors,
      primary: '#E50914',
      background: '#3C3C3C',
      text: '#fff',
      placeholder: '#fff',
    },
  };

  return (
    <PaperProvider theme={theme}>
       <StatusBar backgroundColor="#000" />
      <Login />
    </PaperProvider>
  );
};

export default App;
