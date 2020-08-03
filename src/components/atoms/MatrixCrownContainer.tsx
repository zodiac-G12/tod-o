import styled from '@emotion/styled';

const MatrixCrownContainer = styled.div`
    display: flex;
    overflow: scroll;
    justify-content: space-between;
    height: calc(7.5 * var(--vh));
    padding: calc(4 * var(--vh)) calc(4 * var(--vh)) 0 calc(4 * var(--vh));
    width: ${()=>{
        if (window.innerHeight < window.innerWidth) return "calc((90vw - 20 * var(--vh)) / 3)";
        return "calc((135 * var(--vh) - 20 * var(--vh)) / 3)";
    }};
    background: lightsteelblue;
    border: solid 1px darkslategray;
    border-radius: calc(0.5 * var(--vh)) calc(0.5 * var(--vh)) 0 0;
    border-bottom: none;
`;

export default MatrixCrownContainer;
