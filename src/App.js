import React, { useState, useEffect } from "react";
import axios from 'axios';
import "./App.css";
import Image from "./Components/Image"
import Title from "./Components/Title";
import Date from "./Components/Date";
import Explanation from "./Components/Explanation";
import styled from "styled-components";

function App() {

  const [data, setData] = useState()
   
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=YxpSNuXcgxhz0mSiuKgeRHq6FmAkL7HNAxuufqqH')
      .then( data => setData(data.data))
      .catch( err => console.log(err))    
  }, [])

  



  return (
    <Body>
      {!data ? 'loading...' : 
      <Body>
       <Title title={data.title}/>
        <Date date={data.date}/> 
        <Explanation info={data.explanation}/>
        <Image url={data.url}/>
        {/* <Copyright copyright={data.copyright}/> */} 
      </Body>
      }
    </Body>
  );

}


const Body = styled.div`
    background-color: black;
    color: white;
    class-name: App;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
  `

export default App;
