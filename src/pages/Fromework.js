import Footer from "../components/Footer";
import Header from "../components/Header";
import Content from "../components/Content";
import { Helmet } from 'react-helmet-async';

const Fromework = () => {
  return (
        <>
        <Helmet>
        <title>Fromework Page</title>

                      <style type="text/css">{`
          body {
            background-color: blue;
          }

          p {
            font-size: 12px;
          }
        `}</style>
        
      </Helmet>

  <Header/>
  <Content data="Fromework" />
  <Footer/>
</>
  );
}

export default Fromework;