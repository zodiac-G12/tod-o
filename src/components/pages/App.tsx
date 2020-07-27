import React, {useState} from 'react';
import styled from 'styled-components';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import FitnessCenterIcon from '@material-ui/icons/FitnessCenter';
import GolfCourseIcon from '@material-ui/icons/GolfCourse';
import Checkbox from '@material-ui/core/Checkbox';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';

// atoms components
// import Container from '../atoms/Container';
// import Matrix from '../atoms/Matrix';

// organisms components
// import CrownHead from '../organisms/CrownHead';

// modules
import sampleTodoData from '../../modules/sampleTodoData';

// TODO test (styled-components bug?)
// import Crown from '../atoms/Crown';
// import Centerizer from '../atoms/Centerizer';
// import Title from '../atoms/Title';
import TodoIcon from '../atoms/TodoIcon';

// TODO vh
// TODO component分ける
// TODO Error Handling
// TODO typescript
// TODO Alert

function App() {
    const locale = window.navigator.language;
    const todoDatas = localStorage.todoDatas && JSON.parse(localStorage.todoDatas).length!==0 ?
        JSON.parse(localStorage.todoDatas) : sampleTodoData(1, "TODO", locale);

    // useState Defined
    const [list, setList] = useState(todoDatas);
    const [choiced, setChoice] = useState<number[]>([]);

    // Around List Functions
    const addList = (category) => {
        const newId = list.length!==0 ? list[list.length-1].id + 1 : 1;
        const addedList = list.concat(sampleTodoData(newId, category, locale));
        localStorage.todoDatas = JSON.stringify(addedList);
        return addedList;
    };

    const deleteList = () => {
        const deletedList = list.filter((item)=>!choiced.includes(item.id));
        localStorage.todoDatas = JSON.stringify(deletedList);
        return deletedList;
    };

    const saveList = (key, value, id) => {
        const savedList = JSON.parse(JSON.stringify(list));
        let pointIdx;
        savedList.some((item, idx)=>{
            if (item.id===id) {
                pointIdx = idx;
                return true;
            }
            return false;
        });
        if (value==="PROGRESS" && savedList[pointIdx][key]!=="TODO") return savedList;
        if (value==="DONE" && savedList[pointIdx][key]!=="PROGRESS") return savedList;
        savedList[pointIdx][key] = value;
        localStorage.todoDatas = JSON.stringify(savedList);
        return savedList;
    };

    const saveLists = (key, value, choiced) => {
        const savedList = JSON.parse(JSON.stringify(list));
        choiced.forEach(id=>{
            let pointIdx;
            savedList.some((item, idx)=>{
                if (item.id===id) {
                    pointIdx = idx;
                    return true;
                }
                return false;
            });
            if (value==="PROGRESS" && savedList[pointIdx][key]!=="TODO") return;
            if (value==="DONE" && savedList[pointIdx][key]!=="PROGRESS") return;
            savedList[pointIdx][key] = value;
        });
        localStorage.todoDatas = JSON.stringify(savedList);
        return savedList;
    };

    return (
        <div>
            {/* TODO TEST <CrownHead />*/}
            <Crown>
                <Centerizer>
                    <TodoIcon height={"7.5vh"} width={"5vh"} />
                    <Title>todo</Title>
                </Centerizer>
            </Crown>
            {/*TEST*/}
            <Container>
                {/*<div style={{display:"flex", justifyContent:"space-between"}}>*/}
                <Flexy key="flexy-0">
                    {["TODO", "PROGRESS", "DONE"].map((category) => {
                        return (
                            <MatrixCrown key={`mtc-${category}`}>
                                <Flex key={`mtc-${category}-0-flex`}>
                                    <NumEye>
                                        {list.filter(item=>item.category===category).length}
                                    </NumEye>
                                    <div style={{fontSize:"2vh",fontWeight:"bold"}}>{category}</div>
                                </Flex>
                                <Flex key={`mtc-${category}-1-flex`}>
                                    <AddIcon onClick={()=>{ setList(addList(category)); }} />
                                    <DeleteIcon
                                        onClick={()=>{
                                            setList(deleteList());
                                            setChoice([]);
                                        }}
                                    />
                                    {category==="TODO" && (
                                        <FitnessCenterIcon
                                            onClick={()=>{
                                                setList(saveLists("category","PROGRESS",choiced));
                                                setChoice([]);
                                            }} 
                                        />
                                    )}
                                    {category==="PROGRESS" && (
                                        <GolfCourseIcon
                                            onClick={()=>{
                                                setList(saveLists("category","DONE",choiced));
                                                setChoice([]);
                                            }}
                                        />
                                    )}
                                </Flex>
                            </MatrixCrown>
                        );
                    })}
                </Flexy>
                <Flexy key="flexy-1">
                    {["TODO", "PROGRESS", "DONE"].map((category) => {
                        return (
                            <Matrix key={`mt-${category}`}>
                                {list.filter(item=>item.category===category).map((item, index)=>{
                                    return (
                                        <Accordion key={`ac-${index}-${item}`} style={{marginTop: "1vh"}}>
                                            <AccordionSummary
                                              expandIcon={<ExpandMoreIcon />}
                                              aria-label="Expand"
                                              aria-controls="additional-actions1-content"
                                              id="additional-actions1-header"
                                            >
                                                <FormControlLabel
                                                    aria-label="Acknowledge"
                                                    onClick={(event) => event.stopPropagation()}
                                                    onFocus={(event) => event.stopPropagation()}
                                                    control={
                                                        <Checkbox
                                                            value={item.id}
                                                            checked={choiced.includes(item.id)}
                                                            onClick={(e)=>{
                                                                const id = parseInt((e.target as HTMLInputElement).value);
                                                                if (choiced.includes(id)) {
                                                                    setChoice(choiced.filter(i=>i!==id));
                                                                } else {
                                                                    setChoice(choiced.concat([id]));
                                                                }
                                                            }}
                                                        />
                                                    }
                                                    label={
                                                        <TitleInput
                                                            value={item.title}
                                                            onChange={(e)=>{
                                                                const value = e.target.value;
                                                                setList(saveList("title", value, item.id));
                                                            }}
                                                        />
                                                    }
                                                />
                                                <div style={{display:"flex"}}>
                                                    <Chip style={{height: "3vh", padding:"0", marginTop: "0.5vh", color:"white",
                                                        background: item.degree==="CRITICAL"?"red":(item.degree==="HIGH"?"orange":(item.degree==="MEDIUM"?"green":(item.degree==="PENDING"?"indigo":"blue")))
                                                    }} label={item.degree} />
                                                    <Chip style={{
                                                            height: "3vh",
                                                            marginTop:"0.5vh",
                                                            marginLeft:"0.5vh",
                                                            color:"white",
                                                            background: `rgba(${Math.floor(255-255*parseInt(item.completeness)/100)},0,${Math.floor(255*parseInt(item.completeness)/100)},1)`
                                                        }}
                                                        label={item.completeness+"%"}
                                                    />
                                                    <Chip
                                                        style={{height: "3vh", marginTop:"0.5vh", marginLeft:"0.5vh"}}
                                                        label={new Date((new Date(item.dead_line) as any) - (new Date() as any)).getDate()-1+"days"}
                                                    />
                                                </div>
                                            </AccordionSummary>
                                            <AccordionDetails>
                                                <Typography component={'div'} color="textSecondary">
                                                    <DescriptionInput
                                                        value={item.description}
                                                        onChange={(e)=>{
                                                            const value = e.target.value;
                                                            setList(saveList("description", value, item.id));
                                                        }}
                                                    />
                                                    <div style={{display:"flex", justifyContent:"space-between", marginBottom:"2vh"}}>
                                                        <div style={{marginRight:"1vh",color:"black"}}>Completeness:</div>
                                                        <GolfCourseIcon style={{marginRight:"2vh"}}/>
                                                        <Slider
                                                            defaultValue={item.completeness}
                                                            aria-labelledby="discrete-slider-always"
                                                            step={1}
                                                            valueLabelDisplay="on"
                                                            onChange={(_, n)=>{
                                                                setList(saveList("completeness", n, item.id));
                                                            }}
                                                        />
                                                        <div style={{marginLeft:"2vh", width:"5vh", color:"black"}}>[%]</div>
                                                    </div>
                                                    {["LOW","MEDIUM","HIGH","CRITICAL","PENDING"].map(degree => {
                                                        return (
                                                            <Chip key={`ch-${degree}`} label={degree} style={{
                                                                color:item.degree!==degree?"rgba(0,0,0,0.87)":"white",
                                                                background: item.degree!==degree?"#e0e0e0":(degree==="CRITICAL"?"red":(degree==="HIGH"?"orange":(degree==="MEDIUM"?"green":(degree==="PENDING"?"indigo":"blue"))))
                                                                }}
                                                                onClick={()=>{
                                                                    setList(saveList("degree", degree, item.id));
                                                                }}
                                                            />
                                                        );
                                                    })}
                                                    <form>
                                                        <TextField
                                                            label={<div style={{color:"black"}}>Dead Line</div>}
                                                            type="datetime-local"
                                                            style={{marginTop:"2vh"}}
                                                            defaultValue={item.dead_line.replace(/\//g,"-").replace(" ","T")}
                                                            InputLabelProps={{
                                                                shrink: true,
                                                            }}
                                                            onChange={(e)=>{
                                                                const value = e.target.value.replace(/-/g,"/").replace("T"," ");
                                                                setList(saveList("dead_line", value, item.id));
                                                            }}
                                                        />
                                                    </form>
                                                </Typography>
                                            </AccordionDetails>
                                        </Accordion>
                                    );
                                })}
                            </Matrix>
                        );
                    })}
                </Flexy>
            </Container>
        </div>
    );
}

const TitleInput = styled.input`
    outline: none;
    border: none;
    font-size: 1.5vh;
    resize: none;
    color: black;
    font-weight: bold;
    width: 100%;
    margin-right: 5vh;
`;

const DescriptionInput = styled.textarea`
    margin-bottom: 5vh;
    outline: none;
    display: block;
    border: none;
    font-size: 1.5vh;
    width: 25vw;
    resize: none;
`;

const MatrixCrown = styled.div`
    display: flex;
    overflow: scroll;
    justify-content: space-between;
    height: 7.5vh;
    padding: 4vh 4vh 0 4vh;
    width: calc((90vw - 20vh) / 3);
    line-height: 3.5vh;
    background: lightsteelblue;
    border: solid 1px darkslategray;
    border-radius: 0.5vh 0.5vh 0 0;
    border-bottom: none;
`;

const NumEye = styled.div`
    margin-right: 1vw;
    height: 3.5vh;
    width: 3.5vh;
    text-align: center;
    border-radius: 40%;
    color: white;
    background: indianred;
`;

const Flex = styled.div`
    display: flex;
`;

const Flexy = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Crown = styled.div`
    position: fixed;
    top: 0;
    width: 100vw;
    @import url('https://fonts.googleapis.com/css2?family=Ranchers&display=swap');
    font-family: 'Ranchers', cursive;
    font-weight: bold;
    padding: 0;
    display: flex;
    font-size: 4vh;
    color: snow;
    user-select: none;
    text-align: center;
    background: royalblue;
`;

const Centerizer = styled.div`
    left: 0;
    right: 0;
    margin: auto;
    width: auto;
    display: flex;
`;

const Title = styled.div`
    margin-left: 1vh;
    height: 7.5vh;
    line-height: 7.5vh;
`;

const Container = styled.div`
    background: lightcyan;
    min-width: calc(100vw - 10vh);
    overflow-x: scroll;
    height: 82.5vh;
    margin-top: 7.5vh;
    padding: 5vh;
    overflow-y: scroll;
`;

const Matrix = styled.div`
    padding: 4vh;
    padding-top: 1vh;
    height: 65vh;
    border: solid 1px darkslategray;
    border-top: none;
    background: lightsteelblue;
    overflow-y: scroll;
    width: calc((90vw - 20vh) / 3);
`;

export default App;
