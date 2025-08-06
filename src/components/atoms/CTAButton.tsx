import React from "react";
import styles from "../../styles/atoms/CTAButton.module.scss";

interface CTAButtonProps {
  icon?: React.ReactNode;
  text?: React.ReactNode;
  isDarkButton?: boolean;
}

const CTAButton: React.FC<CTAButtonProps> = ({ icon, text, isDarkButton }) => {
  return (
    <button className={`${styles.ctaButton} ${isDarkButton ? styles["ctaButton--dark"] :styles["ctaButton--normal"]}`}>
      {icon && icon}
      {text}
    </button>
  );
};

export default CTAButton;
