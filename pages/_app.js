import Layout from "../components/Layout";
import "../styles/globals.css";

const CustomApp = ({ Component, pageProps }) => {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
};

export default CustomApp;
