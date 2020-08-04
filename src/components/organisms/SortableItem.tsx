import React from 'react';

// dnd
import { SortableElement } from 'react-sortable-hoc';

// material-ui components
import Accordion from '@material-ui/core/Accordion';

// atoms components
import OriginalLi from '../atoms/OriginalLi';

// molcules components
import AccordionSummaryView from '../molecules/AccordionSummaryView';
import AccordionDetailsView from '../molecules/AccordionDetailsView';


const SortableItem = SortableElement((props) => (
    <OriginalLi tabIndex={0}>
        <Accordion key={`ac-${props.index}-${props.item.id}`} style={{overflow: "scroll", marginTop: "calc(1 * var(--vh))"}}>
            <AccordionSummaryView 
                item={props.item}
                choiced={props.choiced}
                setList={props.setList}
                setChoice={props.setChoice}
                category={props.category}
                list={props.list}
                saveList={props.saveList}
                degreeToColorMap={props.degreeToColorMap} 
            />
            <AccordionDetailsView
                item={props.item}
                setList={props.setList}
                saveList={props.saveList}
                list={props.list}
                degreeToColorMap={props.degreeToColorMap}
                degrees={props.degrees}
            />
        </Accordion>
    </OriginalLi>
));

export default SortableItem;
