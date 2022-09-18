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
                  <div className={styles.icon}>
                    <Image
                      src={"/assets/Vector.svg"}
                      alt=""
                      width={15}
                      height={15}
                      priority
                    />
                  </div>
                ) : (
                  <div className={styles.icon}>
                    <Image
                      src={"/assets/error.svg"}
                      alt=""
                      width={15}
                      height={15}
                      priority
                    />
                  </div>
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
                    // <AiOutlineEye size={25} />
                    <Image
                      src={"/assets/EyeInvisible.svg"}
                      alt=""
                      width={20}
                      height={20}
                      priority
                    />
                  ) : (
                    <Image
                      src={"/assets/Eye.svg"}
                      alt=""
                      width={20}
                      height={20}
                      priority
                    />
                  )}
                </div>
              </div>

              <div className={styles.remember}>
                <label
                  htmlFor="checkbox"
                  style={{ color: "#595959" }}
                  className={styles.contentRChec}
                >
                  {" "}
                  <input
                    className={styles.customCheckbox}
                    type="checkbox"
                    id="checkbox"
                  />
                  Remember me
                </label>
                <div>
                  <Link href={""}>
                    <Button variant="link" size="sm">
                      Forgot password?
                    </Button>
                  </Link>
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
            <span>
              Already have an account?
              <Link href={"/signup"}>
                <Button variant="link">Sign Up</Button>
              </Link>
            </span>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Signup;
