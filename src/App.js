import { Route, Routes } from 'react-router-dom';
import './App.css';
import MyProfile from './components/MyProfile';
import Rockets from './components/Rockets';
import Dragons from './components/Dragons';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Rockets />} />
        <Route path="/rockets" element={<Rockets />} />
        <Route path="/dragons" element={<Dragons />} />
        <Route path="/myprofile" element={<MyProfile />} />
      </Routes>
    </div>
  );
}

export default App;
