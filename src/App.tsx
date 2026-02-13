import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import ErrorBoundary from "./components/ErrorBoundary";

function App() {
    return (
        <ErrorBoundary>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/landing" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
            </Routes>
        </ErrorBoundary>
    );
}

export default App;
