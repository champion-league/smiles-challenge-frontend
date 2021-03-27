import React, { useState, useEffect } from "react";
import {getRequest} from "../../../Services"
import {Container} from './styles';

function Index() {
  const [data, setData] = useState();

  useEffect(() => {
    (async () => {
      const content = await getRequest("");
      setData(content);
    })();
  }, []);

  return (
    <Container>
        <h1>Smiles {data ? data : ""}</h1>
    </Container>
  );
}

export default Index;