import Footer from "../components/Footer";
import Header from "../components/Header";
import { Helmet } from 'react-helmet-async';
import { auth } from "../firebase/config";
import { useAuthState } from 'react-firebase-hooks/auth'; 
import { Link } from "react-router-dom"; 
import "../theme.css"; 

const Home = () => {
  const [user, loading] = useAuthState(auth);

  if (loading) return null;

  return (
    <>
      <Helmet>
        <title>Home Page</title>
      </Helmet>
      <Header />

      {user ? (
        <main className="hero-section">
          <div className="hero-text">
            <h2>Start your journey with Web Development</h2>
            <p>Learn step-by-step and build real projects.</p>
            <a href="#" className="hero-btn">Start Learning</a>
          </div>
          <img
            src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1600&auto=format&fit=crop"
            alt="Web Development"
            className="hero-img"
          />
        </main>
      ) : (
        <main className="home-main">
          <div className="auth-box">
            <h2>Welcome to our platform</h2>
            <p>Please <Link to="/signin" className="auth-link">Sign in</Link> to continue.</p>
          </div>
        </main>
      )}

      <Footer />
    </>
  );
};

export default Home;