import React from 'react';
import {
  Route,
  Routes,
} from 'react-router-dom';
import { Provider } from 'react-redux';
import './App.css';
import NavBar from './components/navbar';
import MyProfile from './components/MyProfile';
import Dragons from './components/Dragons';

function App() {
  return (
    <Provider>
      <NavBar className="header" />
      <Routes>
        <Route
          path="/dragons"
          element={<Dragons />}
        />
        <Route
          path="/myprofile"
          element={<MyProfile />}
        />
      </Routes>
    </Provider>
  );
}

export default App;
