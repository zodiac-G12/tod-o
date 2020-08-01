import React from 'react';
import svg from '../../statics/sea-lion.svg';

const TodoIcon = (props) => {
    return <img style={{height: props.height, width: props.width}} src={svg} alt="" />;
};

export default TodoIcon;
