import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100%;
    color: var(--sm-gray-01);
    background-color: var(--sm-orange-02);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
`;

export const Content = styled.img`
    margin:10px;
    width:  100%;
`;

export const Banner = styled.div`
    width: 200px;
`;

export const SectionPlan = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-around;
    color: var(--sm-gray-01);
    font-weight: bold;
`;