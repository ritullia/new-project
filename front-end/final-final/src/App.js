import "./App.css";
import { BlogList } from "./components/BlogList";
import { NavBar } from "./components/NavBar";
import { NewBlog } from "./components/NewBlog";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route element={<BlogList />} path="/posts" />
        <Route element={<NewBlog />} path="/addBlog" />
      </Routes>
    </>
  );
}

export default App;
