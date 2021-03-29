import React from "react"
import {Container,Subcontainer} from './styles'
import Recife from '../../../Util/png/new2recife.png'

interface Props {
  to: string,
  disney?: boolean
}

enum Mode {
  primary = 0,
  secondary = 1
}

function Index(props: Props) {

  return (
    <Container to={props.to}>
      <Subcontainer src={Recife}/>
    </Container>
  );
}

export default Index;