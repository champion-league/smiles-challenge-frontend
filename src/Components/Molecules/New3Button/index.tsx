import React from "react"
import {Container,Subcontainer} from './styles'


interface Props {
  to: string,
  image?: any
}


function Index(props: Props) {

  return (
    <Container to={props.to}>
      <Subcontainer src={props.image}/>
    </Container>
  );
}

export default Index;