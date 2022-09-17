import type { NextPage } from "next";
import styles from "../styles/main.module.scss";
import Layout from "../components/Layouts/Layout";
import Image from "next/image";
import { useState } from "react";
import { signIn } from "next-auth/react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Input, Button } from "@mashvisor/design-system";
import Link from "next/link";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiErrorAlt } from "react-icons/bi";
const Signup: NextPage = () => {
  const [show, setShow] = useState<boolean>(false);
  async function handleGoogleSignin() {
    signIn("google", { callbackUrl: "http://localhost:3000" });
  }
  const [email, setEmail] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  function isValidEmail(email: any) {
    return !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email);
  }
  const handleChange = (event: any) => {
    if (!isValidEmail(event)) {
      setErrorEmail("Email is invalid");
    } else {
      setErrorEmail("");
    }
    setEmail(event);
  };
  return (
    <Layout>
      <section className="container">
        <div className={styles.box}>
          <div className={styles.title}>
            <p>Smart investing starts here</p>
            <span>Start your free 7-day trial</span>
          </div>
          <div className={styles.btnAuth} onClick={handleGoogleSignin}>
            <Image
              src={"/assets/google.svg"}
              alt=""
              width={20}
              height={20}
              priority
            />{" "}
            <button>Sign up with Google</button>
          </div>

          <div>
            <form action="">
              <div>
                {errorEmail && errorEmail ? (
                  <AiOutlineCheckCircle
                    style={{ color: "green" }}
                    className={styles.icon}
                  />
                ) : (
                  <BiErrorAlt
                    style={{ color: "red" }}
                    className={styles.icon}
                  />
                )}
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  label="Email"
                  value={email}
                  onChange={handleChange}
                />
              </div>
              <div className={styles.inputForm}>
                <Input
                  type={`${show ? "text" : "password"}`}
                  placeholder="at least 8 characters"
                  label="Password"
                />
                <div
                  onClick={() => setShow(!show)}
                  className={styles.btnShowPass}
                >
                  {show === true ? (
                    <AiOutlineEye size={25} />
                  ) : (
                    <AiOutlineEyeInvisible size={25} />
                  )}
                </div>
              </div>

              <div className={styles.remember}>
                <p>Remember me</p>
                <div>
                  <a href="">Forgot password?</a>
                </div>
              </div>

              <div>
                <Button type="submit" width="full">
                  Log in
                </Button>
              </div>
            </form>
          </div>
          <div className={styles.isHaveAccount}>
            <p>
              Already have an account?
              <Link href={"/signup"}>
                <a href="">Sign Up</a>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Signup;
