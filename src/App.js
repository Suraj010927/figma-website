import logo from './logo.svg';
import './App.css';
import Dashboard from './Dashboard';
import Home from './Home'
import NavBar from './NavBar';
import Footer from './Footer'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Router>
      <>
        <NavBar />
        <Routes>
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/" element={<Home/>} />
        </Routes>
        <Footer />

      </>
    </Router>
  );
}

export default App;
