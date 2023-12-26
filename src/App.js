
import './App.css';
import Navbar from './Components/Navbar';
import Top from './Components/Top';

function App() {
  return (
    <div className='grid grid-cols-6'>
     <div className='col-span-1 '>
     <Navbar className='fixed' />
     </div>
     <div className='col-span-5'>
      <Top/>
     </div>
    </div>
  );
}

export default App;
