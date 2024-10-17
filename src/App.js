// import logo from './logo.svg';
import PreContent from './Body_Component/PreContent';
import './App.css';
import Navbar from "./NavBar_Component/Navbar"
import img1 from "./Assets/img1.webp"

import Cards from './Body_Component/Cards';
import data from "./data"
import GetApplication from './Footer_Components/getApplication';
import CopyRightSection from './Footer_Components/CopyRightSection';


function App() {
  return (
    <div className="App">
     <Navbar/>
     <PreContent/>
     <div id='CardsMain'>  
     <div id='mainSub'>
    {data.map((item) => {
  
    return(
        
    <Cards
  
      imgSrc={item.imgSrc} 
      h2={item.h2} 
      div={item.div} 
      button = {item.button}
    />
   ) })}
   </div>
   </div>

     <GetApplication/>
     <CopyRightSection/>
    </div>
  );
}

export default App;
