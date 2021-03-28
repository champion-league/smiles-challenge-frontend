import styled from 'styled-components'
import { Link } from 'react-router-dom';

export const Container = styled.div`
    background-color: var(--sm-orange-01);
    color: var(--sm-gray-01);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height:60px;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    flex:1;
    padding: 0 10px;
`;

export const BackButton = styled(Link)`
`;