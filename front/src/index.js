import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthPage from "./routes/AuthPage";
import LogIn from "./component/Auth/LogIn";
import MyPage from "./routes/MyPage";
import RestaurantDetailPage from "./routes/RestaurantDetailPage";
import ReviewWrite from "./component/Review/ReviewWrite";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<App />} />
        <Route path="/members" element={<AuthPage />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/detail/:id" element={<RestaurantDetailPage />} />
        <Route path="/review/write/:id" element={<ReviewWrite />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
