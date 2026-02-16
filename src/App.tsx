import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import ErrorBoundary from "./components/ErrorBoundary";
import BlogList from "./blog/BlogList";
import BlogPost from "./blog/BlogPost";

function App() {
    return (
        <ErrorBoundary>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/landing" element={<Home />} />
                <Route path="/resume" element={<Resume />} />
                <Route path="/blog/page/:page" element={<BlogList />} />
                <Route path="/blog/:slug" element={<BlogPost />} />
            </Routes>
        </ErrorBoundary>
    );
}

export default App;
