import { useState } from 'react';
import { useBooksContext } from '../../lib/books-context';
import { Link } from 'react-router-dom';
import { Input, Menu } from 'semantic-ui-react';

export const NavBar = () => {
  const { debouncedChangeHandler } = useBooksContext();
  const [activeItem, setActiveItem] = useState('Books Not Started');
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
          name='Books Not Started'
          active={activeItem === 'Books Not Started'}
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
          to={'/finished'}
          name='Finished Books'
          active={activeItem === 'Finished Books'}
          onClick={handleItemClick}
        />
      </Menu.Menu>
    </Menu>
  );
};
