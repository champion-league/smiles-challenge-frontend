import React from "react"
import {Container,FirstLine,SecondLine} from './styles'
import HeaderApp from '../../../Molecules/HeaderApp'
import ColumnScroll from "../../../Molecules/ColumnScroll"

interface Props {
  name?: string |"viagem",
  milha?: number |0,
  children?: any | null
}

function Index(props:Props) {

  return (
    <Container>
      <HeaderApp back>
        <FirstLine>
          <p>{props.name ? props.name : "viagem"}</p>
          <p>{props.milha ? props.milha : 0}</p>
        </FirstLine>
        <SecondLine>
          <p></p>
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