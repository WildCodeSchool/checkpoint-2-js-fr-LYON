import React from 'react';
import { Link } from 'react-router-dom';


export default function Screenshots(props) {
  return (
    <div>
      <h1>Name: {props.name}</h1>
      {/* <img src={props.short_screenshots[0].image} alt={props.name} className='gameImg' /> <br/>
      <img src={props.short_screenshots[1].image} alt={props.name} className='gameImg' /> <br/>
      <img src={props.short_screenshots[2].image} alt={props.name} className='gameImg' /> <br/>
      <img src={props.short_screenshots[3].image} alt={props.name} className='gameImg' /> <br/>
      <img src={props.short_screenshots[4].image} alt={props.name} className='gameImg' /> <br/>
      <img src={props.short_screenshots[5].image} alt={props.name} className='gameImg' /> <br/>
      <img src={props.short_screenshots[6].image} alt={props.name} className='gameImg' /> <br/> */}
      <Link to={'/'}>Return to home page</Link>
    </div> 
  )
}