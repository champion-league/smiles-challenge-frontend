import styled from 'styled-components'
import {_nunh1} from '../../../Styles/generic/Typography'

export const Container = styled.div`
    width: 100%;
    height: 100%;
    color: var(--sm-gray-01);
    background-color: var(--sm-orange-02);
    display: flex;
    flex-direction:column;
    align-items: center;
    justify-content: center;
    padding:10px;
`;

export const Subtitle = styled.p`
    ${_nunh1}
    margin-top: 40px;
    margin-bottom: 100px;
    color: var(--sm-purple-02);
`;