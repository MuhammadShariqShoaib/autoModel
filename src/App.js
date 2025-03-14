import { ClerkProvider, SignedIn, SignedOut, UserButton, SignInButton } from '@clerk/react-router'
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import CarDetection from './CarDetection';
// import Support from './Support';
// import Customization from './Customization';
import InfoPage from './components/Pages/Landingpage';
import BlogPage from './components/Car Identification/Blog_iden';
import ProgressPage from './components/Pages/Progress';
import ThreeDModelBlog from './components/3D Modeling/ThreeDModelBlog';
import ChatSupportBlog from './components/Support/ChatSupportBlog';
import AutoModel from './components/Car Identification/AutoModel';
import Cariden from './components/Car Identification/Cariden';
import Home from './components/Pages/Home';
import Contact from './components/Pages/Contact';
import { SignUp } from '@clerk/clerk-react';

function App() {
  return (
    <Router>
      <Routes>

        <Route path='login' element={<SignedIn/>}/>
        <Route path='signup' element={<SignUp/>}/>
      <Route path="/" element={<InfoPage/>} />
        <Route path="/Get-Started" element={<Home/>} />
        <Route path="/car-detection" element={<BlogPage/>} />
        <Route path="/Support" element={<Contact/>} />
        <Route path="/start-identification" element={<Cariden/>} />
        <Route path="/Progress" element={<ProgressPage/>} />
        <Route path="/ThreeDModelBlog" element={<ThreeDModelBlog/>} />
        <Route path="/ChatSupportBlog" element={<ChatSupportBlog/>} />
        <Route path="/AutoModel" element={<AutoModel/>} />
        

       
        {/* <Route path="/support" element={<Support />} />
        <Route path="/3d-customization" element={<Customization />} /> */}
      </Routes>
    </Router>
  );
}

export default App;
