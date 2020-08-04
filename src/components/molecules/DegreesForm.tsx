import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';

import Chip from '@material-ui/core/Chip';
import Flex from '../atoms/Flex';

const DegreesForm = (props) => {
    return (
        <Flex style={{flexWrap: "wrap"}}>
            {props.degrees.map(degree => {
                return (
                    <StyledChip key={`ch-${degree}`} label={degree} style={{
                            marginBottom: "calc(1.5 * var(--vh))",
                            marginRight: "calc(0.5 * var(--vh))",
                            height: "calc(2.5 * var(--vh))",
                            lineHeight: "calc(2.6 * var(--vh))",
                            fontSize: "calc(1.2 * var(--vh))",
                            color: props.item.degree!==degree?"rgba(0,0,0,0.87)":"white",
                            background: props.item.degree!==degree?"#e0e0e0": props.degreeToColorMap[props.item.degree]
                        }}
                        onClick={()=>{
                            props.setList(props.saveList("degree", degree, props.item.id, props.list));
                        }}
                    />
                );
            })}
        </Flex>
    );
};

const StyledChip = withStyles({
    label: {
        padding: "0 calc(1 * var(--vh))"
    }
})(Chip);

export default DegreesForm;
