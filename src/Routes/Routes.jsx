import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Home from "../containers/home";
import Store from "../containers/store";
import StoreItems from "../components/storeItems";
import Cart from "../containers/Cart";
import SingleItem from "../components/singleItem";
import SignIn from "../containers/signIn";
import SignUp from "../containers/signUp";
import Profile from "../containers/profile";
import PasswordReset from "../containers/PasswordReset/PasswordReset";
import SuccessPayment from "../SuccessPayment";

function OuterRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />}>
          <Route path=":itemCategory" element={<StoreItems />} />
        </Route>
        <Route path="items/:itemCategory/:itemId" element={<SingleItem />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/reset-password" element={<PasswordReset />} />
        <Route path="/payment-success" element={<SuccessPayment />} />
      </Routes>
    </>
  );
}

export default OuterRoutes;
