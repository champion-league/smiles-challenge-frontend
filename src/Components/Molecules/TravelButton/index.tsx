import React from "react"
import {Container,Subcontainer} from './styles'
import Disney from '../../../Util/png/disney.png'
import Recife from '../../../Util/png/recife.png'

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
      <Subcontainer src={props.disney ? Disney : Recife}/>
    </Container>
  );
}

export default Index;