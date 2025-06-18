import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import ForgetPassword from "./pages/auth/ForgetPassword";
import OtpVerify from "./pages/auth/OtpVerify";
import AccountCreated from "./pages/auth/AccountCreated";
import Dashboard from "./pages/dashboard/DashboardLayout";
import Reviews from "./pages/dashboard/Reviews";
import Settings from "./pages/dashboard/Settings";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/verify" element={<OtpVerify />} />
        <Route path="/account-created" element={<AccountCreated />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/reviews" element={<Reviews />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </Router>
  );
}

export default App;
