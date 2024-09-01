"use client";
import { Metadata } from "next";
import Image from "next/image";
import { useState } from "react";
import { useRouter } from "next/navigation";
// import { useAuthRedirect } from "../../../app/hooks/useAuthRedirect";
import "./signin.scss";
import { useAuth } from "../../context/auth";

import { Input } from "@nextui-org/react";
import { Button } from "@nextui-org/react";
import { Checkbox } from "@nextui-org/react";
import { Link } from "@nextui-org/react";
import { EyeFilledIcon, EyeSlashFilledIcon } from "@nextui-org/shared-icons";

export default function Signin() {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);

  // useAuthRedirect();
  const router = useRouter();
  const [signinData, setSigninData] = useState({
    userEmail: "",
    passWord: "",
  });

  const { storetokenInLS } = useAuth();

  const handleLoginDta = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setSigninData({ ...signinData, [name]: value });
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Before connect api data: ", signinData);

    try {
      const resData = await fetch("http://localhost:5006/api/v1/auth/signin", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signinData),
      });

      console.log("Before checking submit: ", resData);
      if (!resData.ok) {
        const errorData = await resData.json();
        console.log("Invalid Credentials", errorData);
        return;
      } else {
        const data = await resData.json();
        console.log("Login successful", data);
        storetokenInLS(data.token);
        //localStorage.setItem('authtoken', data.token);
        //console.log(resData.status);
        setSigninData({ userEmail: "", passWord: "" });
        router.push("/");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="auth_wrapper">
      <div className="login_wrapper">
        <div className="left_content">
          <Link href="/" className="backArrow_left">
            <Image
              className="relative dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert"
              src="/assets/images/left-arrow.png"
              alt="Back arrow"
              width={32}
              height={32}
              priority
            />
          </Link>
          <h1>
            The Best Application <br />
            on the Planet
          </h1>
        </div>
        <div className="right_form">
          <div className="form_header">
            <h2>Welcome back</h2>
            <span>Login to your account</span>
          </div>
          <div className="login_main_form">
            <form onSubmit={handleLogin}>
              <div className="input_field_wrapper">
                <Input
                  type="email"
                  label="Email ID"
                  size="lg"
                  variant="bordered"
                  id="userEmail"
                  name="userEmail"
                  value={signinData.userEmail}
                  onChange={handleLoginDta}
                  isRequired
                />
              </div>
              <div className="input_field_wrapper">
                <Input
                  label="Password"
                  size="lg"
                  variant="bordered"
                  // placeholder="Enter your password"
                  endContent={
                    <button
                      className="focus:outline-none"
                      type="button"
                      onClick={toggleVisibility}
                      aria-label="toggle password visibility"
                    >
                      {isVisible ? (
                        <EyeSlashFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      ) : (
                        <EyeFilledIcon className="text-2xl text-default-400 pointer-events-none" />
                      )}
                    </button>
                  }
                  type={isVisible ? "text" : "password"}
                  isRequired
                  id="passWord"
                  name="passWord"
                  value={signinData.passWord}
                  onChange={handleLoginDta}
                />
              </div>
              <div className="form_footer">
                <div className="ft_top">
                  <label htmlFor="remme">
                    <Checkbox size="md" radius="full">
                      Remember me
                    </Checkbox>
                  </label>

                  <Link isExternal href="/" showAnchorIcon>
                    Forgot Password?
                  </Link>
                </div>
                <div className="ft_mid">
                  <Button type="submit" color="primary" variant="shadow">
                    Login
                  </Button>
                  <div className="loginWithSocial">
                    <span className="alterSocial">Or continue with</span>
                    <ul>
                      <li>
                        <Link href="#">
                          <Image
                            src="/assets/images/google.png"
                            alt="Google"
                            width={32}
                            height={32}
                            priority
                          />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <Image
                            src="/assets/images/facebook.png"
                            alt="Facebook"
                            width={32}
                            height={32}
                            priority
                          />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <Image
                            src="/assets/images/twitter.png"
                            alt="Twitter"
                            width={32}
                            height={32}
                            priority
                          />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="ft_bot">
                  Don&apos;t have an account?{" "}
                  <Link href="/auth/signup">Signup</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
