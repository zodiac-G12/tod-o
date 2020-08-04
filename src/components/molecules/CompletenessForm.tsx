import React from 'react';

import GolfCourseIcon from '@material-ui/icons/GolfCourse';
import Slider from '@material-ui/core/Slider';
import withStyles from '@material-ui/core/styles/withStyles';
import Flex from '../atoms/Flex';

// throttle-debounce
import { throttle } from 'throttle-debounce';

const CompletenessForm = (props) => {
    return (
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
    );
};

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

export default CompletenessForm;
