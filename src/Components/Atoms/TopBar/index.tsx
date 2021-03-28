import React from "react"
import {Container} from './styles'

function Index() {

    const time = new Date()
    const now = `${time.getHours()}:${time.getMinutes()}`
  return (
    <Container>
        {now}  
    </Container>

  );
}

export default Index;