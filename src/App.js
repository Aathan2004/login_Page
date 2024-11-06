import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './component/LoginPage';
import BookingPage1 from './component/BookingPage1';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/booking" element={<BookingPage1/>} />
      </Routes>
    </Router>
  );
}

export default App;
