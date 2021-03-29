import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)<{color:any}>`
    text-decoration: none;
    padding:5px;
    margin:8px;
    display:flex;
    align-items: center;
    justify-content: center;
    border-radius: 10px;
    border: 1px solid ${props => props.color};
    color: ${props => props.color };
    
    font-weight: bold;
`;