import { Routes, Route } from 'react-router-dom';
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
      <Routes>
        <Route path='/'element={ <NotStartedBooks
            booksList={booksList}
            editBookStatus={editBookStatus}
          />}/>
        <Route path='/in-progress' element={ <BooksInProgress
            booksList={booksList}
            editBookStatus={editBookStatus}
          /> } />
        <Route path='/finished' element={<FinishedBooks booksList={booksList} editBookStatus={editBookStatus} />} />
      </Routes>
    </div>
  );
};
