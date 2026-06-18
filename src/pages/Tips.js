import { Helmet } from 'react-helmet-async';
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

const Tips = () => {
  return (
    <>
      <Helmet>
        <title>Tips Page</title>
      </Helmet>

      <Header />
      <main className="page-wrapper">
        <Content data="Tips" />
      </main>
      <Footer />
    </>
  );
}
export default Tips;