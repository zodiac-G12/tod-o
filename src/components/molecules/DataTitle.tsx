import React from 'react';

// material-ui components
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// atoms components
import TitleInput from '../atoms/TitleInput';

const DataTitle = (props) => {
    return (
        <FormControlLabel
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            style={{marginLeft: 0, height: "calc(1.5 * var(--vh))", padding: "calc(1 * var(--vh))", fontSize: "calc(1.5 * var(--vh))"}}
            control={
                <Checkbox
                    value={props.item.id}
                    style={{marginTop: "calc(4 * var(--vh))", fontSize: "calc(1.5 * var(--vh))", width: 0,
                        transform: `${window.innerHeight > window.innerWidth ? "scale(0.8, 0.8)" : "scale(1,1)"}`}}
                    checked={props.choiced.includes(props.item.id)}
                    onClick={(e)=>{
                        const id = parseInt((e.target as HTMLInputElement).value);
                        if (props.choiced.includes(id)) {
                            props.setChoice(props.choiced.filter(i=>i!==id));
                        } else {
                            props.setChoice(props.choiced.concat([id]));
                        }
                    }}
                />
            }
            label={
                <TitleInput
                    value={props.item.title}
                    onChange={(e)=>{
                        const value = e.target.value;
                        props.setList(props.saveList("title", value, props.item.id, props.list));
                    }}
                />
            }
        />
    );
};


export default DataTitle;
