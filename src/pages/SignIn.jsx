import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/config";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [messageError, setMessageError] = useState("");
  const navigate = useNavigate();

  const handleSignIn = (e) => {
    e.preventDefault();
    setError(false);

    signInWithEmailAndPassword(auth, email, password)
      .then(() => navigate("/"))
      .catch((error) => {
        const errorCode = error.code;
        setError(true);

        switch (errorCode) {
          case "auth/invalid-email":
            setMessageError("البريد الإلكتروني غير صحيح.");
            break;
          case "auth/invalid-credential":
            setMessageError("البريد الإلكتروني أو كلمة المرور غير صحيحة.");
            break;
          case "auth/too-many-requests":
            setMessageError("تم تعطيل الحساب مؤقتاً، حاول لاحقاً.");
            break;
          case "auth/missing-password":
            setMessageError("يجب إدخال كلمة المرور.");
            break;
          default:
            setMessageError("حدث خطأ ما، يرجى المحاولة مرة أخرى.");
            break;
        }
      });
  };

  return (
    <>
      <Header />
      <main className="page-wrapper">
        <form className="auth-form" onSubmit={handleSignIn}>
          <h2>Sign In</h2>

          {error && <p className="error-message">{messageError}</p>}

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