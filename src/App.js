import './App.css';
import Menu from './components/menu';
import Home from './components/home';
import Users from './components/users';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { getUserData } from './store/store';
import { useEffect } from 'react';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUserData( 10 ));
  }, [dispatch]);

  return (
      <Router>
        <Menu/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/users' element={<Users/>}/>
        </Routes>
      </Router>
  );
}

export default App;
