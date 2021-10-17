import styled from 'styled-components';

export const Container = styled.div`
    width: 1220px;
    margin: 3rem auto 0;

    border-radius: 0.25rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const ContainerAreaDate = styled.div`
    width: 200px;
    display: flex;

    justify-content: space-between;
    align-items: center;

    .arrowDate {
        font-size: 1.5rem;
        color: #969cb9;
        cursor: pointer;
        transition: filter 0.3s ease;

        &:hover {
            filter: brightness(0.5);
        }
    }
`;

export const AreaDate = styled.span`
    font-size: 1rem;
    color: #969eb9; ;
`;
