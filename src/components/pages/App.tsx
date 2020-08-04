import React, { useState } from 'react';

// atoms components
import Flexy from '../atoms/Flexy';
import Container from '../atoms/Container';

// organisms components
import CrownHead from '../organisms/CrownHead';
import MatrixCrown from '../organisms/MatrixCrown';
import Matrix from '../organisms/Matrix';

// modules
import { sampleTodoDataFunc } from '../../modules/sampleTodoData';
import { addList, deleteList, saveList, saveLists, exchangeList } from '../../modules/listFunctions';


const App = () => {
    const todoDatas = localStorage.todoDatas && JSON.parse(localStorage.todoDatas).length!==0 ?
        JSON.parse(localStorage.todoDatas) : sampleTodoDataFunc(1, "TODO");

    const categories = ["TODO", "PROGRESS", "DONE"];
    const degrees = ["LOW", "MEDIUM", "HIGH", "CRITICAL", "PENDING"];
    const degreeToColorMap = {CRITICAL: "red", HIGH: "orange", MEDIUM: "green", PENDING: "indigo", LOW: "blue"};

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
                                list={list}
                                category={category}
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
                                exchangeList={exchangeList}
                                degrees={degrees}
                                degreeToColorMap={degreeToColorMap}
                            />
                        );
                    })}
                </Flexy>
            </Container>
        </>
    );
}

export default App;
