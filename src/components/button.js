import styled from "styled-components";

export const Button = styled.button`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 24px;
    border: none;
    background: #defb71;
    border-radius: 35px;
    box-sizing: border-box;
    &:hover {
        background: #c3e05c;
    }

    &:focus-within {
        background: #c3e05c;
        border: solid 2px #7f913c;
    }
    &:focus {
        background: #c3e05c;
        border: solid 2px #7f913c;
    }
    &:focus-visible {
        background: #c3e05c;
        border: solid 2px #7f913c;
    }
`;
