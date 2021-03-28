import styled from 'styled-components';

export const Container = styled.div`
    width: 80px;
    height: 80px;
    position: relative;
`;

export const Star = styled.div<{starColor:any}>`
    height: 10px;
    left: calc(50% - 8px);
    top: -8px;
    position: absolute;
    z-index:3;
    color: ${props => props.starColor};
`;

export const Subcontainer = styled.div<{secondaryColor:any}>`
    width: 48px;
    height: 48px;
    background-color: ${props => props.secondaryColor};
    border-radius: 100px;
    display:flex;
    justify-content:center;
    align-items: center;
`;
