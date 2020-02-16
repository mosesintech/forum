import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import Header from './components/Views/Header';
import Register from './components/UserActions/Profile/Register';
import Login from './components/UserActions/Profile/Login';
import AllBoards from './components/Views/Forum/AllBoards';
// import NotLoggedIn from './components/Views/NotLoggedIn';
import SingleCategory from './components/Views/Forum/SingleCategory';
import SingleBoard from './components/Views/Forum/SingleBoard';
import SingleThread from './components/Views/Threads/SingleThread';
import UserProfile from './components/Views/Users/UserProfile';
import Footer from './components/Views/Footer';
import AddThread from './components/UserActions/Threads/AddThread';

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
          <Route path='/user' component={UserProfile} />
          <Route path='/newthread' component={AddThread} />
          <Route path='/register' component={Register} />
          <Route path='/login' component={Login} />
        </div>
        <Footer />
      </Router>
    </>
  );
}

export default App;