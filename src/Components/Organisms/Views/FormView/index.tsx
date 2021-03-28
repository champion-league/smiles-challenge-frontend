import React from "react"
import {Container,FirstLine,SecondLine} from './styles'
import HeaderApp from '../../../Molecules/HeaderApp'
import ColumnScroll from "../../../Molecules/ColumnScroll"
import Logo from '../../../Atoms/Logo'

interface Props {
  name?: string |"viagem",
  milha?: number |0,
  children?: any | null
}

function Index(props:Props) {

  return (
    <Container>
      <HeaderApp back>
        <Logo size={90}/>
      </HeaderApp>
      <ColumnScroll>
        {props.children}
      </ColumnScroll>
    </Container>

  );
}

export default Index;