import React from "react"
import TravelView from "../../Organisms/Views/TravelView"
import {Container,Content} from './styles'
import content from '../../../Util/png/detail.png'

function Index(props:any) {

  return (
    <Container>
        <TravelView
          name="Férias em Recife"
          milha={250000.0}
        >
          <Content src={content}/>
        </TravelView>
    </Container>
  );
}

export default Index;