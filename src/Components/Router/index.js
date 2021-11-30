import React, {useEffect, Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import IndexPage from "./Pages/IndexPage";
  
const RouterComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <IndexPage />} />
                <Route path="/leaking" element="leaking data" />
            </Routes>
      </Router>
    )
  }

export default RouterComponent;