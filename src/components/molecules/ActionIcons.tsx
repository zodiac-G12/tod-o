import React from 'react';

import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';

const ActionIcons = (props) => {
    return (
        <>
            <AddIcon
                style={{fontSize: "calc(2.5 * var(--vh))"}}
                onClick={()=>{
                    props.setList(props.addList(props.category, props.list));
                }}
            />
            <DeleteIcon
                style={{fontSize: "calc(2.5 * var(--vh))"}}
                onClick={()=>{
                    props.setList(props.deleteList(props.choiced, props.list));
                    props.setChoice([]);
                }}
            />
            {props.category==="TODO" && (
                <FitnessCenterIcon
                    style={{fontSize: "calc(2.5 * var(--vh))"}}
                    onClick={()=>{
                        props.setList(props.saveLists("category", "PROGRESS", props.choiced, props.list));
                        props.setChoice([]);
                    }} 
                />
            )}
            {props.category==="PROGRESS" && (
                <GolfCourseIcon
                    style={{fontSize: "calc(2.5 * var(--vh))"}}
                    onClick={()=>{
                        props.setList(props.saveLists("category", "DONE", props.choiced, props.list));
                        props.setChoice([]);
                    }}
                />
            )}
        </>
    );
};

export default ActionIcons;
