import styled from 'styled-components'
import {_nunh3,_nuntext} from '../../../../Styles/generic/Typography'

export const Container = styled.div`
    background-color: var(--sm-gray-01);
    color: var(--sm-orange-01);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height:100%;
`;
export const FirstLine = styled.div`
    ${_nunh3}
    width: 100%;
    display:flex;
    text-transform: uppercase;
    justify-content: space-between;
`;
export const SecondLine = styled.div`
    ${_nuntext}
    width: 100%;
    display:flex;
    justify-content: space-between;
`;