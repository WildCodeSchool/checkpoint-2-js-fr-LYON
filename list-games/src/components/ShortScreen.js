import React from 'react';
import { Link } from 'react-router-dom';

function ShortScreen (props) {
    const params = props.match.params;
  return (
    <div>
     <Link to='/'><button>Return to home page</button></Link>
      {console.log(props)}
      
      <p>{props.name}</p>
      <p>{params.name}</p>
      
    </div>
  )
  };

export default ShortScreen;