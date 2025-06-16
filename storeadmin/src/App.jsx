import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import ForgetPassword from "./pages/auth/ForgetPassword";
import OtpVerify from "./pages/auth/OtpVerify";
import AccountCreated from "./pages/auth/AccountCreated";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgetPassword />} />
        <Route path="/verify" element={<OtpVerify />} />
        <Route path="/account-created" element={<AccountCreated />} />
      </Routes>
    </Router>
  );
}

export default App;
