/** @format */

import { useState } from "react";
import { auth } from "../firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";

export default function AuthForm({ mode = "login" }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleAuth = async () => {
    try {
      if (mode === "signup") {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Signed up!");
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        alert("Logged in!");
      }
      navigate("/");
    } catch (err) {
      alert(err.message);
    }
  };

  return (
    <div className="flex flex-col justify-center items-center gap-y-2 p-2">
      <h2>{mode === "signup" ? "Sign Up" : "Login"}</h2>
      <input
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="border-2 bg-blue-400 px-2" onClick={handleAuth}>
        {mode === "signup" ? "Sign Up" : "Login"}
      </button>
    </div>
  );
}
