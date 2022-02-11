import "../styles/globals.css";
import Layout from "../components/Layout";
import Navbar from "../components/Navbar";
import Footer from '../components/Footer';
import Header from '../components/Header';

function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Navbar />
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Layout>
  );
}

export default MyApp;
