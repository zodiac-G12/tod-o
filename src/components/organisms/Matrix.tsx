import React, {useState} from 'react';

// dnd
import arrayMove from 'array-move';

// atoms components
import MatrixContainer from '../atoms/MatrixContainer';

// organisms components
import SortableList from './SortableList';

const Matrix = (props) => {
    const firstCategorizedListData = props.list.filter(item=>item.category===props.category);
    const [categorizedList, setCategorizedList] = useState(firstCategorizedListData);

    const onSortEnd = ({oldIndex, newIndex, collection}) => {
        setCategorizedList( arrayMove(categorizedList, oldIndex, newIndex) );
        props.setList( props.exchangeList(categorizedList[oldIndex].id, categorizedList[newIndex].id, props.list) );
    };

    return (
        <MatrixContainer>
            <SortableList
                onSortEnd={onSortEnd}
                useDragHandle={true}
                lookAxis="y"

                list={props.list}
                category={props.category}
                choiced={props.choiced}
                setList={props.setList}
                setChoice={props.setChoice}
                saveList={props.saveList}
            />
        </MatrixContainer>
    );
};

export default Matrix;
