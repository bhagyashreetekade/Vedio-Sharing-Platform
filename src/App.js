import "./App.css";
import Bottom from "./Components/Bottom";
import Navbar from "./Components/Navbar";
import Top from "./Components/Top";

function App() {
  return (
    <div className="flex bg-black">
      <div>
        <Navbar className=""/>
      </div>
      <div className="">
        <Top />
        <Bottom/>
      </div>
    </div>
  );
}

export default App;
