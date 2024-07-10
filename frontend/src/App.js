import React from 'react';
import './assets/styles/App.css';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/Home';
import Webinars from './pages/Webinars';
import DailyDevotional from './pages/DailyDevotional';
import Shop from './pages/Shop';
import Mentorship from './pages/Mentorship';
import HealthWellness from './pages/HealthWellness';
import NewItemForm from './components/NewItemForm';
//import NewItemForm from './pages/NewItemForm';
//import Checkout from './pages/Checkout';
//import Navbar from './components/Navbar';
import Footer from './components/footer';
//import Cart from './pages/Cart';

function App() {
  return (
    <Router>
      <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Header />
      <div style={{ flex: '1' }}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/webinars" element={<Webinars />} />
        <Route path="/devotional" element={<DailyDevotional />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/mentorship" element={<Mentorship />} />
        <Route path="/health" element={<HealthWellness />} />
        {/*<Route path="/shop" component={Shop} />*/}
        <Route path="/add-item" element={<NewItemForm />} />
        <Route path="/" exact component={Shop} />
        {/*<Route path="/checkout" component={Checkout } />*/}
      </Routes>
       </div>
        <Footer />
      </div>
    </Router>
    
  );
}

export default App;
