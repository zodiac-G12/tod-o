import React from 'react';

import NumEye from '../atoms/NumEye';

const NumCat = (props) => {
    return (
        <>
            <NumEye>
                {props.list.filter(item=>item.category===props.category).length}
            </NumEye>
            <div style={{fontSize:"2vh", fontWeight:"bold"}}>{props.category}</div>
        </>
    );
};

export default NumCat;
