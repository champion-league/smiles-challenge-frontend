import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)<{color:any}>`
    text-decoration: none;
    width: 100%;
    height:50px;
    margin:8px;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    background-color: ${props => props.color};
    color: ${props => props.color == "var(--sm-white-01)" ? "var(--sm-orange-01)" : "var(--sm-white-01)"};
    
    font-weight: bold;
`;