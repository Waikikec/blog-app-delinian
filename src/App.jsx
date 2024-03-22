import "./App.scss";
import Article from "./components/Article/Article";
import Navbar from "./components/Navbar/Navbar";
import Topbar from "./components/Topbar/Topbar";
import Section from "./components/shared/Section/Section";

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="layout">
        <Section sectionName={"People News"} />
        <Article />
      </div>
    </>
  );
}

export default App;
