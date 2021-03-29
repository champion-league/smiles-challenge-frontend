import React from "react";
import FormView from "../../Organisms/Views/FormView";
import {Container,Content} from './styles'
import New2Button from '../../Molecules/New2Button'



function Index(props:any) {



  return (
    <Container>
        <FormView
        >
          <New2Button to="new3"/>
          <New2Button to="new3"/>
        </FormView>
    </Container>
  );
}

export default Index;