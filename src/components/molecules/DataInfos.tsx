import React from 'react';

// material-ui withStyles
import withStyles from '@material-ui/core/styles/withStyles';

// material-ui components for dnd
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

// material-ui components
import Chip from '@material-ui/core/Chip';

// atoms components
import Flex from '../atoms/Flex';
import DragHandle from '../atoms/DragHandle';

const DataInfos = (props) => {
    return (
        <Flex style={{padding: "calc(1 * var(--vh)) 0 0 calc(5 * var(--vh))"}}>
            <StyledChip style={{
                    fontSize: "calc(1.2 * var(--vh))",
                    // marginLeft: "calc(7 * var(--vh))",
                    height: "calc(2.5 * var(--vh))",
                    marginTop: "calc(0.5 * var(--vh))",
                    color: "white",
                    background: props.degreeToColorMap[props.item.degree]
                }}
                label={props.item.degree}
            />
            <StyledChip style={{
                    fontSize: "calc(1.2 * var(--vh))",
                    marginLeft: "calc(0.5 * var(--vh))",
                    height: "calc(2.5 * var(--vh))",
                    marginTop: "calc(0.5 * var(--vh))",
                    color: "white",
                    background: `rgba(${Math.floor(220-220*parseInt(props.item.completeness)/100)},20,${Math.floor(195*parseInt(props.item.completeness)/100+60)},1)`
                }}
                label={props.item.completeness+"%"}
            />
            <StyledChip
                style={{
                    fontSize: "calc(1.2 * var(--vh))",
                    marginLeft: "calc(0.5 * var(--vh))",
                    height: "calc(2.5 * var(--vh))",
                    marginTop: "calc(0.5 * var(--vh))"
                }}
                label={new Date((new Date(props.item.dead_line) as any) - (new Date() as any)).getDate()-1+"days"}
            />
            <ListItemSecondaryAction style={{padding:"0"}}>
                <DragHandle />
            </ListItemSecondaryAction>
        </Flex>
    );
}

const StyledChip = withStyles({
    label: {
        padding: "0 calc(1 * var(--vh))"
    }
})(Chip);

export default DataInfos;
