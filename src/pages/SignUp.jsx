import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate, Link } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SignUp = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSignUp = (e) => {
    e.preventDefault();
    
    console.log("جاري محاولة التسجيل...");

    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("تم التسجيل بنجاح:", userCredential.user);
        navigate("/"); 
      })
      .catch((error) => {
        alert("خطأ في التسجيل: " + error.message);
      });
  };

  return (
    <>
      <Header />
      <main className="page-wrapper">
        <form className="auth-form" onSubmit={handleSignUp}>
          <h2>Create Account</h2>
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
          <button type="submit" className="submit-btn">Sign Up</button>
          <p style={{ textAlign: "center", fontSize: "0.8rem" }}>
            Already have an account? <Link to="/signin" className="link-text">Sign In</Link>
          </p>
        </form>
      </main>
      <Footer />
    </>
  );
};
export default SignUp;