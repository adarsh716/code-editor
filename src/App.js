// App.js
import React from 'react';
import './App.css';
import { Route, Routes} from 'react-router-dom';
import UserSignIn from './components/Signin';
import UserSignUp from './components/Signup'; 
import HomeScreen from './components/HomeScreen';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<HomeScreen />} />
        <Route path='/signin' element={<UserSignIn  />} />
        <Route path='/signup' element={<UserSignUp/>} />
      </Routes>
    </div>
  );
}

export default App;
