import React from 'react';
import HelloWorld from './Components/Atoms/HelloWorld';
import Phone from './Components/Atoms/Phone';
import Styles from './Styles'

function App() {
  return (
    <div>
        <Styles/>
        <Phone>
          <HelloWorld/>
        </Phone>
    </div>
  );
}

export default App;
