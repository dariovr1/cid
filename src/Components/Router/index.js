import React, {useEffect, Fragment} from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import LineChart from '../Charts/LineChart';
import IndexPage from "./Pages/IndexPage";
  
const RouterComponent = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={ <IndexPage />} />
                <Route path="/leaking" element={<LineChart />} />
            </Routes>
      </Router>
    )
  }

export default RouterComponent;