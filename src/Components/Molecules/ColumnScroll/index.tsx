import React from "react"
import {Container} from './styles'

function Index(props:any) {

  return (
    <Container>
      {props.children}
    </Container>

  );
}

export default Index;