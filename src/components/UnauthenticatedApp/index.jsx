import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from '../login';
import Register from "../Register";
import './styles.css';

function UnauthenticatedApp() {

    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="/signup" element={<Register />} />
                </Routes>
            </Router>
         
        </>
    );
}

export { UnauthenticatedApp };