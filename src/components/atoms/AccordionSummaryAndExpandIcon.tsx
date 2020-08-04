import React from 'react';

import withStyles from '@material-ui/core/styles/withStyles';

import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const AccordionSummaryAndExpandIcon = (props) => {
    return (
        <StyledAccordionSummary
            expandIcon={ <StyledExpandMoreIcon style={{fontSize: "calc(2.5 * var(--vh))"}} /> }
            style={{paddingLeft: 0}}
        >
            {props.children}
        </StyledAccordionSummary>
    );
};

const StyledAccordionSummary = withStyles({
    expandIcon: {
        padding: 0
    },
    content: {
        display: `${window.innerHeight > window.innerWidth ? "block" : "block"}`,
    }
})(AccordionSummary);

const StyledExpandMoreIcon = withStyles({
    root: {
        padding: "0"
    }
})(ExpandMoreIcon);

export default AccordionSummaryAndExpandIcon;
