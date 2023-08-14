
import React from 'react';
import NavBar from './components/Navbar';
import BodyContent from './components/Body';
import HeroBody from './components/Hero';

function App() {
  return (
    <div className='App'>
     <NavBar></NavBar>
     <HeroBody></HeroBody>
     <BodyContent></BodyContent>
    </div>
  );
}


export default App;