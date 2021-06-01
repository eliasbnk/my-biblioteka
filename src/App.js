import { Switch, Route } from 'react-router-dom';
import { NavBar } from './components/navbar';
import { BooksToRead } from './components/books-to-read';
import { BooksInProgress } from './components/books-in-progress';
import { ReadBooks } from './components/read-books';
import { useBooksContext } from './lib/books-context';

export const App = () => {
  const { booksList, editBookStatus} = useBooksContext();
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <BooksToRead
            booksList={booksList}
            editBookStatus={editBookStatus}
          />
        </Route>
        <Route path='/in-progress'>
          <BooksInProgress
            booksList={booksList}
            editBookStatus={editBookStatus}
          />
        </Route>
        <Route path='/read'>
          <ReadBooks booksList={booksList} editBookStatus={editBookStatus} />
        </Route>
      </Switch>
    </div>
  );
};
