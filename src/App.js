import "./App.css";
import Bottom from "./Components/Bottom";
import Navbar from "./Components/Navbar";
import Top from "./Components/Top";

function App() {
  return (
    <div className="grid grid-cols-12 bg-black">
      <div>
        <Navbar className="col-span-1"/>
      </div>
      <div className="col-span-11">
        <Top />
        <Bottom/>
      </div>
    </div>
  );
}

export default App;
