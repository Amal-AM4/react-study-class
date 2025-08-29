// import axios from 'axios';
import './App.scss'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Main from './pages/Main';
import Login from './pages/Login';
import AboutUs from './pages/AboutUs';
import Product from './pages/Product';



function App() {


  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />      {/* default route */}
        <Route path="/login" element={<Login />} />
        <Route path="/aboutus" element={<AboutUs />} />
        <Route path="/product/:id" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App;
