import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase/config";
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

const Framework = () => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user && !loading) {
      navigate("/");
    }

    if (user && !user.emailVerified) {
      navigate("/");
    }
  }, [user, loading, navigate]);

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

  //if (loading) return <div className="loading">Loading...</div>;
  if (user && user.emailVerified) {
    return (
      <>
        <Helmet>
          <title>Framework Page</title>
        </Helmet>
        <Header />

        <main className="page-wrapper">
          <Content data="Framework" />
        </main>

        <Footer />
      </>
    );
  }
};

export default Framework;
