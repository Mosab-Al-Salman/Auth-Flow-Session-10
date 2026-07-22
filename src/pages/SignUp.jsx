import { useState, useEffect } from "react";
import {
  createUserWithEmailAndPassword,
  updateProfile,
  sendEmailVerification,
} from "firebase/auth";

import { auth } from "../firebase/config";
import { useNavigate, Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";

import Header from "../components/Header";
import Footer from "../components/Footer";

import { Helmet } from "react-helmet-async";

const SignUp = () => {
  const [user, loading, error] = useAuthState(auth);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");

  const [showError, setShowError] = useState(false);
  const [messageError, setMessageError] = useState("");

  const navigate = useNavigate();

  useEffect(() => {
    if (user && user.emailVerified) {
      navigate("/");
    }
  }, [user, loading, navigate]);

  /*
  const handleDeleteAccount = () => {
    deleteUser(user)
      .then(() => {
        alert("Account deleted successfully");
        navigate("/");
      })
      .catch((err) => {
        alert("Error: " + err.message);
      });
  };
  */

  const handleSignUp = (e) => {
    e.preventDefault();

    setShowError(false);

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;

        sendEmailVerification(user);

        updateProfile(user, {
          displayName: userName,
        })
          .then(() => {
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((err) => {
        const errorCode = err.code;

        setShowError(true);

        switch (errorCode) {
          case "auth/invalid-email":
            setMessageError("البريد الإلكتروني غير صحيح.");
            break;

          case "auth/email-already-in-use":
            setMessageError("البريد الإلكتروني مستخدم بالفعل.");
            break;

          case "auth/weak-password":
            setMessageError("كلمة المرور ضعيفة جداً.");
            break;

          default:
            setMessageError("حدث خطأ ما، حاول مرة أخرى.");
            break;
        }
      });
  };

  if (loading) {
    return (
      <div>
        <Header />
        <main>
          <p>Loading...</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (error) {
    return (
      <div>
        <Header />
        <main>
          <p>Error: {error.message}</p>
        </main>
        <Footer />
      </div>
    );
  }

  if (user && !user.emailVerified) {
    return (
      <div>
        <Header />

        <main className="page-wrapper">
          <div className="auth-form">
            <p>We sent you an email to verify your account</p>

            <div
              className="info-item"
              style={{
                borderBottom: "none",
                marginTop: "20px",
              }}
            >
              <button
                className="delete"
                onClick={() => {
                  sendEmailVerification(auth.currentUser).then(() => {
                    // Email verification sent!
                  });
                }}
              >
                Send again
              </button>
            </div>
          </div>
        </main>

        <Footer />
      </div>
    );
  }

  if (!user) {
    return (
      <>
        <Helmet>
          <title>Sign Up Page</title>
        </Helmet>

        <Header />

        <main className="page-wrapper">
          <form className="auth-form" onSubmit={handleSignUp}>
            <h2>Create Account</h2>

            {showError && (
              <p className="error-message">{messageError}</p>
            )}

            <input
              type="text"
              placeholder="User name"
              required
              onChange={(e) => setUserName(e.target.value)}
            />

            <input
              type="email"
              placeholder="Email"
              required
              onChange={(e) => setEmail(e.target.value)}
            />

            <input
              type="password"
              placeholder="Password"
              required
              onChange={(e) => setPassword(e.target.value)}
            />

            <button type="submit" className="submit-btn">
              Sign Up
            </button>

            <p
              style={{
                textAlign: "center",
                marginTop: "15px",
              }}
            >
              Already have an account?{" "}
              <Link to="/signin">Sign In</Link>
            </p>
          </form>
        </main>

        <Footer />
      </>
    );
  }
};

export default SignUp;