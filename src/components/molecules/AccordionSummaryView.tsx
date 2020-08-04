import React from 'react';

import DataInfos from '../molecules/DataInfos';
import DataTitle from '../molecules/DataTitle';

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
