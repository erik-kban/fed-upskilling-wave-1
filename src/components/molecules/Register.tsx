import React from "react";
import RegisterIcon from "@/assets/icons/RegisterIcon";
import CouponIcon from "@/assets/icons/CouponIcon";
import TelephoneIcon from "@/assets/icons/TelephoneIcon";
import TouchIcon from "@/assets/icons/TouchIcon";
import CTAButton from "../atoms/CTAButton";

const Register = () => {
  return (
    <div>
      <RegisterIcon />
      <h1>Register for a Trade Account</h1>
      <p>Own or operate a business or trade workshop?</p>
      <div>
        <CouponIcon />
        Get exclusive trade pricing on a wide range of products
      </div>
      <div>
        <TelephoneIcon />
        Access to a dedicated Trade hotline to support your business needs
      </div>
      <div>
        <TouchIcon />
        Generate bulk orders or re-order past orders with a just few clicks
      </div>
      <div>
        <CTAButton text="Reguster" size="small" />
        Find out more
      </div>
    </div>
  );
};

export default Register;
