import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
} from "firebase/auth";

import { auth } from "../firebase/config";
import Header from "../components/Header";
import Footer from "../components/Footer";
import "./SignIn.css";


const SignIn = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [resetEmail, setResetEmail] = useState("");

  const [showReset, setShowReset] = useState(false);
  const [error, setError] = useState(false);

  const [messageError, setMessageError] = useState("");
  const [messageSuccess, setMessageSuccess] = useState("");


  const handleSignIn = (e) => {
    e.preventDefault();

    setError(false);

    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/"))
      .catch(() => {
        setError(true);
        setMessageError("البريد الإلكتروني أو كلمة المرور غير صحيحة.");
      });
  };


  const handleResetPassword = () => {
    setError(false);
    setMessageError("");
    setMessageSuccess("");

    sendPasswordResetEmail(auth, resetEmail)
      .then(() => {
        setMessageSuccess(
          "تم إرسال رابط تغيير كلمة المرور إلى بريدك الإلكتروني."
        );
      })
      .catch(() => {
        setError(true);
        setMessageError("حدث خطأ، تأكد من البريد الإلكتروني.");
      });
  };


  return (
    <>
      <Header />

      <main className="page-wrapper">
        {!showReset ? (
          <form className="auth-form" onSubmit={handleSignIn}>
            <h2>Sign In</h2>

            {error && (
              <p className="error-message">{messageError}</p>
            )}

            <input
              type="email"
              placeholder="Email"
              onChange={(e) => setEmail(e.target.value)}
              required
            />

            <input
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

            <button type="submit" className="submit-btn">
              Sign In
            </button>

            <p
              className="link-text"
              onClick={() => setShowReset(true)}
            >
              Forgot Password?
            </p>
          </form>
        ) : (
          <form
            className="auth-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleResetPassword();
            }}
          >
            <div className="reset-header">
              <h2>Reset Password</h2>

              <button
                type="button"
                className="close-btn"
                onClick={() => setShowReset(false)}
              >
                ×
              </button>
            </div>

            {error && (
              <p className="error-message">{messageError}</p>
            )}

            {messageSuccess && (
              <p className="success-message">{messageSuccess}</p>
            )}

            <input
              type="email"
              placeholder="Enter your email"
              onChange={(e) => setResetEmail(e.target.value)}
              required
            />

            <button type="submit" className="submit-btn">
              Reset Password
            </button>
          </form>
        )}
      </main>

      <Footer />
    </>
  );
};


export default SignIn;