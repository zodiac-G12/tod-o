import React, { useState } from 'react';

// dnd
import {SortableContainer, SortableElement} from 'react-sortable-hoc';
import arrayMove from 'array-move';

// atoms components
import Flexy from '../atoms/Flexy';
import Container from '../atoms/Container';

// organisms components
import CrownHead from '../organisms/CrownHead';
import MatrixCrown from '../organisms/MatrixCrown';
import Matrix from '../organisms/Matrix';

// modules
import { sampleTodoDataFunc } from '../../modules/sampleTodoData';
import { addList, deleteList, saveList, saveLists } from '../../modules/listFunctions';

// TODO vh
// TODO typescript
// TODO Alert

function App() {
    const todoDatas = localStorage.todoDatas && JSON.parse(localStorage.todoDatas).length!==0 ?
        JSON.parse(localStorage.todoDatas) : sampleTodoDataFunc(1, "TODO");

    const categories = ["TODO", "PROGRESS", "DONE"];

    // useState Defined
    const [list, setList] = useState(todoDatas);
    const [choiced, setChoice] = useState<number[]>([]);

    return (
        <>
            <CrownHead />
            <Container>
                <Flexy>
                    {categories.map((category) => {
                        return (
                            <MatrixCrown key={`mtc-${category}`}
                                category={category}
                                list={list}
                                choiced={choiced}
                                setList={setList}
                                setChoice={setChoice}
                                addList={addList}
                                deleteList={deleteList}
                                saveLists={saveLists}
                            />
                        );
                    })}
                </Flexy>
                <Flexy>
                    {categories.map((category) => {
                        return (
                            <Matrix key={`mt-${category}`}
                                list={list}
                                category={category}
                                choiced={choiced}
                                setList={setList}
                                setChoice={setChoice}
                                saveList={saveList}
                            />
                        );
                    })}
                </Flexy>
            </Container>
        </>
    );
}

export default App;
