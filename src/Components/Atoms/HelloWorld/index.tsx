import React, { useState, useEffect } from "react";
import {getRequest} from "../../../Services"
import {Container} from './styles';

interface Backend {
  Hello?: String
}

function Index() {
  const [data, setData] = useState({Hello:""});

  useEffect(() => {
    (async () => {
      const content = await getRequest("");
      setData(content);
    })();
  }, []);

  return (
    <Container>
        <h1>Smiles {data?.Hello }</h1>
    </Container>
  );
}

export default Index;