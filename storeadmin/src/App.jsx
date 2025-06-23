import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SignUp from "./pages/auth/SignUp";
import Login from "./pages/auth/Login";
import ForgetPassword from "./pages/auth/ForgetPassword";
import OtpVerify from "./pages/auth/OtpVerify";
import AccountCreated from "./pages/auth/AccountCreated";
import Dashboard from "./pages/dashboard/Dashboard";
import Reviews from "./pages/dashboard/Reviews";
import Settings from "./pages/dashboard/Settings";
import ProfileCompletionModal from "../src/components/dashboard/AllFeildsCompleteModel";

function App() {
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [profileChecks, setProfileChecks] = useState({
    basicInfo: false,
    businessHours: true,
    services: true,
    pricing: true,
    photos: true,
  });

  return (
    <>
      
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
     

      {/* <ProfileCompletionModal
        open={showProfileModal}
        onClose={() => setShowProfileModal(false)}
        profileChecks={profileChecks}
      /> */}
    </>
  );
}

export default App;
