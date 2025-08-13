import SignIn from "@/components/molecules/SignIn";
import Register from "@/components/molecules/Register";
import styles from "../../styles/organisms/SignInRegister.module.scss";

const SignInRegister = () => {
  return (
    <div className={styles.signinregister}>
      <SignIn />
      <Register />
    </div>
  );
};

export default SignInRegister;
