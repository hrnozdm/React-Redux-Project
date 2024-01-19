import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Navbar from './components/Navbar/Navbar.jsx';
import PageContainer from './containers/PageContainer.jsx';
function App() {
  return (
    <div>
      
    <PageContainer>
    <Router>
      <Navbar/>
      <Routes>
         <Route path='' element={<Home/>} />
      </Routes>
    </Router>
    </PageContainer>
    </div>
  );
}

export default App;
