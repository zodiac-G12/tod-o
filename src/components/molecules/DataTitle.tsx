import React from 'react';

// material-ui components
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

// atoms components
import TitleInput from '../atoms/TitleInput';

const DataTitle = (props) => {
    return (
        <FormControlLabel
            aria-label="Acknowledge"
            onClick={(event) => event.stopPropagation()}
            onFocus={(event) => event.stopPropagation()}
            control={
                <Checkbox
                    value={props.item.id}
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
