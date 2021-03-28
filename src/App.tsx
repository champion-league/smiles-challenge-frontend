import React from 'react';
import HelloWorld from './Components/Atoms/HelloWorld';
import Phone from './Components/Atoms/Phone';
import TargetBadge from './Components/Atoms/TargetBadge';
import Styles from './Styles'

function App() {
  return (
    <div>
        <Styles/>
        <Phone>
          <TargetBadge/>
        </Phone>
    </div>
  );
}

export default App;
