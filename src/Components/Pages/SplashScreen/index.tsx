import React from "react"
import {Container,Subtitle} from './styles'
import Logo from '../../Atoms/Logo'

function Index(props:any) {

  return (
    <Container>
        <Logo size={180}/>
        <Subtitle>Dreammiles</Subtitle>
    </Container>
  );
}

export default Index;