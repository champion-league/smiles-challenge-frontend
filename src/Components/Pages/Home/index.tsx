import React from "react"
import {Container,Content} from './styles'
import UserView from "../../Organisms/Views/UserView"
import content from '../../../Util/png/home.png'


function Index(props:any) {

  return (
    <Container>
      <UserView 
        username="Marcela Pereira"
        plano="Plano 1.000"
        milha={250000.0}
      >
        <Content src={content}/>
      </UserView>
    </Container>
  );
}

export default Index;