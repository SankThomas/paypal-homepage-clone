import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import {
  AcceptOnlinePayments,
  Error,
  Freelancers,
  GetPaid,
  Homepage,
  Login,
  Merchant,
  MobileApps,
  PartnersAndDevelopers,
  PayOnline,
  Personal,
  SendInvoice,
  SendPayments,
  Shopping,
  SignUp,
  PersonalAccount,
  BusinessAccount,
} from "./pages";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Homepage />}></Route>
          <Route path="/personal" element={<Personal />}></Route>
          <Route path="/pay-online" element={<PayOnline />}></Route>
          <Route path="/send-money-online" element={<SendPayments />}></Route>
          <Route path="/requesting-payments" element={<GetPaid />}></Route>
          <Route path="/mobile-apps" element={<MobileApps />}></Route>
          <Route path="/shopping" element={<Shopping />}></Route>
          <Route path="/merchant" element={<Merchant />}></Route>
          <Route
            path="/accept-payments-online"
            element={<AcceptOnlinePayments />}
          ></Route>
          <Route path="/email-invoice" element={<SendInvoice />}></Route>
          <Route path="/freelancers" element={<Freelancers />}></Route>
          <Route
            path="/partners-and-developers"
            element={<PartnersAndDevelopers />}
          ></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/sign-up" element={<SignUp />}></Route>
          <Route path="/personal-account" element={<PersonalAccount />}></Route>
          <Route path="/business-account" element={<BusinessAccount />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
}
