import React from 'react';

// dnd
import { SortableContainer } from 'react-sortable-hoc';

// atoms components
import OriginalUl from '../atoms/OriginalUl';

// organisms components
import SortableItem from './SortableItem';

const SortableList = SortableContainer((props) => {
    return (
        <OriginalUl>
            {props.list.filter(item=>item.category===props.category).map((item, index) => (
                <SortableItem
                    key={`item-${props.category}-${index}`}
                    collection={props.category}
                    index={index}
                    item={item}
                    list={props.list}
                    category={props.category}
                    choiced={props.choiced}
                    setList={props.setList}
                    setChoice={props.setChoice}
                    saveList={props.saveList}
                />
            ))}
        </OriginalUl>
    );
});

export default SortableList;
