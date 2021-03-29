import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
    text-decoration: none;
    width: 260px;
    min-height: 150px;
    margin:8px;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    overflow: hidden;
    
    font-weight: bold;
`;
export const Subcontainer = styled.img`
    width:100%;
    height: 100%;
`;