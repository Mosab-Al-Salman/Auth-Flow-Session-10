import { Helmet } from 'react-helmet-async';
import Header from "../components/Header";
import Content from "../components/Content";
import Footer from "../components/Footer";

const Basic = () => {
  return (
    <>
      <Helmet>
        <title>Frameworks Page</title>
      </Helmet>

      <Header />
      <main className="page-wrapper">
        <Content data="Frameworks" />
      </main>
      <Footer />
    </>
  );
}
export default Basic;