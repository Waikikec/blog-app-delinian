import Appbar from "./components/Appbar/Appbar";
import Navbar from "./components/Navbar/Navbar";
import "./layout.scss";

function App() {
  return (
    <div className="layout">
      <Navbar />
      <Appbar />
    </div>
  );
}

export default App;
