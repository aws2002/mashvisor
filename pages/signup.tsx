import type { NextPage } from "next";
import styles from "../styles/main.module.scss";
import Layout from "../components/Layouts/Layout";
import Image from "next/image";
import { useState } from "react";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import Link from "next/link";
import { Input, Button } from "@mashvisor/design-system";
import PasswordStrengthMeter from "../components/Tools/PasswordStrengthMeter";

const Signup: NextPage = () => {
  const [show, setShow] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const onChangeInput = (e: any) => {
    const formField = e.target.name;
    const updateFormData = {
      ...formData,
      [formField]: e.target.value,
    };
    setFormData(updateFormData);
  };
  const onSubmitFormData = (e: any) => {
    e.preventDefault();
    alert(JSON.stringify(formData, null, 2));
  };
  const [ password, setPassword ] = useState('');

  return (
    <Layout>
      <section className="container">
        <div className={styles.box}>
          <div className={styles.title}>
            <p>Smart investing starts here</p>
            <span>Start your free 7-day trial</span>
          </div>
          <div className={styles.btnAuth}>
            <Image
              src={"/assets/google.svg"}
              alt=""
              width={20}
              height={20}
              priority
            />{" "}
            <button>Sign up with Google</button>
          </div>
          <div className={styles.containerForm}>
            <form action="" onSubmit={onSubmitFormData}>
              <div>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="name@example.com"
                  label="Email"
                  onChange={onChangeInput}
                  value={formData.email}
                />
              </div>
              <div className={styles.inputForm}>
                <Input
                  id="password"
                  name="password"
                  type={`${show ? "text" : "password"}`}
                  placeholder="at least 8 characters"
                  label="Password"
                  value={formData.password}
                  onChange={onChangeInput}
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
              {/* <PasswordStrengthMeter password={password} /> */}
              <div className={styles.termsPrivacy}>
                <p>
                  By signing up, you are agreeing to our
                  <a href="">Terms & Conditions</a> and{" "}
                  <a href="">Privacy Policy.</a>
                </p>
              </div>
              <Button width="full">Sign Up</Button>
            </form>
          </div>
          <div className={styles.isHaveAccount}>
            <p>
              Already have an account?
              <Link href={"/login"}>
                <a href="">Log in</a>
              </Link>
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Signup;