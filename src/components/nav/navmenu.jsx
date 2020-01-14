import React, { useState } from 'react';
import { Input, Menu, Container, Responsive, Icon, Button } from 'semantic-ui-react';

const NavMenu = (props) => {

    const [activeItem, setActiveItem] = useState('home');

    return (
        <Menu secondary>
            <Container>

                <Responsive as={Menu.Item} minWidth={767}>
                    <img class="logo" src="https://semantic-ui.com/examples/assets/images/logo.png" />
                </Responsive>

                <Responsive as={Menu.Item} minWidth={767}
                name='home'
                active={activeItem === 'home'}
                onClick={() => setActiveItem('home')}
                />
                <Responsive as={Menu.Item} minWidth={767}
                name='messages'
                active={activeItem === 'messages'}
                onClick={() => setActiveItem('messages')}
                />
                <Responsive as={Menu.Item} minWidth={767}
                name='friends'
                active={activeItem === 'friends'}
                onClick={() => setActiveItem('friends')}
                />
            
                <Responsive as={Menu.Menu} minWidth={767} position='right'>
                    <Menu.Item>
                        <Input icon='search' placeholder='Search...' />
                    </Menu.Item>
                    <Menu.Item
                        name='logout'
                        active={activeItem === 'logout'}
                    />
                </Responsive>

                <Responsive as={Menu.Menu} maxWidth={768}>
                    <Menu.Item as={'a'} onClick={() => props.toggleSidebar()}>
                        <Icon name='bars' />
                    </Menu.Item>
                </Responsive>

            </Container>

        </Menu>
    );
};

export default NavMenu;