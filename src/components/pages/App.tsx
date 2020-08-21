import React, { useState } from 'react';
import axios from 'axios';

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

    const url = "https://us-central1-zarashi.cloudfunctions.net/graphql";
    // const url = "http://localhost:5001/zarashi/us-central1/graphql";
    const data = {
        operationName: null,
        query: `
            query {
                books {
                    title
                }
            }
        `,
        variables: {}
    };
    const headers = {
        'Content-Type': 'application/json',
        'Accept': '*/*'
    };

    axios({url: url, method: 'POST', headers: headers, data: data})//body, options})
        .then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });

    const packageJson = require("../../../package.json");
    const appVersion = packageJson.version;
    localStorage.appVersion = appVersion;

    const todoDatas = localStorage.todoDatas && JSON.parse(localStorage.todoDatas).length!==0 ?
        JSON.parse(localStorage.todoDatas) : sampleTodoDataFunc(0, "TODO");

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
