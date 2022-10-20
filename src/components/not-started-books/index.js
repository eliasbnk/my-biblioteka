import { useBooksContext } from '../../lib/books-context';
import { Book } from '../book';
import { AddNewBook } from '../new-book';

export const NotStartedBooks = ({ booksList, editBookStatus, addNewBook }) => {
  const { query, handleNotStartedBookCount } = useBooksContext();
  if (booksList === undefined) return <AddNewBook />;
  return (
    <>
      <div style={{ marginTop: 200 }} />
      <div>
        <AddNewBook addNewBook={addNewBook} />
      </div>

      {booksList
        .filter((book) => book.status === 'not started')
        .reduce((filteredElements, curr) => {
          if (
            curr.title.toLowerCase().includes(query) ||
            curr.author.toLowerCase().includes(query)
          ) {
            let bookCount = filteredElements.length + 1;
            handleNotStartedBookCount(bookCount);
            return filteredElements.concat([
              <div
                key={`books-to-read-page-${curr?.id}`}
                style={{ marginTop: 25, paddingBottom: 15 }}
              >
                <Book
                  book={curr}
                  editBookStatus={editBookStatus}
                  buttonActionOne={'reading'}
                  buttonActionTwo={'completed'}
                />
              </div>,
            ]);
          }
          return filteredElements;
        }, [])}
    </>
  );
};
