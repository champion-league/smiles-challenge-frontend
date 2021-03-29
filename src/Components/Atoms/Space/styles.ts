import styled from 'styled-components';

export const Container = styled.div<{size:any}>`
    width: 100%;
    height: ${props => props.size}px;
`;
