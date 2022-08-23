import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./Layouts/Footer";
import Header from "./Layouts/Header";
import { MainPage, BlogPage, PostsPage, TeamPage } from "./pages";

function App() {
    return (
        <div className="flex flex-col min-h-screen bg-light dark:bg-dark">
            <Header />
            <Router>
                <Routes>
                    <Route path="/" element={<MainPage />} />
                    <Route path="blog" element={<BlogPage />} />
                    <Route path="blog/:blogId" element={<PostsPage />} />
                    <Route path="team" element={<TeamPage />} />
                </Routes>
            </Router>
            <Footer />
        </div>
    );
}

export default App;
