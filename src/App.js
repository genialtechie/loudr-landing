import React, { useRef } from 'react';
import Navigation from './components/Navigation';
import Main from './components/Main';
import Footer from './components/Footer';

function App() {
  const ref = useRef(null);
  return (
    <div className="flex flex-col overflow-hidden bg-hero-pattern bg-center bg-cover">
      <Navigation />
      <Main reference={ref} />
      <Footer ref={ref} />
    </div>
  );
}

export default App;
