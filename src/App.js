import { useContext } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Data } from "./context/ThemeContext"; 
import Home from './pages/Home';
import Basic from './pages/Basic';
import Fromework from './pages/Fromework';
import Tips from './pages/Tips';

const router = createBrowserRouter([
  { path: "/", element: <Home /> },
  { path: "/Basic", element: <Basic /> },
  { path: "/Fromework", element: <Fromework /> },
  { path: "/Tips", element: <Tips /> },
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