import { Routes, Route, useNavigate } from 'react-router-dom';
import { Login } from './components/components';
import { Home } from './container/container';
import './App.css';

function App() {
  return (
    <Routes>
      <Route path='login' element={<Login />} />
      <Route path='/*' element={<Home />} />
    </Routes>
  );
}

export default App;
