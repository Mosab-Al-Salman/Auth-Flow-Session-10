import Footer from "../components/Footer";
import Header from "../components/Header";
import Content from "../components/Content";
import { Helmet } from 'react-helmet-async';


const Tips = () => {
  return (
        <>
        <Helmet>
  <title>Tips Page</title>

  <style>{`
    body {
      background: linear-gradient(
        135deg,
        #f8fafc 0%,
        #e2e8f0 100%
      );
    }

    h1 {
      color: #0f172a;
      font-size: 3rem;
      font-weight: 700;
      text-align: center;
    }
  `}</style>
</Helmet>

      
  <Header/>
  <Content data="Tips" />
  <Footer/>
</>
  );
}

export default Tips;
