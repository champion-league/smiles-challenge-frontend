import React from "react"
import {Container} from './styles'
import UserView from "../../Organisms/Views/UserView"


function Index(props:any) {

  const text = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus venenatis nunc eu quam dictum, et porttitor magna efficitur. Aliquam vel sapien congue, fringilla est sit amet, dapibus elit. Suspendisse tempor et turpis ut gravida. Nulla accumsan, quam ac volutpat vulputate, mi lectus tristique purus, ac faucibus mi dolor eget dui. Integer euismod ligula id orci consectetur, ac fringilla felis faucibus. Aliquam orci risus, viverra in bibendum sed, vehicula ornare leo. Etiam arcu purus, ultrices eu nisi at, luctus pellentesque dolor.

  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sem nisl, dapibus eget justo quis, sagittis varius urna. Nulla dictum lorem ac egestas ornare. Etiam ultrices ultricies auctor. Aenean hendrerit dapibus pretium. Integer porttitor dolor a neque dignissim rhoncus. Donec ipsum mauris, varius lacinia urna a, semper molestie diam. Aliquam blandit, dui et vestibulum tempor, magna diam volutpat lacus, eu iaculis justo neque pellentesque sapien. Pellentesque eget turpis nunc.
  
  Praesent iaculis ac magna a ultricies. Nam commodo et enim feugiat sagittis. Aliquam sit amet arcu bibendum, pretium nisl et, venenatis tortor. Nunc accumsan nisi nisi, et porta erat convallis ac. Vestibulum maximus nisl vestibulum enim porta, cursus fermentum arcu imperdiet. Duis vitae augue quis lectus rhoncus auctor. Pellentesque at congue eros, vitae vulputate felis. Duis eu mollis augue. Quisque quis lacus lacus. Integer quis tempus mi. Etiam fringilla mauris arcu, vitae rhoncus nibh vulputate a. Morbi ut mauris quis nisi consequat suscipit sit amet sed justo. Phasellus iaculis facilisis nisi eu convallis. Aenean dignissim augue nibh, nec consectetur felis condimentum non.
  
  Vivamus mollis ex lacus, quis placerat velit ullamcorper nec. Quisque vitae semper ipsum. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce eget sem scelerisque, pulvinar dolor sit amet, auctor risus. Quisque cursus neque sit amet dignissim commodo. Nulla ante risus, porta porttitor tellus et, pulvinar molestie ex. Donec ut dapibus mi. Cras ac rhoncus lorem. Ut vel magna vel arcu maximus fringilla. Duis ut faucibus neque, ut congue massa. Integer lobortis, magna eget fermentum feugiat, tellus tellus scelerisque ex, vel pharetra ante sem nec nisi. Curabitur pulvinar efficitur imperdiet. Sed rhoncus tincidunt aliquet.
  
  Quisque eget elit porttitor, efficitur velit eu, euismod mi. Aliquam erat volutpat. Proin nisl elit, dignissim eget luctus eget, porttitor non massa. Etiam suscipit fermentum facilisis. Praesent non placerat felis. Proin scelerisque egestas nisi eu ullamcorper. Proin condimentum odio quis maximus suscipit.
  
  `
  return (
    <Container>
      <UserView 
        username="Marcela Pereira"
        plano="Plano 1.000"
        milha={250000.0}
      >
        {text}
      </UserView>
    </Container>
  );
}

export default Index;