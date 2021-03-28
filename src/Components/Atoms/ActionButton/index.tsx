import React from "react"
import {Container} from './styles'

interface Props {
  title: string,
  to: string,
  color?: string | "var(--sm-white-01)",
}

enum Mode {
  primary = 0,
  secondary = 1
}

function Index(props: Props) {

  return (
    <Container  to={props.to} color={props.color? props.color : "var(--sm-white-01)"}>
      {props.title}
    </Container>
  );
}

export default Index;