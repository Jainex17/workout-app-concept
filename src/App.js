import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Page1 from './components/StartingPage/Page1';
import Page2 from './components/StartingPage/Page2';
import Signup from './components/SignUp';
import SignIn from './components/SignIn';
import Goals from './components/Goals';
import Home from './components/Home';
import Calendar from './components/Calendar';

function App() {
  return (
    <>
      <div className='mx-auto w-96 h-screen py-3'>
        <div className='bg-[#FCFCFC] border rounded-xl h-full'>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Page1 />} />
          <Route path="/page2" element={<Page2 />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/goals" element={<Goals />} />
          <Route path="/home" element={<Home />} />
          <Route path="/calendar" element={<Calendar />} />
        </Routes>
      </BrowserRouter>
        </div>
      </div>
    </>
  );
}

export default App;
