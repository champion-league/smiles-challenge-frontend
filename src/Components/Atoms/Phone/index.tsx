import React, { useState, useEffect } from "react";
import {getRequest} from "../../../Services"
import {Container} from './styles';


function Index(props:any) {
  const [data, setData] = useState({Hello:""});

  useEffect(() => {
    (async () => {
      const content = await getRequest("");
      setData(content);
    })();
  }, []);

  return (
    <Container>
      {props.children}
    </Container>
  );
}

export default Index;