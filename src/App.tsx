import React from 'react';
import { Route } from 'react-router-dom';
import HomePage from './pages/HomePage';

function App() {
  return (
    <>
      <Route path='/' exact component={HomePage} />
    </>
  );
}

export default App;
