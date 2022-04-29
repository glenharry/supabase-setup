import styled from "styled-components";

export const Input = styled.form`
    display: flex;
    gap: 1rem;
    display: flex;
    flex-wrap: nowrap;
    flex-direction: column;

    label {
        color: #667080;
    }
    .input {
        display: flex;
        justify-content: space-between;
        align-items: center;

        input {
            width: 40%;
            height: 3.5rem;
            background-color: black;
            color: white;
            padding-left: 1rem;
            border: 1px solid #defb71;
            border-radius: 16px;
            &#exercise {
                width: 60%;
            }
            &.input__login {
                width: 100% !important;
            }
        }
    }
    .total-volume {
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
