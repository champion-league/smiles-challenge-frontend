import styled from 'styled-components';
import {mobile} from '../../../Styles/generic/Breakpoints';

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background-color: var(--sm-gray-01);
    color: var(--sm-gray-06);
    border: 0px solid var(--sm-gray-06);
    overflow:hidden;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    @media ${mobile.tablet}{
        width: 300px;
        height: 600px;
        border-radius: 20px;
        border: 10px solid var(--sm-gray-06);
  }
`;