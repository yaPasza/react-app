import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Posts from "../pages/Posts";
import NotFound from "../pages/NotFound";
import PostIdPage from "../pages/PostIdPage";

const AppRouter = () => {
    return (
        <Routes>
            <Route path="*" element={<NotFound />} />
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route exact path="/posts" element={<Posts />} />
            <Route exact path="/posts/:id" element={<PostIdPage />} />
        </Routes>
    );
};

export default AppRouter;
