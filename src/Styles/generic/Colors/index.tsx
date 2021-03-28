import { createGlobalStyle } from 'styled-components';

const Colors = createGlobalStyle`
  :root {
      --sm-white-01: #FFFFFF;

      --sm-gray-01: #F2F2F2;
      --sm-gray-02: #D8D8D8;
      --sm-gray-03: #C8C8C8;
      --sm-gray-04: #7C7C7C;
      --sm-gray-05: #717171;
      --sm-gray-06: #474747;

      --sm-orange-01: #F3832E;
      --sm-orange-02: #EF7828;
      --sm-orange-03: #FE511C;
      --sm-orange-04: #804A28;

      --sm-purple-01: #E3D6EB;
      --sm-purple-02: #74309D;
      --sm-purple-03: #5B2D8C;

      --sm-yellow-01: #FDE6D5;
      --sm-yellow-02: #FBDE34;
      
      --sm-magenta-01: #FBCCE8;
      --sm-magenta-02: #ED008C;

      --sm-green-01: #D3EADD;
      --sm-green-02: #219653;
  }
`;

export default Colors;