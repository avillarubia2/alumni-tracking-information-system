import React, { useState } from 'react';
import NavMenu from './components/nav/navmenu';
import { Sidebar, Icon, Menu, Segment, Header, Image, Button, Container } from 'semantic-ui-react';

import PropTypes from 'prop-types'

const VerticalSidebar = ({ animation, direction, visible }) => (
  <Sidebar
    as={Menu}
    animation={animation}
    direction={direction}
    icon='labeled'
    inverted
    vertical
    visible={visible}
    width='thin'
  >
    <Menu.Item as='a'>
      <Icon name='home' />
      Home
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='gamepad' />
      Games
    </Menu.Item>
    <Menu.Item as='a'>
      <Icon name='camera' />
      Channels
    </Menu.Item>
  </Sidebar>
)


VerticalSidebar.propTypes = {
  animation: PropTypes.string,
  direction: PropTypes.string,
  visible: PropTypes.bool,
}

function App() {

  const [animation, setAnimation] = useState('push');
  const [direction, setDirection] = useState('left');
  const [visible, setVisible] = useState(true);

  const [dimmed, setDimmed] = useState(true);

  const toggleSidebar = () => {
    setVisible(!visible);
  }
  
  return (
    <>
    <Sidebar.Pushable>

    <VerticalSidebar
      animation={animation}
      direction={direction}
      visible={visible}
    />

    <Sidebar.Pusher dimmed={dimmed && visible} onClick={() => visible && toggleSidebar()}>
      <NavMenu toggleSidebar={() => toggleSidebar()} />
    
        <Container>
          
          <Segment basic>
            <Header as='h3'>Application Content</Header>
            <p>Hello Worldsss</p>
          </Segment>
          <Segment basic>
            <Header as='h3'>Application Content</Header>
            <p>Hello Worldsss</p>
          </Segment>
         
        </Container>

      </Sidebar.Pusher>

    </Sidebar.Pushable>

    </>
  );
}

export default App;
