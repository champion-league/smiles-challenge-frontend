import React from 'react';
import Colors from './generic/Colors';
import Reset from './generic/Reset';

export interface Props {
  dark?: Boolean | null;
}

const Index: React.FC<Props> = props => {
      return (
        <>
         <Reset/>
         <Colors/>
        </>
      );
    }

export default Index;