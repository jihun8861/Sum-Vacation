import React from "react";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Home from "./pages/Home";
import KakaoRedirect from "./pages/KakaoRedirect";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Custom from "./pages/Custom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/KakaoRedirect" element={<KakaoRedirect/>}/>
        <Route path="/SignIn" element={<SignIn/>}/>
        <Route path="/SignUp" element={<SignUp/>}/>
        <Route path="/Custom" element={<Custom/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;