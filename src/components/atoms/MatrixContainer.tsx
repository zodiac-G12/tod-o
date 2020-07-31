import styled from '@emotion/styled';

const MatrixContainer = styled.div`
    padding: calc(4 * var(--vh));
    padding-top: calc(1 * var(--vh));
    height: calc(65 * var(--vh));
    border: solid 1px darkslategray;
    border-top: none;
    background: lightsteelblue;
    overflow-y: scroll;
    width: calc((90vw - 20 * var(--vh)) / 3);
`;

export default MatrixContainer;
