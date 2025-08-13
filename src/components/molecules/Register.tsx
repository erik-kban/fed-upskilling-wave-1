import React from "react";
import RegisterIcon from "@/assets/icons/RegisterIcon";
import CouponIcon from "@/assets/icons/CouponIcon";
import TelephoneIcon from "@/assets/icons/TelephoneIcon";
import TouchIcon from "@/assets/icons/TouchIcon";
import CTAButton from "../atoms/CTAButton";

import styles from "../../styles/molecules/Register.module.scss";

const Register = () => {
  return (
    <div className={styles.register}>
      <RegisterIcon />
      <div className={`${styles["register__heading"]}`}>
        <h1>Register for a Trade Account</h1>
        <p>Own or operate a business or trade workshop?</p>
      </div>

      <div className={`${styles["register__icontext"]}`}>
        <CouponIcon />
        <p>Get exclusive trade pricing on a wide range of products</p>
      </div>
      <div className={`${styles["register__icontext"]}`}>
        <TelephoneIcon />
        <p>Access to a dedicated Trade hotline to support your business needs</p>
      </div>
      <div className={`${styles["register__icontext"]}`}>
        <TouchIcon />
        <p>Generate bulk orders or re-order past orders with a just few clicks</p>
      </div>
      <div className={`${styles["register__ctaText"]}`}>
        <CTAButton text="Register" size="small" />
        <p>Find out more</p>
      </div>
    </div>
  );
};

export default Register;
