import { Route, Routes } from "react-router-dom";
import MyPage from "./components/MyPage/myPage";
import Login from "./components/Login";
import { useState } from "react";

const App = () => {
  const [isSuccess, setIsSuccess] = useState(false);

  const setSuccessValue = () => {
    setIsSuccess(true);
  };

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={<Login setSuccessValue={setSuccessValue} />}
      />
      <Route exact path="/admin" element={<MyPage isSuccess={isSuccess} />} />
    </Routes>
  );
};
export default App;
