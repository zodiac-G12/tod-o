import React from 'react';

// material-ui components
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';

// atoms components
import DescriptionForm from '../atoms/DescriptionForm';

// molecules components
import DeadLineForm from '../molecules/DeadLineForm';
import CompletenessForm from '../molecules/CompletenessForm';
import DegreesForm from '../molecules/DegreesForm';

const AccordionDetailsView = (props) => {
    return (
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
                    degrees={props.degrees}
                    degreeToColorMap={props.degreeToColorMap}
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
    );
};

export default AccordionDetailsView;
