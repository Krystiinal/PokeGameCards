import React from 'react';
import Header from './Components/Header';
import Footer from './Components/Footer';
import './App.css';

interface AppProps {
  // interface
}

const App: React.FC<AppProps> = () => {
  let cards = [];
  let firstCard, secondCard;
  let lockBoard = false;
  let score = 0;


  return (
    <div className="App">
      <Header />
      <div className='Section'>
        <h1>MEMORY CARD</h1>
        <div className='Container grid grid-cols-6 justify-center gap-4 auto-rows-[calc(140px/2*3)] w-[840px] mx-auto'></div>
        <p>Score : <span className='Score'></span></p>
        <div className='Actions'>
          {/* <button onClick={restart()}>Restart</button> */}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
