import React from 'react';
import Header from './components/Views/Header';
import AllBoards from './components/Views/Forum/AllBoards';
import NotLoggedIn from './components/Views/NotLoggedIn';
import Footer from './components/Views/Footer';

function App() {
  return (
    <>
      <Header />
      <NotLoggedIn />
      <div className='container'>
        <AllBoards />
      </div>
      <Footer />
    </>
  );
}

export default App;