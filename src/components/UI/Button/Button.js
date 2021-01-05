import React from 'react'

import classes from './Butoon.module.css'

const Button = (props) => (
    <button
        className={[classes.Button, classes[props.btnType]].join(' ')}
        onClick={props.clicked}>
        {props.children}
    </button>
)

export default Button