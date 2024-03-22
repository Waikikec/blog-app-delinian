import "./App.scss";
import Article from "./components/article/Article";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import Section from "./components/shared/Section/Section";
import Topbar from "./components/topbar/Topbar";

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="layout">
        <Section sectionName={"People News"} />
        <Article />
      </div>
      <Footer />
    </>
  );
}

export default App;
