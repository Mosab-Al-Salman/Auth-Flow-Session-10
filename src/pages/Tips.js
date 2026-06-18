import { Helmet } from 'react-helmet-async';
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";
import { auth } from "../firebase/config";
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from "react-router-dom";

const Tips = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) return <div className="loading">Loading...</div>;

  return (
    <>
      <Helmet><title>Tips Page</title></Helmet>
      <Header />
      
      <main className="page-wrapper">
        {user ? (
          <Content data="Tips" />
        ) : (
          <div className="auth-box">
            <h2>Welcome to our platform</h2>
            <p>Please <Link to="/signin">Sign in</Link> to continue.</p>
          </div>
        )}
      </main>
      
      <Footer />
    </>
  );
}
export default Tips;