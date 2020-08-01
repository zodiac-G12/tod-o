import React from 'react';

import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import DeleteIcon from '@material-ui/icons/Delete';
import AddIcon from '@material-ui/icons/Add';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';

const ActionIcons = (props) => {
    return (
        <>
            <AddIcon
                onClick={()=>{
                    props.setList(props.addList(props.category, props.list));
                }}
            />
            <DeleteIcon
                onClick={()=>{
                    props.setList(props.deleteList(props.choiced, props.list));
                    props.setChoice([]);
                }}
            />
            {props.category==="TODO" && (
                <FitnessCenterIcon
                    onClick={()=>{
                        props.setList(props.saveLists("category", "PROGRESS", props.choiced, props.list));
                        props.setChoice([]);
                    }} 
                />
            )}
            {props.category==="PROGRESS" && (
                <GolfCourseIcon
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
