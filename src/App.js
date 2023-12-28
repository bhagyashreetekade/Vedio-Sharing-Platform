import "./App.css";
import Bottom from "./Components/Bottom";
import Navbar from "./Components/Navbar";
import Top from "./Components/Top";

function App() {
  return (
    <div className="flex">
      <div>
        <Navbar className="fixed" />
      </div>
      <div>
        <Top />
      </div>
    </div>
  );
}

export default App;
