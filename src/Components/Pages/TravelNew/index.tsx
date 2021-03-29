import React from "react";
import FormView from "../../Organisms/Views/FormView";
import {Container,Content} from './styles'
import content from '../../../Util/png/new.png'
import ActionButton from "../../Atoms/ActionButton";
import Space from "../../Atoms/Space";



function Index(props:any) {



  return (
    <Container>
        <FormView
        >
          <Content src={content}/>
          <ActionButton title="Avançar" to="new2"/>
          <Space size={200}/>
        </FormView>
    </Container>
  );
}

export default Index;