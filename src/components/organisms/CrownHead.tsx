import React from 'react';

// atoms components
import Crown from '../atoms/Crown';
import Centerizer from '../atoms/Centerizer';
import Title from '../atoms/Title';
import TodoIcon from '../atoms/TodoIcon';

const CrownHead = () => {
    return (
        <Crown>
            <Centerizer>
                <TodoIcon height={"7.5vh"} width={"5vh"} />
                <Title>todo</Title>
            </Centerizer>
        </Crown>
    );
};

export default CrownHead;
