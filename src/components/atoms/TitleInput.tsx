import styled from '@emotion/styled';

const TitleInput = styled.input`
    outline: none;
    border: none;
    font-size: calc(2.0 * var(--vh));
    padding-left: calc(1 * var(--vh));
    resize: none;
    color: black;
    font-weight: bold;
    width: ${()=>{
        if (window.innerHeight < window.innerWidth) return "calc(((90vw - 20 * var(--vh)) / 3 - (5 * 2 * var(--vh))))";
        return "calc((135 * var(--vh) - 20 * var(--vh)) / 3 - (6 * 2 * var(--vh)));";
    }};
`;

export default TitleInput;
