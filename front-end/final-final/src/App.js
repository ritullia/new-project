import "./App.css";
import { BlogList } from "./components/BlogList";
import { NewBlog } from "./components/NewBlog";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Routes>
      <Route element={<BlogList />} path="/" />
      <Route element={<NewBlog />} path="/addBlog" />
    </Routes>
  );
}

export default App;
