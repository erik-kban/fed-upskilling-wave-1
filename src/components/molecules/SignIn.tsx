import React from "react";
import SCALogo from "@/assets/icons/SCALogo";
import CTAButton from "../atoms/CTAButton";
import styles from "../../styles/molecules/SignIn.module.scss";

import HideIcon from "@/assets/icons/HideIcon";

const SignIn = () => {
  return (
    <div className={styles.signin}>
      <SCALogo />
      <h1>Sign in to your Trade Account</h1>
      <div className={`${styles["signin__textinput"]}`}>
        <label htmlFor="email">Email</label>
        <input
          className=""
          id="email"
          type="text"
          placeholder="johnsmith@email.com"
        />
      </div>
      <div className={`${styles["signin__textinput"]}`}>
        <label htmlFor="password">Password</label>
        <input id="password" type="text" placeholder="Enter password" ></input>

      </div>
      <p>Forgot password?</p>
      <div className={`${styles["signin__checkboxinput"]}`}>
        <input id="remember-me" type="checkbox" />
        <label htmlFor="remember-me">Remember Me</label>
      </div>

      <CTAButton text="Sign In" size="large" />
    </div>
  );
};

export default SignIn;
