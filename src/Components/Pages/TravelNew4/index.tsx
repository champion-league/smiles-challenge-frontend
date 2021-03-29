import React from "react";
import FormView from "../../Organisms/Views/FormView";
import {Container,Content} from './styles'
import content from '../../../Util/png/new4.png'
import ActionButton from "../../Atoms/ActionButton";



function Index(props:any) {



  return (
    <Container>
        <FormView
        >
          <Content src={content}/>
          <ActionButton title="Finalizar Planejamento" to="home" color="var(--sm-purple-02)"/>
          <ActionButton title="Baixar Boleto Bancário" to="home" color="var(--sm-orange-01)"/>
        </FormView>
    </Container>
  );
}

export default Index;