import React from 'react';

import styled from '@emotion/styled';

const DescriptionForm = (props) => {
    return (
        <DescriptionTextarea
            value={props.item.description}
            onChange={(e)=>{
                e.target.style.height = "10px";
                e.target.style.height = String(e.target.scrollHeight) + "px";
                const value = e.target.value;
                props.setList(props.saveList("description", value, props.item.id, props.list));
            }}
        />
    );
};

const DescriptionTextarea = styled.textarea`
    margin-bottom: calc(5 * var(--vh));
    outline: none;
    display: block;
    border: none;
    font-size: calc(2 * var(--vh));
    width: 90%;
    resize: none;
    text-wrap: nowrap;
    overflow-wrap: break-word;
    height: auto;
    padding: 0;
`;

export default DescriptionForm;
