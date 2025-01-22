import React from "react";
import Content from "./Content";
import Category from "./Category";
import Testimonials from "./Testimonials";
import MainNavbar from "./components/MainNavbar";
import FooterComponent from "./components/FooterComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Destinations from "./Destinations";
import Hotels from "./Hotels";

function App() {
  return (
    <Router>
      <MainNavbar />
      <Routes>
        {/* Updated Route syntax in v6 */}
        <Route
          path="/"
          element={
            <>
              <Content />
              <Category />
              <Testimonials />
            </>
          }
        />
        <Route path="/Destinations" element={<Destinations />} />
        <Route path="/Hotels" element={<Hotels />} />
      </Routes>
      <FooterComponent />
    </Router>
  );
}

export default App;
