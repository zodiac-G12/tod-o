import React from 'react';

import { withStyles } from '@material-ui/core/styles';

// dnd
import { SortableElement } from 'react-sortable-hoc';

// material-ui components
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

// atoms components
import DescriptionForm from '../atoms/DescriptionForm';
import OriginalLi from '../atoms/OriginalLi';

// molcules components
import DataInfos from '../molecules/DataInfos';
import DataTitle from '../molecules/DataTitle';
import DeadLineForm from '../molecules/DeadLineForm';
import CompletenessForm from '../molecules/CompletenessForm';
import DegreesForm from '../molecules/DegreesForm';

const degrees = ["LOW", "MEDIUM", "HIGH", "CRITICAL", "PENDING"];
const degreeToColorMap = {CRITICAL: "red", HIGH: "orange", MEDIUM: "green", PENDING: "indigo", LOW: "blue"};

const SortableItem = SortableElement((props) => (
    <OriginalLi tabIndex={0}>
        <Accordion key={`ac-${props.index}-${props.item.id}`} style={{overflow: "scroll", marginTop: "calc(1 * var(--vh))"}}>
            <StyledAccordionSummary
                expandIcon={ <StyledExpandMoreIcon style={{fontSize: "calc(2.5 * var(--vh))"}} /> }
                style={{paddingLeft: 0}}
            >
                <DataTitle
                    item={props.item}
                    choiced={props.choiced}
                    setList={props.setList}
                    setChoice={props.setChoice}
                    category={props.category}
                    list={props.list}
                    saveList={props.saveList}
                />
                <DataInfos
                    item={props.item}
                    degreeToColorMap={degreeToColorMap}
                />
            </StyledAccordionSummary>
            <AccordionDetails style={{padding: "calc(1.5 * var(--vh))"}}>
                <Typography component={'div'} color="textSecondary">
                    <DescriptionForm
                        item={props.item}
                        setList={props.setList}
                        saveList={props.saveList}
                        list={props.list}
                    />
                    <CompletenessForm
                        item={props.item}
                        setList={props.setList}
                        saveList={props.saveList}
                        list={props.list}
                    />
                    <DegreesForm
                        degrees={degrees}
                        degreeToColorMap={degreeToColorMap}
                        item={props.item}
                        setList={props.setList}
                        saveList={props.saveList}
                        list={props.list}
                    />
                    <DeadLineForm
                        item={props.item}
                        setList={props.setList}
                        saveList={props.saveList}
                        list={props.list}
                    />
                </Typography>
            </AccordionDetails>
        </Accordion>
    </OriginalLi>
));
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
export default SortableItem;
