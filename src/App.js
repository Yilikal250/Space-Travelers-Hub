import { Route, Routes } from 'react-router-dom';
import './App.css';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
