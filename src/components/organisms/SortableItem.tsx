import React from 'react';

import { withStyles } from '@material-ui/core/styles';

// dnd
import { SortableElement } from 'react-sortable-hoc';

// throttle-debounce
import { throttle, debounce } from 'throttle-debounce';

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
import Flex from '../atoms/Flex';
import DescriptionTextarea from '../atoms/DescriptionTextarea';
import OriginalLi from '../atoms/OriginalLi';

// molcules components
import DataInfos from '../molecules/DataInfos';
import DataTitle from '../molecules/DataTitle';

const degrees = ["LOW", "MEDIUM", "HIGH", "CRITICAL", "PENDING"];
const degreeToColorMap = {CRITICAL: "red", HIGH: "orange", MEDIUM: "green", PENDING: "indigo", LOW: "blue"};

const SortableItem = SortableElement((props) => (
    <OriginalLi tabIndex={0}>
        <Accordion key={`ac-${props.index}-${props.item.id}`} style={{overflow: "scroll", marginTop: "calc(1 * var(--vh))"}}>
            <StyledAccordionSummary
                expandIcon={ <StyledExpandMoreIcon style={{fontSize: "calc(2.5 * var(--vh))"}} /> }
                style={{paddingLeft: 0}}
            >
                <DataTitle
                    item={props.item}
                    choiced={props.choiced}
                    setList={props.setList}
                    setChoice={props.setChoice}
                    category={props.category}
                    list={props.list}
                    saveList={props.saveList}
                />
                <DataInfos item={props.item} />
            </StyledAccordionSummary>
            <AccordionDetails
                style={{padding: "calc(1.5 * var(--vh))"}}
            >
                <Typography component={'div'} color="textSecondary">
                    {/*description form*/}
                    <DescriptionTextarea
                        value={props.item.description}
                        onChange={(e)=>{
                            // FIXME too heavy
                            console.log("in", e)
                            console.log(e.target.scrollHeight)
                            e.target.style.height = "10px";
                            e.target.style.height = String(e.target.scrollHeight) + "px";
                            // console.log(e.scrollHeight)
                            const value = e.target.value;
                            // e.target.value = value;
                            // await (new Promise(resolve => setTimeout(resolve, 1000)));
                            props.setList(props.saveList("description", value, props.item.id, props.list));
                        }}
                    />
                    {/*completeness form*/}
                    <Flex style={{marginBottom: "calc(2 * var(--vh))", fontSize: "calc(1.5 * var(--vh))"}}>
                        <div style={{
                            fontSize: "calc(2.0 * var(--vh))",
                            marginRight: "calc(1 * var(--vh))",
                            color: "black"
                        }}>
                            Completeness:
                        </div>
                        <GolfCourseIcon style={{
                            fontSize: "calc(2.5 * var(--vh))",
                            marginRight: "calc(1 * var(--vh))"
                        }}/>
                        <StyledSlider
                            defaultValue={props.item.completeness}
                            aria-labelledby="discrete-slider-always"
                            step={1}
                            valueLabelDisplay="auto"//"on"
                            onChange={throttle(100, (_, n) => {
                                if(Array.isArray(n)) return;
                                if(n!==0 && !n) return;
                                props.setList(props.saveList("completeness", n, props.item.id, props.list));
                            }, false)}
                        />
                        <div style={{
                            fontSize: "calc(2.0 * var(--vh))",
                            marginLeft: "calc(2 * var(--vh))",
                            width: "calc(5 * var(--vh))",
                            color: "black"
                        }}>
                            [%]
                        </div>
                    </Flex>
                    {/*degree form*/}
                    <Flex style={{flexWrap: "wrap"}}>
                    {degrees.map(degree => {
                        return (
                            <StyledChip key={`ch-${degree}`} label={degree} style={{
                                    marginBottom: "calc(1.5 * var(--vh))",
                                    marginRight: "calc(0.5 * var(--vh))",
                                    height: "calc(2.5 * var(--vh))",
                                    lineHeight: "calc(2.6 * var(--vh))",
                                    fontSize: "calc(1.2 * var(--vh))",
                                    color: props.item.degree!==degree?"rgba(0,0,0,0.87)":"white",
                                    background: props.item.degree!==degree?"#e0e0e0": degreeToColorMap[props.item.degree]
                                }}
                                onClick={()=>{
                                    props.setList(props.saveList("degree", degree, props.item.id, props.list));
                                }}
                            />
                        );
                    })}
                    </Flex>
                    {/*dead_line form*/}
                    <StyledTextField
                        label={
                            <div style={{
                                    fontSize: "calc(2.5 * var(--vh))",
                                    color: "black",
                                    lineHeight: "calc(0 * var(--vh))"
                            }}>
                                Dead Line
                            </div>
                        }
                        type="datetime-local"
                        style={{
                            marginTop: "calc(2 * var(--vh))",
                        }}
                        defaultValue={props.item.dead_line.replace(/\//g,"-").replace(" ","T")}
                        InputLabelProps={{
                            shrink: true,
                        }}
                        onChange={(e)=>{
                            const value = e.target.value.replace(/-/g,"/").replace("T"," ");
                            props.setList(props.saveList("dead_line", value, props.item.id, props.list));
                        }}
                    />
                </Typography>
            </AccordionDetails>
        </Accordion>
    </OriginalLi>
));
const StyledChip = withStyles({
    label: {
        padding: "0 calc(1 * var(--vh))"
    }
})(Chip);
const StyledTextField = withStyles({
    root: {
        fontSize: "calc(1.5 * var(--vh))",
    },
})(TextField);
const StyledAccordionSummary = withStyles({
    expandIcon: {
        padding: 0
    },
    content: {
        display: `${window.innerHeight > window.innerWidth ? "block" : "block"}`,
    }
})(AccordionSummary);
const StyledSlider = withStyles({
    root: {
        marginTop: `${window.innerHeight > window.innerWidth ? "calc(-1.5 * var(--vh))" : "0"}`,
        width: "30%"
    },
    valueLabel: {
        fontSize: "calc(1.5 * calc(var(--vh)))",
        // width: "calc(1.5 * calc(var(--vh)))",
        // height: "calc(1.5 * calc(var(--vh)))"
    },
})(Slider);
const StyledExpandMoreIcon = withStyles({
    root: {
        padding: "0"
    }
})(ExpandMoreIcon);
export default SortableItem;
