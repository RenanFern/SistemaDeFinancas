import styled from 'styled-components';

export const Container = styled.div`
    color: black;
    display: flex;
    justify-content: space-between;

    button {
        padding: 1rem;
        font-size: 1.1rem;
        border: none;
        border-radius: 0.25rem;
        width: 200px;
        background-color: #5429cc;
        color: #fff;
        transition: filter 0.2s;
        cursor: pointer;
        outline: none;

        &:hover {
            filter: brightness(0.8);
        }
    }
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    font-size: 1.5rem;

    h2 {
        text-align: center;
        margin-bottom: 1rem;
    }

    label {
        margin-bottom: 5px;
    }

    div {
        display: flex;
        flex-direction: column;
        margin: 1rem;
    }
    input,
    select {
        background-color: #e7e9ee;
        padding: 1.2rem;
        border: none;
        border-radius: 0.25rem;
        outline: none;
        font-size: 1rem;

        &::placeholder {
            color: #000;
        }
    }
    input[type='date']:before {
        content: attr(placeholder);
    }

    .registration {
        background-color: #4cd2a2;
        color: #fff;
        padding: 1.2rem;
        border: none;
        border-radius: 0.25rem;
        font-size: 1.2rem;
        cursor: pointer;
        transition: filter 0.2s;

        &:hover {
            filter: brightness(0.9);
        }
    }

    .date-select {
        color: #000;
    }
`;
