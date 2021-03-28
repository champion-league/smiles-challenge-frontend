import styled from 'styled-components';
import {_nunh2} from '../../../Styles/generic/Typography'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    color: var(--sm-gray-01);
    background-color: var(--sm-orange-02);
    display: flex;
    align-items: center;
    justify-content: center;
    display: flex;
    flex-direction: column;
`;

export const Subtitle = styled.p`
    ${_nunh2}
    margin-top: 64px;
    color: var(--sm-purple-02);
`;