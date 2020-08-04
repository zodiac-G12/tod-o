import React from 'react';

// atoms components
import MatrixContainer from '../atoms/MatrixContainer';

// organisms components
import SortableList from './SortableList';

const Matrix = (props) => {
    const onSortEnd = ({oldIndex, newIndex, collection}) => {
        const filterdList = props.list.filter(item=>item.category===props.category);
        console.log(filterdList)
        props.setList( props.exchangeList(filterdList[oldIndex].id, filterdList[newIndex].id, props.list) );
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
                degreeToColorMap={props.degreeToColorMap}
                degrees={props.degrees}
            />
        </MatrixContainer>
    );
};

export default Matrix;
