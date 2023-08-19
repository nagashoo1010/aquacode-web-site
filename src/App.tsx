/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import './App.css'

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { Header } from "./components/layouts/Header";
import { Top } from "./components/pages/Top";
import { Staff } from "./components/pages/Staff";
import { Contact } from "./components/pages/Contact";

function App() {


  return (
    <>
      <Router>
        <Header></Header>
          <Routes>
          <Route path='/' element={<Top />}></Route>
          <Route path='/staff' element={<Staff /> } />
          <Route path='/contact' element={<Contact />}></Route>
          </Routes>
      </Router>
    </>
  )
}

export default App
