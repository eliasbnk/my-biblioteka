import { useState } from 'react';
import { useBooksContext } from '../../lib/books-context';
import { Link } from 'react-router-dom';
import { Input, Menu } from 'semantic-ui-react';

export const NavBar = () => {
  const {debouncedChangeHandler} = useBooksContext()
  const [activeItem, setActiveItem] = useState('Books To Read');
  const handleItemClick = (_, { name }) => setActiveItem(name);
  return (
    <Menu pointing secondary style={{ marginTop: 5 }}>
      <Menu.Menu position='right'>
        <Input
          style={{ marginRight: 5, marginBottom: 5 }}
          icon='search'
          placeholder='Search...'
          type='text'
          onChange={debouncedChangeHandler}
        />
        <Menu.Item
          style={{ paddingBottom: 15 }}
          as={Link}
          to={'/'}
          name='Books To Read'
          active={activeItem === 'Books To Read'}
          onClick={handleItemClick}
        />
        <Menu.Item
          style={{ paddingBottom: 15 }}
          as={Link}
          to={'/in-progress'}
          name='Books in Progress'
          active={activeItem === 'Books in Progress'}
          onClick={handleItemClick}
        />
        <Menu.Item
          style={{ paddingBottom: 15 }}
          as={Link}
          to={'/read'}
          name='Read Books'
          active={activeItem === 'Read Books'}
          onClick={handleItemClick}
        />
      </Menu.Menu>
    </Menu>
  );
};
