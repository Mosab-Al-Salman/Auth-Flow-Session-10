import { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Data } from "./context/ThemeContext"; 
import Home from './pages/Home';
import Basic from './pages/Basic';
import Fromework from './pages/Fromework';
import Tips from './pages/Tips';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import Erroe404 from './pages/Error404';

const router = createBrowserRouter([
  { path: "/", element: <Home />, errorElement:<Erroe404/> },
  { path: "/home", element: <Home /> },
  { path: "/basic", element: <Basic /> },
  { path: "/fromework", element: <Fromework /> },
  { path: "/tips", element: <Tips /> },
  { path: "/signin", element: <SignIn /> }, 
  { path: "/signup", element: <SignUp /> }, 
  { path: "*", element: <Erroe404 /> }, 
]);

function App() {
  const { theme } = useContext(Data);
  return (
    <div className={theme}>
      <RouterProvider router={router} />
    </div>
  );
}
export default App;