import React from 'react';

// molecules components
import DataInfos from '../molecules/DataInfos';
import DataTitle from '../molecules/DataTitle';

// atoms components
import AccordionSummaryAndExpandIcon from '../atoms/AccordionSummaryAndExpandIcon';

const AccordionSummaryView = (props) => {
    return (
        <AccordionSummaryAndExpandIcon>
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
                degreeToColorMap={props.degreeToColorMap}
            />
        </AccordionSummaryAndExpandIcon>
    );
};

export default AccordionSummaryView;
