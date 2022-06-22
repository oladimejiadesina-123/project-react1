import React, { useState } from 'react';
import './App.css';
// import Footer from './Footer/Footer';
// import Header from './Header/Header';
import Counter from './project/Counter';
// import BirthdayRemembrance from './project/BirthdayRemembrance';
// import data from './Data/data'


function App() {
  // const [people, setPeople] = useState(data)
  return (
    <div className="app">
      <Counter />
      {/* <section>
      <h3>{people.length} birthdays today</h3>
      <BirthdayRemembrance people={people}/>
      <button onClick={() => setPeople([])}>clear all</button>
      </section> */}
    </div>
  );
}

export default App;
