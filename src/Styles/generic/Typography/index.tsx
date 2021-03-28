import { css } from 'styled-components';
import {mobile} from '../Breakpoints';

const font = {
  nunito:'Nunito'
}

const weight = {
  light: 300,
  regular: 400,
  medium: 500,
  semibold: 600,
  bold: 700,
  black: 900
};

const _nun = css`
  font-family: ${font.nunito}, monospace;
  word-break: break-word;
`

export const _nunh1 = css`
  ${_nun};
  font-size: 25px;
  font-weight: ${weight.black};
`

export const _nunh2 = css`
  ${_nun};
  font-size: 20px;
  font-weight: ${weight.black};
`
export const _nunh3 = css`
  ${_nun};
  font-size: 16px;
  font-weight: ${weight.bold};
`
export const _nuntext = css`
  ${_nun};
  font-size: 11px;
`

export const _nuntextlittle = css`
  ${_nun};
  font-size: 12px;
  @media ${mobile.tablet}{
    font-size: 12px;
  }
  @media ${mobile.desktop}{
      font-size: 12px;
    }
`