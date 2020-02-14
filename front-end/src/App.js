import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Views/Header';
import AllBoards from './components/Views/Forum/AllBoards';
// import NotLoggedIn from './components/Views/NotLoggedIn';
import SingleCategory from './components/Views/Forum/SingleCategory';
import SingleBoard from './components/Views/Forum/SingleBoard';
import SingleThread from './components/Views/Threads/SingleThread';
import Footer from './components/Views/Footer';

function App() {
  return (
    <>
      <Router>
        <Header />
        <div className='container'>
          <Route exact path='/' component={AllBoards} />
          <Route path='/category' component={SingleCategory} />
          <Route path='/forum' component={SingleBoard} />
          <Route path='/thread' component={SingleThread} />
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;