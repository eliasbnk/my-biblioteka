import { Switch, Route } from 'react-router-dom';
import { NavBar } from './components/navbar';
import { NotStartedBooks } from './components/not-started-books';
import { BooksInProgress } from './components/books-in-progress';
import { FinishedBooks } from './components/finished-books';
import { useBooksContext } from './lib/books-context';

export const App = () => {
  const { booksList, editBookStatus } = useBooksContext();
  return (
    <div>
      <NavBar />
      <Switch>
        <Route exact path='/'>
          <NotStartedBooks
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
        <Route path='/finished'>
          <FinishedBooks booksList={booksList} editBookStatus={editBookStatus} />
        </Route>
      </Switch>
    </div>
  );
};
