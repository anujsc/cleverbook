import "./App.css";
import Feauture from "./comonents/Feauture";
import Foo from "./comonents/Foo";

import Home from "./comonents/Home";
import Keys from "./comonents/Keys";
import Mar from "./comonents/Mar";

import Samosa from "./comonents/Samosa";
import Signup from "./comonents/Signup";
import LocomotiveScroll from 'locomotive-scroll';

function App() {

  const scroll = new LocomotiveScroll();  
  return (
    <>
      <div className="">
        <Home />
        <Keys />
        <Mar />
        <Samosa />
        <Feauture />
        <Signup />
        <Foo />
      </div>
    </>
  );
}

export default App;
