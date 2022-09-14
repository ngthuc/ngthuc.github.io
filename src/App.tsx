import React from 'react';
import './App.css';
import HomeScreen from "./screens/HomeScreen";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import LoginScreen from "./screens/LoginScreen";

const PageNotFound = () => (
    <div className="center-screen page-not-found">
        404 | Page Not Found
    </div>
);

const App = () => {
    return (
        <Router>
            <Routes>
                <Route element={<LoginScreen />} key="home" path="/login"/>
                <Route element={<HomeScreen />} key="home" path="/"/>
                <Route element={<PageNotFound />} key="page-not-found" path="*"/>
            </Routes>
        </Router>
    );
}

export default App;
