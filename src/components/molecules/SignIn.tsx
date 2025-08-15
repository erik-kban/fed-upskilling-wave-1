import React from "react";
import CTAButton from "../atoms/CTAButton";
import styles from "../../styles/molecules/SignIn.module.scss";
import tradeLogo from '@assets/HeaderAssets/tradeLogo.png'
import Icon from "../atoms/Icon/Icon";
import HideIcon from "@assets/SignInRegsiterAssets/HideIcon.svg";

const SignIn = () => {
  return (
    <div className={styles.signin}>
      <Icon width={151} height={44} logo={tradeLogo} />
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
        <div className={`${styles["signin__textinput__container"]}`}>
          <input id="password" type="text" placeholder="Enter password"></input>
          <button>
            <Icon logo={HideIcon} width={24} height={24} />
          </button>
        </div>
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
