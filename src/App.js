import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Pages/Home';
// import CarDetection from './CarDetection';
// import Support from './Support';
// import Customization from './Customization';
import Cariden from './components/Car Identification/Cariden';
import Contact from './components/Pages/Contact';
import InfoPage from './components/Pages/Landingpage';
import BlogPage from './components/Car Identification/Blog_iden';
import ImageComparisonUpload from './components/Pages/Progress';
import ThreeDModelBlog from './components/3D Modeling/ThreeDModelBlog';
import ChatSupportBlog from './components/Support/ChatSupportBlog';
import AutoModel from './components/Car Identification/AutoModel';
import CarDetails from './components/Car Identification/carDetails';
import CarSpecs from './components/Pages/carSpecs';
import CarComparison from './components/Pages/carComp';
import Sidebar from './components/Pages/Sidebar';
import CarVariants from './components/Pages/carVar';


function App() {
  return (
    <Router>
      <Routes>
      <Route path="/" element={<InfoPage/>} />
        <Route path="/Get-Started" element={<Home />} />
        <Route path="/car-detection" element={<BlogPage/>} />
        <Route path="/Support" element={<Contact/>} />
        <Route path="/start-identification" element={<Cariden/>} />
        {/* <Route path="/Progress" element={<ImageComparisonUpload/>} /> */}
        <Route path="/ThreeDModelBlog" element={<ThreeDModelBlog/>} />
        <Route path="/ChatSupportBlog" element={<ChatSupportBlog/>} />
        <Route path="/AutoModel" element={<AutoModel/>} />
        <Route path="/carDetails" element={<CarDetails/>} />
        <Route path="/carSpecs" element={<CarSpecs/>} />
        <Route path="/CarComparison" element={<CarComparison/>} />
        <Route path="/Sidebar" element={<Sidebar/>} />
        <Route path="/CarVariants" element={<CarVariants/>} />



        


        

       
        {/* <Route path="/support" element={<Support />} />
        <Route path="/3d-customization" element={<Customization />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
