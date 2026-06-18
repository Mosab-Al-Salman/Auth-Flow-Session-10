import { Helmet } from 'react-helmet-async';
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

const Framework = () => {
  return (
    <>
      <Helmet>
        <title>Fromework Page</title>
      </Helmet>

      <Header />
      <main className="page-wrapper">
        <Content data="Fromework" />
      </main>
      <Footer />
    </>
  );
}
export default Framework;