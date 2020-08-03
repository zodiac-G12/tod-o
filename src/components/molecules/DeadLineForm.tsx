import React from 'react';

import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';

const DeadLineForm = (props) => {
    return (
        <StyledTextField
            label={
                <div style={{
                        fontSize: "calc(2.5 * var(--vh))",
                        color: "black",
                        lineHeight: "calc(0 * var(--vh))"
                }}>
                    Dead Line
                </div>
            }
            type="datetime-local"
            style={{
                marginTop: "calc(2 * var(--vh))",
            }}
            defaultValue={props.item.dead_line.replace(/\//g,"-").replace(" ","T")}
            InputLabelProps={{
                shrink: true,
            }}
            onChange={(e)=>{
                const value = e.target.value.replace(/-/g,"/").replace("T"," ");
                props.setList(props.saveList("dead_line", value, props.item.id, props.list));
            }}
        />
    );
};

const StyledTextField = withStyles({
    root: {
        fontSize: "calc(1.5 * var(--vh))",
    },
})(TextField);

export default DeadLineForm;
