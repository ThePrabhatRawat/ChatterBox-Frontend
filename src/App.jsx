import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProtectRoute from "./components/auth/ProtectRoute";
import { LayoutLoader } from "./components/Layouts/Loaders";



const Home = lazy(() => import("./pages/Home"));
const Login = lazy(() => import("./pages/Login"));
const Chat = lazy(() => import("./pages/Chat"));
const Groups = lazy(() => import("./pages/Groups"));
const NotFound = lazy(() => import("./pages/NotFound"));


const AdminLogin = lazy(() => import("./pages/Admin/AdminLogin.jsx"));
const Dashboard = lazy(()=>import("./pages/Admin/Dashboard.jsx"))
const UserManagement = lazy(()=>import("./pages/Admin/UserManagement.jsx"))
const ChatManagement = lazy(()=>import("./pages/Admin/ChatManagement.jsx"))
const MessageManagement = lazy(()=>import("./pages/Admin/MessageManagement.jsx"))

let user = true;

const App = () => {
  return (
    <BrowserRouter>
    <Suspense fallback={<LayoutLoader/>}>
      <Routes>
        <Route element={<ProtectRoute user={user} />}>
          <Route path="/" element={<Home />} />
          <Route path="/chat/:chatId" element={<Chat />} />
          <Route path="/groups" element={<Groups />} />
        </Route>

        <Route path="/login" element={<ProtectRoute user={!user} redirect="/">
          <Login />
        </ProtectRoute>} />

        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<Dashboard/>} />
        <Route path="/admin/chats" element={<ChatManagement/>} />
        <Route path="/admin/users" element={<UserManagement/>} />
        <Route path="/admin/messages" element={<MessageManagement/>} />
        <Route path="*" element={<NotFound />} />


      </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
