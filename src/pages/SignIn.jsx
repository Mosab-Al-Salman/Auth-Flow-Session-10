import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/"))
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <Header />
      <main className="page-wrapper">
        <form className="auth-form" onSubmit={handleSignIn}>
          <h2>Sign In</h2>
          <input type="email" onChange={(e) => setEmail(e.target.value)} required placeholder="Email" />
          <input type="password" onChange={(e) => setPassword(e.target.value)} required placeholder="Password" />
          <button type="submit" className="submit-btn">Sign In</button>
        </form>
      </main>

      <Footer />
    </>
  );
};
export default SignIn;