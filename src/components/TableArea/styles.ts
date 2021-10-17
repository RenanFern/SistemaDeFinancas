import styled from 'styled-components';

export const Container = styled.table`
    width: 1220px;
    margin: auto;
    border-spacing: 0 0.5rem;

    th {
        text-align: left;
        line-height: 1.5rem;
        padding: 1rem 2rem;
        color: #969cb3;
    }

    td {
        padding: 1rem 2rem;
        background-color: #fff;
        justify-content: center;
        align-items: center;
        color: #969cb3;

        &:first-child {
            color: #100;
            font-weight: 500;
            border-radius: 0.25rem 0 0 0.25rem;
        }
        &:last-child {
            border-radius: 0 0.25rem 0.25rem 0;
        }
    }
`;
