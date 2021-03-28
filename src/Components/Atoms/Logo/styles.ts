import styled from 'styled-components';

export const Container = styled.svg`
`;

export const Subcontainer = styled.path<{logoColor:any}>`
    fill: ${props => props.logoColor ? props.logoColor : "var(--sm-white-01)"};
`;