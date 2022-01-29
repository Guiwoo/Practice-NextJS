import NavBar from "../components/NavBar";

const CustomApp = ({ Component, pageProps }) => {
  return (
    <>
      <NavBar />
      <Component {...pageProps} />
      <span>hello</span>
      <style jsx global>{`
        a {
          color: white;
        }
      `}</style>
    </>
  );
};

export default CustomApp;
