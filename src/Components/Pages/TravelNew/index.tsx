import React from "react";
import FormView from "../../Organisms/Views/FormView";
import {Container,Content} from './styles'
import content from '../../../Util/png/new.png'



function Index(props:any) {



  return (
    <Container>
        <FormView
        >
          <Content src={content}/>
        </FormView>
    </Container>
  );
}

export default Index;