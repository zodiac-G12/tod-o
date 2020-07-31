import React from 'react';

// dnd
import { SortableElement } from 'react-sortable-hoc';

// material-ui components
import GolfCourseIcon from '@material-ui/icons/GolfCourse';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Chip from '@material-ui/core/Chip';
import Slider from '@material-ui/core/Slider';
import TextField from '@material-ui/core/TextField';

// atoms components
import Flexy from '../atoms/Flexy';
import DescriptionTextarea from '../atoms/DescriptionTextarea';
import OriginalLi from '../atoms/OriginalLi';

// molcules components
import DataInfos from '../molecules/DataInfos';
import DataTitle from '../molecules/DataTitle';

const degrees = ["LOW", "MEDIUM", "HIGH", "CRITICAL", "PENDING"];
const degreeToColorMap = {CRITICAL: "red", HIGH: "orange", MEDIUM: "green", PENDING: "indigo", LOW: "blue"};

const SortableItem = SortableElement((props) => (
    <OriginalLi tabIndex={0}>
        <Accordion key={`ac-${props.index}-${props.item.id}`} style={{marginTop: "calc(1 * var(--vh))"}}>
            <AccordionSummary
                expandIcon={ <ExpandMoreIcon /> }
                aria-label="Expand"
                aria-controls="additional-actions1-content"
                id="additional-actions1-header"
            >
                <DataTitle
                    item={props.item}
                    choiced={props.choiced}
                    setList={props.setList}
                    setChoice={props.setChoice}
                    list={props.list}
                    saveList={props.saveList}
                />
                <DataInfos item={props.item} />
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
                    <Flexy style={{marginBottom:"calc(2 * var(--vh))"}}>
                        <div style={{marginRight:"calc(1 * var(--vh))",color:"black"}}>Completeness:</div>
                        <GolfCourseIcon style={{marginRight:"calc(2 * var(--vh))"}}/>
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
                        <div style={{marginLeft:"calc(2 * var(--vh))", width:"calc(5 * var(--vh))", color:"black"}}>[%]</div>
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
                            style={{marginTop:"calc(2 * var(--vh))"}}
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

export default SortableItem;
