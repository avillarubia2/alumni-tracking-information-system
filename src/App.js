import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Input, Menu } from 'semantic-ui-react';

function App() {

  const [activeItem, setActiveItem] = useState();
  
  return (
    <Menu secondary>
        <Menu.Item
          name='home'
          active={activeItem === 'home'}
          onClick={setActiveItem}
        />
        <Menu.Item
          name='messages'
          active={activeItem === 'messages'}
          onClick={setActiveItem}
        />
        <Menu.Item
          name='friends'
          active={activeItem === 'friends'}
          onClick={setActiveItem}
        />
        <Menu.Menu position='right'>
          <Menu.Item>
            <Input icon='search' placeholder='Search...' />
          </Menu.Item>
          <Menu.Item
            name='logout'
            active={activeItem === 'logout'}
            onClick={setActiveItem}
          />
        </Menu.Menu>
    </Menu>
  );
}

export default App;
