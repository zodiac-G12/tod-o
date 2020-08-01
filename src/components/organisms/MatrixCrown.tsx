import React from 'react';

// atoms components
import Flex from '../atoms/Flex';
import MatrixCrownContainer from '../atoms/MatrixCrownContainer';

// molecules components
import NumCat from '../molecules/NumCat';
import ActionIcons from '../molecules/ActionIcons';

const MatrixCrown = (props) => {
    return (
        <MatrixCrownContainer>
            <Flex key={`mtc-${props.category}-0-flex`}>
                <NumCat list={props.list} category={props.category} />
            </Flex>
            <Flex key={`mtc-${props.category}-1-flex`}>
                <ActionIcons
                    list={props.list}
                    choiced={props.choiced}
                    category={props.category}
                    setList={props.setList}
                    setCategorizedList={props.setCategorizedList}
                    setChoice={props.setChoice}
                    addList={props.addList}
                    deleteList={props.deleteList}
                    saveLists={props.saveLists}
                />
            </Flex>
        </MatrixCrownContainer>
    );
};

export default MatrixCrown;
