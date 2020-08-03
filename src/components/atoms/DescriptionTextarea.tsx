import styled from '@emotion/styled';

const DescriptionTextarea = styled.textarea`
    margin-bottom: calc(5 * var(--vh));
    outline: none;
    display: block;
    border: none;
    font-size: calc(2 * var(--vh));
    width: 90%;
    resize: none;
    text-wrap: nowrap;
    overflow-wrap: break-word;
    height: auto;
    padding: 0;
`;

export default DescriptionTextarea;
