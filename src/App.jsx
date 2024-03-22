import "./App.scss";
import Navbar from "./components/Navbar/Navbar";
import Topbar from "./components/Topbar/Topbar";

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="layout"></div>
    </>
  );
}

export default App;
