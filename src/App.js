import React from 'react';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  return (
    <div className="flex flex-col overflow-hidden bg-hero-pattern bg-center bg-cover">
      <Navigation />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
