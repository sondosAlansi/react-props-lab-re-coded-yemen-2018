import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';


const colorsArr=['blue','yellow'];
ReactDOM.render(
  <Spaceship name="Millennium Falcon"
  speed='150'
  hasRockets=true
  colors={colorsArr}
  />,
  document.getElementById('global')
);
