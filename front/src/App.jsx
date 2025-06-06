import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Clothes from "./pagesAdmin/Clothes";
import Add from "./pagesAdmin/Add";
import Update from "./pagesAdmin/Update";
import Main from "./MainPage/Main";
import MainLG from "./LoginFrom/MainLG"; // start page
import Login from "./LoginFrom/Login"; //Admin
import UserMain from "./MainPage/UserMain"; //Main User page
import AdminMain from "./MainPage/Main"; //Main admin page
import UserLogin from "./LoginFrom/LoginUser"; //User login page
import ClothesList from "./PagesUser/ClothesList";
import RegisterUser from "./LoginFrom/RegisterUser";
import Contacts from "./PagesUser/Contacts";
import Permission from "./PagesUser/Permission";
import ShopingCard from "./PagesUser/ShopingCard";

import "./index.css";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<MainLG />} />
        <Route path="/register" element={<RegisterUser />} />

        <Route path="/login" element={<Login />} />
        {/* Admin main */}
        <Route path="/main" element={<AdminMain />} />

        {/* User login */}
        <Route path="/login-user" element={<UserLogin />} />
        <Route path="/user-main" element={<UserMain />} />

        <Route path="/clothes" element={<Clothes />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Update />} />

        {/* Extra shit for user */}

        <Route path="/clothes-user-list" element={<ClothesList />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/permision" element={<Permission />} />
        <Route path="/shopingCard" element={<ShopingCard />} />
      </Routes>
    </div>
  );
}

export default App;
