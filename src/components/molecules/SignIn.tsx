import React from "react";
import SCALogo from "@/assets/icons/SCALogo";
import CTAButton from "../atoms/CTAButton";

const SignIn = () => {
  return (
    <div>
      <SCALogo />
      <h1>Sign in to your Trade Account</h1>
      <div>
        <label htmlFor="email">Email</label>
        <input id="email" type="text" placeholder="johnsmith@email.com" />
      </div>

      <div>
        <label htmlFor="password">Password</label>
        <input id="password" type="text" placeholder="Enter password" />
      </div>

      <p>Forgot password?</p>
      <input type="checkbox" value="Remember Me" />
      <CTAButton text="Sign In" size="large" />
    </div>
  );
};

export default SignIn;
