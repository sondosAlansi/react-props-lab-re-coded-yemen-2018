// Code The Spaceship Component Here
import React from 'react'
 import ReactDOM from 'react-dom'

export default class Spaceship extends React.Component{
   render(){

     return(
       <div>
     <h2>{this.props.name}</h2>
     <p>{this.props.speed}</p>
     <p>{this.props.hasRockets}</p>
     <ul>
       <li>{this.props.colors.join(', ')}</li>
     </ul>
     </div>
     );
     }
 }
 Spaceship.defaultProps = {
   speed: 'slow',
   hasRockets:false,
   colors:['black','red']
 };
