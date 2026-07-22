import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { auth } from "../firebase/config";
import { useAuthState } from "react-firebase-hooks/auth";
import { deleteUser } from "firebase/auth";

const Basic = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!loading) {
      if (!user || !user.emailVerified) {
        navigate("/");
      }
    }
  }, [user, loading, navigate]);

  const handleDeleteAccount = () => {
    if (!user) return;

    if (window.confirm("Are you sure you want to delete your account?")) {
      deleteUser(user)
        .then(() => {
          alert("Account deleted successfully");
          navigate("/");
        })
        .catch((error) => {
          alert("Error: " + error.message);
        });
    }
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

  if (!user || !user.emailVerified) {
    return null;
  }

  return (
    <>
      <Helmet>
        <title>Basic Page</title>
      </Helmet>

      <Header />

      <main className="page-wrapper">
        <div className="user-card">
          <h2>User Profile</h2>

          <div className="info-item">
            <span>Name:</span>
            <strong>{user.displayName || "Guest User"}</strong>
          </div>

          <div className="info-item">
            <span>Email:</span>
            <strong>{user.email}</strong>
          </div>

          <div className="info-item">
            <span>Joined:</span>
            <strong>
              {new Date(user.metadata.creationTime).toLocaleDateString()}
            </strong>
          </div>

          <div className="info-item">
            <span>Last Login:</span>
            <strong>
              {new Date(user.metadata.lastSignInTime).toLocaleDateString()}
            </strong>
          </div>

          <div className="info-item" style={{ borderBottom: "none", marginTop: "20px" }}>
            <button className="delete" onClick={handleDeleteAccount}>
              Delete Account
            </button>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
};

export default Basic;