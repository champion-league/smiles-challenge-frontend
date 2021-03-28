import React from "react";
import {Container,Star,Subcontainer} from './styles';
import { CircularProgressbarWithChildren,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import MaterialIcon from 'material-icons-react';

interface Props {
    percent: number | 0;
    type: Type | Type.PLANE;
}

export enum Type{
    PLANE = "airplanemode_active",
    HOTEL = "local_hotel",
    FOOD = "restaurant",
    ART = "theater_comedy"
}

function Index(props:Props) {

    const percentage = props.percent>0 ? (17*props.percent)/20 : 0;
    const primaryColor = ()=>{
        switch(props.type){
            case Type.PLANE:
                return 'var(--sm-orange-01)'
            break;
            case Type.HOTEL:
                return 'var(--sm-purple-02)'
            break;
            case Type.FOOD:
                return 'var(--sm-green-02)'
            break;
            case Type.ART:
                return 'var(--sm-magenta-02)'
            break;
        }
    }
    const secondaryColor = ()=>{
        switch(props.type){
            case Type.PLANE:
                return 'var(--sm-yellow-01)'
            break;
            case Type.HOTEL:
                return 'var(--sm-purple-01)'
            break;
            case Type.FOOD:
                return 'var(--sm-green-01)'
            break;
            case Type.ART:
                return 'var(--sm-magenta-01)'
            break;
        }
    }
    const starColor = () => props.percent < 100 ? secondaryColor() : 'var(--sm-yellow-02)'

  return (
    <Container>
        <Star starColor={starColor()}>&#9733;</Star>
      <CircularProgressbarWithChildren
        value={percentage} 
        styles={buildStyles({
            rotation: 0.075,
            pathColor: primaryColor(),
            trailColor: "var(--sm-gray-01)",
        })}
        >
            <Subcontainer secondaryColor={secondaryColor()}>
            <MaterialIcon icon={props.type} color={primaryColor()} />
            </Subcontainer>
        </CircularProgressbarWithChildren>
    </Container>
  );
}

export default Index;