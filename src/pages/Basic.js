import Footer from "../components/Footer";
import Header from "../components/Header";
import Content from "../components/Content";
import { Helmet } from 'react-helmet-async';


const Basic = () => {
  return (
        <>
      <Helmet>
        <title>Basic Page</title>
      </Helmet>

  <Header/>
  <Content data="Basic" />
  <Footer/>
</>
  );
}

export default Basic;
