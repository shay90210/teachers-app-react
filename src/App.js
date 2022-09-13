import NavigationBar from './components/NavigationBar';
import Header from './components/Header';
import Carousel from './components/Carousel';
import React from 'react';
import './App.scss';

function App() {
  return (
    <div className="App">
      <NavigationBar />
      <Header />
      <Carousel />
    </div>
  );
}

export default App;
