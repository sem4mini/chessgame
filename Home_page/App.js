

import React, { useState }  from'react';
import ReactDom from 'react-dom';
import {Button,Carousel} from 'react-bootstrap';
import Amazon from './Images/Amazon.jpg.png';
import Chess from './Images/Chess.jpg.jpg';
import Netflix from './Images/Netflix.jpg.png';
import V from './Images/V.jpg.jpeg';
import './index.css';




import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
const App=()=>{
    const img1="https://picsum.photos/200/300";
    const[name,Setname]=useState("");
    const[pw,setpassword]=useState("");
    const[fulldata,setfulldata]=useState("");
    const[lastname,setlastname]=useState("");

    const formsubmit=(event)=>{
        event.preventDefault();
        setlastname(name)

        setfulldata(pw)
    }


    const inputEvent =(event)=>{
        event.preventDefault();
        Setname(event.target.value);
    }
    const passWord=(event)=>{
        event.preventDefault();
        setpassword(event.target.value)
    }
  
 
    return(
      <>
        <div className="maindiv">
        <h1 style={{color:"greenyellow" ,paddingLeft:"550px",backgroundColor:"indigo",textShadow:"2px 2px #ff0000",paddingTop:"20px"}}>Entertainment hub</h1>
        <form onSubmit={formsubmit}>
            <div >
        

        <input type="text"   placeholder ="Enter Your Name" onChange={inputEvent}  value ={name} /><br/>
        
        <input  type="text"  placeholder="Enter your lastname"  onChange={passWord}  value={pw} /><br/>

        <button type="submit"> Submit</button>
        <br/>  <br/>
        <h1 className="prime"  style={{position:'absolute',top:'30px',right:'150px'}} > Hello {lastname} {fulldata}  !!!</h1>
        <br/>  <br/>  

        
        
  
        </div>
      
        </form>
      
        </div>
        <div className="cool" >
        <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Chess}
      alt="First slide"
      height="400px "
      width="20px"
    />
    <Carousel.Caption>
      <h3>Games</h3>
      <p>Includes all type of  arcade games.</p>
      <a href="index.js" class="btn btn-primary">Play Now Now</a>
      
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Netflix}
      alt="Second slide"
      height="400px "
      width="20px"
      
    />

    <Carousel.Caption>
      <h3>Netflix Platform</h3>
      <p>All netflix shows.</p>
      <a href="https://www.netflix.com/in/title/80100172" class="btn btn-secondary">Watch Now</a>

    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={Amazon}
      alt="Third slide"
      height="400px "
      width="20px"
    />

    <Carousel.Caption>
      <h3>Amazon shows</h3>
      <p>All Amazon shows.</p>
      <a href="https://www.primevideo.com/?ref_=dvm_pds_amz_in_as_s_b_brand28|m_fQQR2NKbc_c" class="btn btn-secondary">Watch Now</a>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
</div>
<img
      className="Red"
      src={V}
      alt="Third slide"
      height="400px "
      width="20px"
    /> 
        </>
        
 
        
        
    )
}
export default App;








