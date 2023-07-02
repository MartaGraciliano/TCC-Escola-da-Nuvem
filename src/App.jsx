import React from 'react';
import './App.css';
import Vacancies from './components/Vacancies';
import Header from './components/Header';
import Forms from './components/Forms';

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Vacancies />
        <Forms />
      </main>
      <footer className='footer-container'>
        <p>&copy; {new Date().getFullYear()} Site de Empregabilidade</p>
      </footer>
    </div>
  );
}

export default App;
