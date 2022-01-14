import React, { useEffect, useRef } from 'react';
import classes from './Row.module.css';

const Row = (props) =>{

    
    return(
        <div className={`${classes.container} ${props?.className}`} style={props?.style} >  
            {props.children}
        </div>
    );
}

export default Row;