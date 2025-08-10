import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

const MainLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      <main
        style={{
          border: "2px solid red",
          padding: "10px",
          background: "pink",
          color: "green",
          borderRadius: "10px",
        }}
      >
        {children}
      </main>
      <Footer />
    </>
  );
};

export default MainLayout;
