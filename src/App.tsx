import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Login from "./pages/auth/Login";
import SignUp from "./pages/auth/SignUp";
import Income from "./pages/dashboard/Income";
import Expense from "./pages/dashboard/Expense";
import Home from "./pages/dashboard/Home";

const App = (): React.JSX.Element => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Root />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="/dashboard" element={<Home />} />
          <Route path="/income" element={<Income />} />
          <Route path="/expense" element={<Expense />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;


const Root = () :React.JSX.Element => {
  const isAuthenticated = !!localStorage.getItem("token");

  return isAuthenticated? (
    <Navigate to="/dashboard" />
  ) : (
    <Navigate to="/login" />
  )
};
