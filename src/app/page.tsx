import Image from "next/image";
import styles from "./page.module.css";
import SignIn from "@/components/molecules/SignIn";

import Register from "@/components/molecules/Register";
import SignInRegister from "@/components/organisms/SignInRegister";

export default function Home() {
  return (
    <div>
      <SignInRegister />

    </div>
  );
}
