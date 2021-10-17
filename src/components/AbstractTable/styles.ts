import styled from 'styled-components';

export const Container = styled.div`
    width: 1220px;
    display: flex;
    justify-content: space-between;
    margin: -70px auto 0;

    .abstract-table {
        width: 300px;
        height: 130px;

        padding: 2rem;

        border-radius: 0.25rem;
        background-color: #fff;
        font-size: 1.3rem;
        box-shadow: 0px 2px 5px 0px rgba(0, 0, 0, 0.1);

        span {
            font-weight: 500;
        }

        div {
            display: flex;
            justify-content: space-between;
        }
    }
    strong {
        font-size: 2rem;
    }
    .iconTable {
        font-size: 2rem;
    }

    .entry {
        color: #4cd2a2;
    }
    .exits {
        color: red;
    }
    .total {
        background-color: #4cd2a2;
        color: #fff;
    }
`;
