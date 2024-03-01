import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom"//주소설정해주는 섹터
import HomeView from "./views/HomeView";
import AboutView from "./views/AboutView";

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<HomeView />} />
                <Route path="/about" element={<AboutView />} />

            </Routes>
        </BrowserRouter>
    );
}

export default App;