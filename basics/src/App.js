import About from "./About";
import Contact from "./Contact";
import Greeting from "./Greeting";
import Header from "./Header";
import Home from "./Home";

function App() {
  return (
    <div><h2>Hello from React js</h2>
   {/*<Header/>
   <Home/>
   <About/>
   <Contact/>*/}
   <Greeting name = {'Aiman'}/>
   <Greeting name = {'Almaz'}/>
   </div>
   
    
  );
}

export default App;
