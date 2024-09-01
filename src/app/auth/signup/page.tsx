'use client'
import { useState } from "react";
import Image from "next/image";
import { useRouter } from 'next/navigation';
import './signup.scss';
import {useAuth} from '../../context/auth';

import {Input} from "@nextui-org/react";
import {Button} from "@nextui-org/react";
import {Checkbox} from "@nextui-org/react";
import {Link} from "@nextui-org/react";

export default function Signup() {

  const router = useRouter()
  const [signupData, setSignupData] = useState({
    userFirstName: '',
    userLastName: '',
    userId:'',
    userEmail: '',
    userPhone: '',
    passWord: '',
  });

  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const {storetokenInLS} = useAuth();

  const handleRegDta = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setSignupData({ ...signupData, [name]: value });
  };

  const handleReg = async (e) => {
    e.preventDefault();

    console.log("Before checking data: ", e);

    try {
      const response = await fetch('http://localhost:5006/api/v1/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(signupData),
      });

      console.log("Before checking submit: ", response);

      if (!response.ok) {
        const errorData = await response.json();
        console.log("Server response error", errorData);
        setError(errorData);
        setSuccess(false);
        return;
      }else{
        const data = await response.json();
      //console.log("Signup successful", data.token);
      //localStorage.setItem('authtoken',data.token);


      storetokenInLS(data.token)

      setError(null); // Clear any previous errors
      setSuccess(true); // Set success to true
     
      setSignupData({userFirstName: "", userLastName: '', userId:'', userEmail: '', userPhone: '',  passWord: ''});
      //navigate("/auth/signin")
      router.push('/auth/signin');
      }

      

    } catch (error) {
      console.log("Server register error", error);
      setError({ message: "Server error. Please try again later." });
      setSuccess(false);
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
          <h1>The Best Application <br />on the Planet</h1>
        </div>
        <div className="right_form">
          <div className="form_header">
            <h2>Join with Us</h2>
            <span>Register your account</span>
          </div>
          <div className="registration_main_form">
            <form onSubmit={handleReg}>
              <div className="input_field_wrapper col-auto-6">
                {/* <input
                  type="text"
                  autoComplete="off"
                  id="userFirstName"
                  name="userFirstName"
                  placeholder="First Name"
                  value={signupData.userFirstName}
                  onChange={handleRegDta}
                /> */}
                <Input type="text" label="First Name" size="md" variant="bordered" id="userFirstName"
                  name="userFirstName"
                  value={signupData.userFirstName}
                  onChange={handleRegDta} isRequired />
              </div>
              <div className="input_field_wrapper col-auto-6">
                {/* <input
                  type="text"
                  autoComplete="off"
                  id="userLastName"
                  name="userLastName"
                  placeholder="Last Name"
                  value={signupData.userLastName}
                  onChange={handleRegDta}
                /> */}
                <Input type="text" label="Last Name" size="md" variant="bordered" id="userLastName"
                  name="userLastName"
                  value={signupData.userLastName}
                  onChange={handleRegDta} isRequired />
              </div>
              <div className="input_field_wrapper col-auto-12">
                {/* <input
                  type="text"
                  autoComplete="off"
                  id="userId"
                  name="userId"
                  placeholder="User Id"
                  value={signupData.userId}
                  onChange={handleRegDta}
                /> */}
                 <Input type="text" label="User Id" size="md" variant="bordered"  id="userId"
                  name="userId"
                  value={signupData.userId}
                  onChange={handleRegDta} isRequired />
              </div>
              <div className="input_field_wrapper col-auto-12">
                {/* <input
                  type="text"
                  autoComplete="off"
                  id="userEmail"
                  name="userEmail"
                  placeholder="Email Id"
                  value={signupData.userEmail}
                  onChange={handleRegDta}
                /> */}
                <Input type="email" label="Email ID" size="md" variant="bordered" id="userEmail"
                  name="userEmail"
                  value={signupData.userEmail}
                  onChange={handleRegDta} onClear={() => console.log("input cleared")} isRequired isClearable />
              </div>
              <div className="input_field_wrapper col-auto-12">
                {/* <input
                  type="text"
                  autoComplete="off"
                  id="userPhone"
                  name="userPhone"
                  placeholder="Phone Number"
                  value={signupData.userPhone}
                  onChange={handleRegDta}
                /> */}
                <Input type="text" label="Phone Number" size="md" variant="bordered"  id="userPhone"
                  name="userPhone"
                  value={signupData.userPhone}
                  onChange={handleRegDta} isRequired />
              </div>
              <div className="input_field_wrapper col-auto-12">
                {/* <input
                  type="password"
                  autoComplete="off"
                  id="passWord"
                  name="passWord"
                  placeholder="Password"
                  value={signupData.passWord}
                  onChange={handleRegDta}
                /> */}
                <Input
                 
                 label="Password"
                  size="md"
                 variant="bordered"
                 type="password"
                 isRequired
                 id="passWord"
                  name="passWord"
                  value={signupData.passWord}
                  onChange={handleRegDta}
               />
              </div>
              <div className="form_footer">
                <div className="ft_mid">
                  <div className="col-auto-12">
                    
                    <Button type="submit"  className="signupBtn" color="primary" variant="shadow">
        Signup
      </Button>  
                  </div>
                  <div className="loginWithSocial">
                    <span className="alterSocial">Or continue with</span>
                    <ul>
                      <li>
                        <Link href="#">
                          <Image src="/assets/images/google.png"
                            alt="Google"
                            width={32}
                            height={32}
                            priority />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <Image src="/assets/images/facebook.png"
                            alt="Facebook"
                            width={32}
                            height={32}
                            priority />
                        </Link>
                      </li>
                      <li>
                        <Link href="#">
                          <Image src="/assets/images/twitter.png"
                            alt="Twitter"
                            width={32}
                            height={32}
                            priority />
                        </Link>
                      </li>
                    </ul>
                  </div>
                </div>
                <div className="ft_bot">
                  Already have an account? <Link href="/auth/signin">Signin</Link>
                </div>
              </div>
            </form>
            {error && (<div className="error_message">{error.message}</div>)}
            {success ? (<div className="success_message">Signup successful!</div>) : (<div></div>)}
          </div>
        </div>
      </div>
    </div>
  );
}


