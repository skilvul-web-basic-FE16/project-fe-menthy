import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ArticleListPage from "./pages/ArticleListPage";
import DetailArticle from "./pages/DetailArticle";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/article" element={<ArticleListPage />} />
        <Route path="/detail/:id" element={<DetailArticle />} />
      </Routes>
    </div>
  );
}

export default App;
