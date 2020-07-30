import React, {useState} from 'react';

// dnd
import { SortableContainer, SortableElement, SortableHandle } from 'react-sortable-hoc';
import arrayMove from 'array-move';

// material-ui components for dnd
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import DragHandleIcon from '@material-ui/icons/DragHandle';

// material-ui components
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
import MatrixContainer from '../atoms/MatrixContainer';
import Flex from '../atoms/Flex';
import Flexy from '../atoms/Flexy';
import TitleInput from '../atoms/TitleInput';
import DescriptionTextarea from '../atoms/DescriptionTextarea';
import OriginalLi from '../atoms/OriginalLi';
import OriginalUl from '../atoms/OriginalUl';

const degrees = ["LOW", "MEDIUM", "HIGH", "CRITICAL", "PENDING"];
const degreeToColorMap = {CRITICAL: "red", HIGH: "orange", MEDIUM: "green", PENDING: "indigo", LOW: "blue"};

const DragHandle = SortableHandle(() => (
    <ListItemIcon>
        <DragHandleIcon />
    </ListItemIcon>
));

const SortableItem = SortableElement((props) => (
    <OriginalLi tabIndex={0}>
        <Accordion key={`ac-${props.index}-${props.item.id}`} style={{marginTop: "1vh"}}>
            <AccordionSummary
                expandIcon={ <ExpandMoreIcon /> }
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
                            value={props.item.id}
                            checked={props.choiced.includes(props.item.id)}
                            onClick={(e)=>{
                                const id = parseInt((e.target as HTMLInputElement).value);
                                if (props.choiced.includes(id)) {
                                    props.setChoice(props.choiced.filter(i=>i!==id));
                                } else {
                                    props.setChoice(props.choiced.concat([id]));
                                }
                            }}
                        />
                    }
                    label={
                        <TitleInput
                            value={props.item.title}
                            onChange={(e)=>{
                                const value = e.target.value;
                                props.setList(props.saveList("title", value, props.item.id, props.list));
                            }}
                        />
                    }
                />
                <Flex>
                    <Chip style={{marginLeft: "-7vh", height: "3vh", padding:"0", marginTop: "0.5vh", color:"white",
                        background: degreeToColorMap[props.item.degree]
                    }} label={props.item.degree} />
                    <Chip style={{
                            height: "3vh",
                            marginTop:"0.5vh",
                            marginLeft:"0.5vh",
                            color:"white",
                            background: `rgba(${Math.floor(255-255*parseInt(props.item.completeness)/100)},0,${Math.floor(255*parseInt(props.item.completeness)/100)},1)`
                        }}
                        label={props.item.completeness+"%"}
                    />
                    <Chip
                        style={{height: "3vh", marginTop:"0.5vh", marginLeft:"0.5vh"}}
                        label={new Date((new Date(props.item.dead_line) as any) - (new Date() as any)).getDate()-1+"days"}
                    />
                    <ListItemSecondaryAction>
                        <DragHandle />
                    </ListItemSecondaryAction>
                </Flex>
            </AccordionSummary>
            <AccordionDetails>
                <Typography component={'div'} color="textSecondary">
                    <DescriptionTextarea
                        value={props.item.description}
                        onChange={(e)=>{
                            const value = e.target.value;
                            props.setList(props.saveList("description", value, props.item.id, props.list));
                        }}
                    />
                    <Flexy style={{marginBottom:"2vh"}}>
                        <div style={{marginRight:"1vh",color:"black"}}>Completeness:</div>
                        <GolfCourseIcon style={{marginRight:"2vh"}}/>
                        <Slider
                            defaultValue={props.item.completeness}
                            aria-labelledby="discrete-slider-always"
                            step={1}
                            valueLabelDisplay="on"
                            onChange={(_, n)=>{
                                if(Array.isArray(n)) return;
                                if(n!==0 && !n) return;
                                props.setList(props.saveList("completeness", n, props.item.id, props.list));
                            }}
                        />
                        <div style={{marginLeft:"2vh", width:"5vh", color:"black"}}>[%]</div>
                    </Flexy>
                    {degrees.map(degree => {
                        return (
                            <Chip key={`ch-${degree}`} label={degree} style={{
                                color: props.item.degree!==degree?"rgba(0,0,0,0.87)":"white",
                                background: props.item.degree!==degree?"#e0e0e0": degreeToColorMap[props.item.degree]
                                }}
                                onClick={()=>{
                                    props.setList(props.saveList("degree", degree, props.item.id, props.list));
                                }}
                            />
                        );
                    })}
                    <form>
                        <TextField
                            label={<div style={{color:"black"}}>Dead Line</div>}
                            type="datetime-local"
                            style={{marginTop:"2vh"}}
                            defaultValue={props.item.dead_line.replace(/\//g,"-").replace(" ","T")}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(e)=>{
                                const value = e.target.value.replace(/-/g,"/").replace("T"," ");
                                props.setList(props.saveList("dead_line", value, props.item.id, props.list));
                            }}
                        />
                    </form>
                </Typography>
            </AccordionDetails>
        </Accordion>
    </OriginalLi>
));

const SortableList = SortableContainer((props) => {
    return (
        <OriginalUl>
            {props.list.filter(item=>item.category===props.category).map((item, index) => (
                <SortableItem
                    key={`item-${index}`}
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
 
const Matrix = (props) => {
    const [categorizedList, setCategorizedList] = useState(props.list.filter(item=>item.category===props.category));

    const onSortEnd = ({oldIndex, newIndex, collection}) => {
        setCategorizedList( arrayMove(categorizedList, oldIndex, newIndex) );
        props.setList( props.exchangeList(categorizedList[oldIndex].id, categorizedList[newIndex].id, props.list) );
    };

    return (
        <MatrixContainer>
            <SortableList
                categorizedList={categorizedList}

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
