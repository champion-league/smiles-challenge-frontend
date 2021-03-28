import styled from 'styled-components';

export const Container = styled.div`
    width: 80px;
    height: 80px;
    position: relative;
`;

export const Star = styled.div`
    height: 10px;
    left: calc(50% - 8px);
    top: -8px;
    position: absolute;
    color: var(--sm-yellow-01);
`;