import React from 'react';

import classes from './Image.module.css';


const Image = (props) => {



  return (
    <div className={classes.Image}>
      <img src={props.payload.image} alt='' />
    </div>
  )
}



export default Image;