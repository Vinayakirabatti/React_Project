import React from 'react'
import { Image} from "react-bootstrap"
import { Button } from "react-bootstrap"
import { Route } from 'react-router-dom'
import img from '../imges/homedi.png';

const Home = () => {
  return (
    <div class="bg-img">
      Lets Understand the basic use of sql injection
      <br></br>
      <div class='center'>
        <img src={img} width="800" height="500" />
      </div>
    </div>
  )
}

export default Home;
