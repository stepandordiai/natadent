import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.scss";
import ToTopBtn from "./components/ToTopBtn/ToTopBtn";

function App() {
    return (
        <Router>
            <div className="bg-theme"></div>
            <Header />
            <ToTopBtn />
        </Router>
    );
}

export default App;
