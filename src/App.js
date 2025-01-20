import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
// import CarDetection from './CarDetection';
// import Support from './Support';
// import Customization from './Customization';
import Cariden from './Cariden';
import Contact from './Contact';
import InfoPage from './Landingpage';
import BlogPage from './Blog_iden';
import ProgressPage from './Progress';

function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<InfoPage/>} />
        <Route path="/Get-Started" element={<Home />} />
        <Route path="/car-detection" element={<BlogPage/>} />
        <Route path="/Support" element={<Contact/>} />
        <Route path="/start-identification" element={<Cariden/>} />
        <Route path="/Progress" element={<ProgressPage/>} />

        

       
        {/* <Route path="/support" element={<Support />} />
        <Route path="/3d-customization" element={<Customization />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
