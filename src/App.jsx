import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import "./App.scss";

function App() {
    return (
        <Router>
            <Header />
            <img
                className="img"
                src={
                    "https://www.shutterstock.com/image-photo/dental-hygiene-oral-health-care-600nw-2523738153.jpg"
                }
                alt=""
            />
        </Router>
    );
}

export default App;
