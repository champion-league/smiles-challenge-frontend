import React from "react"
import {Container,Content,SectionPlan} from './styles'
import UserView from "../../Organisms/Views/UserView"
import content from '../../../Util/png/home.png'
import BannerPurple from "../../Atoms/BannerPurple";
import BadgeButton from "../../Atoms/BadgeButton";
import TravelButton from "../../Molecules/TravelButton";


function Index(props:any) {

  return (
    <Container>
      <UserView 
        username="Marcela Pereira"
        plano="Plano 1.000"
        milha={250000.0}
      >
        <BannerPurple/>
        <SectionPlan>
          <p>Viagens Planejadas</p>
          <BadgeButton title="Novo +" to="new"/>
        </SectionPlan>
        <TravelButton to="detail"/>
        <TravelButton disney to="detail"/>
      </UserView>
    </Container>
  );
}

export default Index;