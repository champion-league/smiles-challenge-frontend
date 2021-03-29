import React from "react";
import {Container} from './styles';

interface Props {
  size?: number | 100,
}

function Index(props:Props) {

  return (
    <Container size={props.size ? props.size : 100}
    >
      <p>  </p>
    </Container>

  );
}

export default Index;