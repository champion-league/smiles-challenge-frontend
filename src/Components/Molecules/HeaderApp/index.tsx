import React from "react"
import {Container,Content} from './styles'

function Index(props:any) {

  return (
    <Container>
      <Content>
        {props.children}
      </Content>
    </Container>

  );
}

export default Index;