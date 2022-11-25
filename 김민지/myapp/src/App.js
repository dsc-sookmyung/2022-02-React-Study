import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainPage from "./page/MainPage";
import CreatePage from "./page/CreatePage";
import DetailPage from "./page/DetailPage";
import UpdatePage from "./page/UpdatePage";
import MyPage from "./page/Mypage";
import Navigation from "./component/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Navigation />
      <Routes>
        <Route index element={<MainPage />} />
        <Route path="create" element={<CreatePage />} />
        <Route path="post/:id" element={<DetailPage />} />
        <Route path="update/:id" element={<UpdatePage />} />
        <Route path="mypage" element={<MyPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
