import React from "react";
import { Routes, Route } from "react-router-dom";
import EmptyPage from "./EmptyPage";
import MainPage from "./MainPage";
const NavPage = () => {
  return (
    <React.Fragment>
      <section>
        <Routes>
          <Route path="/" element={<div>Please Select a Company</div>} />
          <Route path="/1" element={<MainPage />} />
          <Route path="/2" element={<EmptyPage />} />
          <Route path="/3" element={<EmptyPage />} />
          <Route path="/4" element={<EmptyPage />} />
          <Route path="/5" element={<EmptyPage />} />
          <Route path="/6" element={<EmptyPage />} />
        </Routes>
      </section>
    </React.Fragment>
  );
};

export default NavPage;
