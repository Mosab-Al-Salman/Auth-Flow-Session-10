import { Helmet } from 'react-helmet-async';
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

const Basic = () => {
  return (
    <>
      <Helmet>
        <title>Basic Page</title>
      </Helmet>

      <Header />
      <main className="page-wrapper">
        <Content data="Basic" />
      </main>
      <Footer />
    </>
  );
}
export default Basic;