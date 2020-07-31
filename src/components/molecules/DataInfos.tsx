import React from 'react';

// material-ui components for dnd
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

// material-ui components
import Chip from '@material-ui/core/Chip';

// atoms components
import Flex from '../atoms/Flex';
import DragHandle from '../atoms/DragHandle';

const degreeToColorMap = {CRITICAL: "red", HIGH: "orange", MEDIUM: "green", PENDING: "indigo", LOW: "blue"};

const DataInfos = (props) => {
    return (
        <Flex>
            <Chip style={{marginLeft: "calc(-7 * var(--vh))", height: "calc(3 * var(--vh))", padding:"0", marginTop: "calc(0.5 * var(--vh))", color:"white",
                background: degreeToColorMap[props.item.degree]
            }} label={props.item.degree} />
            <Chip style={{
                    height: "calc(3 * var(--vh))",
                    marginTop:"calc(0.5 * var(--vh))",
                    marginLeft:"calc(0.5 * var(--vh))",
                    color:"white",
                    background: `rgba(${Math.floor(255-255*parseInt(props.item.completeness)/100)},0,${Math.floor(255*parseInt(props.item.completeness)/100)},1)`
                }}
                label={props.item.completeness+"%"}
            />
            <Chip
                style={{height: "calc(3 * var(--vh))", marginTop:"calc(0.5 * var(--vh))", marginLeft:"calc(0.5 * var(--vh))"}}
                label={new Date((new Date(props.item.dead_line) as any) - (new Date() as any)).getDate()-1+"days"}
            />
            <ListItemSecondaryAction>
                <DragHandle />
            </ListItemSecondaryAction>
        </Flex>
    );
}

export default DataInfos;
