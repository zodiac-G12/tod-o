import React from 'react';
import svg from '../../statics/sea-lion.svg';

const packageJson = require("../../../package.json");

const TodoIcon = (props) => {
    return <img style={{height: props.height, width: props.width}} src={svg} alt="" onClick={()=>{alert("version: "+packageJson.version)}}/>;
};

export default TodoIcon;
