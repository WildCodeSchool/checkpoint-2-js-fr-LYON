import React, { Component } from 'react';

export class Footer extends Component {
  render () {
    return (
      <div style={headerStyle}>
        <h4>Nathan Guillaumin</h4>
        <h5>Wild Code School - 2020</h5>
      </div>
    );
  }
}

const headerStyle = {
  backgroundColor: '#333',
  color: 'red',
  marginTop: '40px',
  height: '15vh',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
};

export default Footer;