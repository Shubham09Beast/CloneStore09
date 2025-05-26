// import logo from './logo.svg';
import './App.css';
import About from './components/About';
import Navbar from './components/Navbar';
import { Greet } from './components/Greet';
import Welcome from './components/Welcome';
import Visitor from './components/Visitor';
//import TextForm from './components/TextForm';
 

function App() {
  return (
   <>
  <Navbar title="Beast App" aboutText="About Us"/>
  <div className="container my-3">
      {/* <TextForm heading="Enter your Text"/> */}

      {/* <About/> */}

      {/* <Greet /> */}

      <Visitor />
  </div>
  </>
  );
}

export default App;
