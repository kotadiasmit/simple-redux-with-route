import { Route, Routes } from "react-router-dom";
import MyPage from "./components/MyPage/myPage";
import Login from "./components/Login";

const App = () => (
  <Routes>
    <Route exact path="/" element={<Login />} />
    <Route exact path="/admin" element={<MyPage />} />
  </Routes>
);
export default App;
