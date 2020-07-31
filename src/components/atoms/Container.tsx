import styled from '@emotion/styled';

const Container = styled.div`
    background: lightcyan;
    min-width: calc(100vw - 10 * var(--vh));
    overflow-x: scroll;
    height: calc(82.5 * var(--vh));
    margin-top: calc(7.5 * var(--vh));
    padding: calc(5 * var(--vh));
    overflow-y: scroll;
`;

export default Container;
