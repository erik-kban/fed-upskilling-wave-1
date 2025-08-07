import React from "react";
import styles from "../../styles/atoms/CTAButton.module.scss";

interface CTAButtonProps {
  icon?: React.ReactNode;
  text?: React.ReactNode;
  isDarkButton?: boolean;
  size?: "small" | "medium" | "large"
}

const CTAButton: React.FC<CTAButtonProps> = ({ icon, text, isDarkButton, size }) => {
  return (
    <button className={`${styles.ctaButton} ${styles[`ctaButton--size--${size}`]} ${isDarkButton ? styles["ctaButton--dark"] :styles["ctaButton--normal"]}`}>
      {icon}
      {text}
    </button>
  );
};

export default CTAButton;
