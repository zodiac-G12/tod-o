import styled from '@emotion/styled';

const Container = styled.div`
    background: lightcyan;
    width: ${()=>{
        if (window.innerHeight < window.innerWidth) return "100vw";
        return "calc(150 * var(--vh))";
    }};
    height: calc(82.5 * var(--vh));
    margin-top: calc(7.5 * var(--vh));
    padding: calc(5 * var(--vh));
    overflow-y: hidden;
    overflow-x: scroll;
`;

export default Container;
