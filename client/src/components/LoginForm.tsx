import React, { useContext, useState } from "react";

import { validateEmail } from "../utils/validateEmail";
import axios, { AxiosError } from "axios";

import { auth } from "../context/auth";
import { createToken } from "../utils/authCookie";
import FormButton from "./Buttons/FormButton";
import Error from "./Error";
import ErrorCenter from "./ErrorCenter";
import { Link, useNavigate } from "react-router-dom";

const LoginForm = () => {
  const [isAuthenticated, setIsAuthenticated] = useContext(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [emerror, setEmerror] = useState(false);
  const [paserror, setPaserror] = useState(false);

  const [notExist, setNotExist] = useState(false);

  const [badRequest, setBadRequest] = useState("");

  const navigate = useNavigate();

  const checkInput = () => {
    if (email) {
      if (validateEmail(email)) {
        setEmerror(false);
      } else {
        setEmerror(true);
      }
    } else {
      setEmerror(true);
    }
    if (password) {
      if (password.length === 8) {
        setPaserror(false);
      } else {
        setPaserror(true);
      }
    } else {
      setPaserror(true);
    }
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    checkInput();
    if (!emerror && !paserror) {
      login();
    }
  };

  const login = async () => {
    try {
      const res = await axios.post(
        `/api/v1/auth/login`,
        {
          email: email,
          password: password,
        }
      );
      const token = res.data.token;
      createToken(token);
      setIsAuthenticated(true);
      navigate("/", { replace: true });
    } catch (error: any) {
      setBadRequest(error.response.data.message);
    }
  };

  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-lg bg-teritiary py-5 px-3 rounded-lg">
      <form>
        <h1 className="text-center text-xl font-semibold">Enter credentials</h1>
        <div className="flex gap-2 flex-col md:w-[400px] w-[250px] my-2">
          <label className="text-lg">Email</label>
          <input
            type="text"
            className="border-[1px] border-black rounded-s pl-2 py-1"
            value={email}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setEmail(e.target.value)
            }
          />
        </div>
        {emerror ? <Error text="Please enter valid email" /> : ""}
        <div className="flex gap-2 flex-col md:w-[400px] w-[250px] my-2">
          <label className="text-lg">Password</label>
          <input
            type="password"
            className="border-[1px] border-black rounded-s pl-2 py-1"
            value={password}
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
          />
        </div>
        {paserror ? <Error text="Please enter valid password" /> : ""}
        <FormButton handleSubmit={handleSubmit} text="Login" />
      </form>
      {badRequest ? <ErrorCenter text={badRequest} /> : ""}
      <p className="text-center text-md mt-3">
        If you haven't registered,
        <Link to="/register" className="text-primary underline">
          click here
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;
