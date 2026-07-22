import { Navigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { sendEmailVerification } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";

import Header from "../components/Header";
import Footer from "../components/Footer";
import { auth } from "../firebase/config";

import "../theme.css";

const Home = () => {
  const [user, loading, error] = useAuthState(auth);

  const handleResendVerification = () => {
    sendEmailVerification(user)
      .then(() => {
        alert("Verification email sent!");
      })
      .catch((err) => {
        alert("Error: " + err.message);
      });
  };

  if (loading) {
    return (
      <div>
        <Header />

        <main>
          <p>Initialising User...</p>
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

  // إذا لم يكن المستخدم مسجل دخول اذهب لصفحة تسجيل الدخول
  if (!user) {
    return <Navigate to="/signin" replace />;
  }

  if (!user.emailVerified) {
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
                onClick={handleResendVerification}
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

  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>

      <Header />

      <main className="hero-section">
        <div className="hero-text">
          <h2>Start your journey with Web Development</h2>

          <p>
            Learn step-by-step and build real projects.
          </p>

          <a href="#" className="hero-btn">
            Start Learning
          </a>
        </div>

        <img
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
          alt="Web Development"
          className="hero-img"
        />
      </main>

      <Footer />
    </>
  );
};

export default Home;