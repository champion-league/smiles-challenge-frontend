import React from "react"
import {Container,FirstLine,SecondLine} from './styles'
import HeaderApp from '../../../Molecules/HeaderApp'
import ColumnScroll from "../../../Molecules/ColumnScroll"

interface Props {
  username?: string |"visitante",
  plano?: string |"",
  milha?: number |0,
  children?: any | null
}

function Index(props:Props) {

  return (
    <Container>
      <HeaderApp>
        <FirstLine>
          <p>{props.username ? props.username : "visitante"}</p>
          <p>{props.milha ? props.milha : 0}</p>
        </FirstLine>
        <SecondLine>
          <p>{props.plano ? props.plano : ""}</p>
          <p>milhas</p>
        </SecondLine>
      </HeaderApp>
      <ColumnScroll>
        {props.children}
      </ColumnScroll>
    </Container>

  );
}

export default Index;