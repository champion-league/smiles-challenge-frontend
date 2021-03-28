import React from "react"
import {Container,Content,BackButton} from './styles'
import MaterialIcon from 'material-icons-react'

function Index(props:any) {

  return (
    <Container>
      {props.back? (<BackButton to="/home"><MaterialIcon icon="keyboard_arrow_left" color="var(--sm-gray-01)" /></BackButton>):""}
      <Content>
        {props.children}
      </Content>
    </Container>

  );
}

export default Index;