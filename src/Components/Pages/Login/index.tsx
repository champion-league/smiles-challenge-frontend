import React from "react";
import {Container, Subtitle} from './styles';
import Logo from '../../Atoms/Logo'
import ActionButton from "../../Atoms/ActionButton";


function Index(props:any) {

  return (
    <Container>
        <Logo size={150}/>
        <Subtitle>Dreammiles</Subtitle>

        <ActionButton title="Entrar"
        to="home"
        />
        <ActionButton color="var(--sm-orange-01)" title="Criar uma nova Conta"
        to="new"
        />
        <ActionButton color="trasparent" title="Cadastrar depois"
        to="home"
        />
    </Container>
  );
}

export default Index;