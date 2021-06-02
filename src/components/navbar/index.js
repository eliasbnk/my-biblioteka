import { useState } from 'react';
import { useBooksContext } from '../../lib/books-context';
import { Link } from 'react-router-dom';
import { Input, Label, Menu } from 'semantic-ui-react';

export const NavBar = () => {
  const {
    debouncedChangeHandler,
    notStartedBookCount,
    inProgressBookCount,
    finishedBookCount,
  } = useBooksContext();
  const [activeItem, setActiveItem] = useState('Books Not Started');
  const handleItemClick = (_, { name }) => setActiveItem(name);
  return (
    <div>
      <Menu
        pointing
        secondary
        style={{ zindex: 999, backgroundColor: 'white', textAlign: 'center' }}
        stackable
        fixed='top'
      >
        <Menu.Menu position='right'>
          <Input
            style={{ marginRight: 5, marginBottom: 5, marginTop: 7 }}
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
          >
            Books Not Started
            <Label color='grey'>{notStartedBookCount}</Label>
          </Menu.Item>
          <Menu.Item
            style={{ paddingBottom: 15 }}
            as={Link}
            to={'/in-progress'}
            name='Books in Progress'
            active={activeItem === 'Books in Progress'}
            onClick={handleItemClick}
          >
            Books in Progress
            <Label color='olive'>{inProgressBookCount}</Label>
          </Menu.Item>
          <Menu.Item
            style={{ paddingBottom: 15 }}
            as={Link}
            to={'/finished'}
            name='Finished Books'
            active={activeItem === 'Finished Books'}
            onClick={handleItemClick}
          >
            Finished Books
            <Label color='teal'>{finishedBookCount}</Label>
          </Menu.Item>
        </Menu.Menu>
      </Menu>
    </div>
  );
};
