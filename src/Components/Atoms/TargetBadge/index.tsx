import React from "react";
import {Container,Star} from './styles';
import { CircularProgressbar,buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

function Index(props:any) {

    const percentage = 85;

  return (
    <Container>
        <Star>&#9733;</Star>
      <CircularProgressbar 
        value={percentage} 
        text={`${percentage}%`} 
        styles={buildStyles({
            rotation: 0.075,
            trailColor: 'var(--sm-gray-01)',
        })}
        />
    </Container>
  );
}

export default Index;