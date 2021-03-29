import React from "react";
import FormView from "../../Organisms/Views/FormView";
import {Container,Content} from './styles'
import content from '../../../Util/png/new.png'
import credito from '../../../Util/png/credito.png'
import credito2 from '../../../Util/png/credito2.png'
import boleto from '../../../Util/png/boleto.png'
import vencimento from '../../../Util/png/vencimento.png'
import pix from '../../../Util/png/pix.png'
import New3Button from '../../Molecules/New3Button'


function Index(props:any) {



  return (
    <Container>
        <FormView
        >
          <New3Button image={vencimento} to="new3"/>
          <New3Button image={credito} to="new4"/>
          <New3Button image={credito2} to="new4"/>
          <New3Button image={boleto} to="new4"/>
          <New3Button image={pix} to="new4"/>
        </FormView>
    </Container>
  );
}

export default Index;