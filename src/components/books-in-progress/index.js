import { useBooksContext } from '../../lib/books-context';
import { Book } from '../book';

export const BooksInProgress = ({ booksList, editBookStatus }) => {
  const { query, handleInProgressBookCount } = useBooksContext();
  if (booksList === undefined) return <h1>Loading...</h1>;
  return (
    <>
      <div style={{ marginTop: 200 }} />
      {booksList
        .filter((book) => book.status === 'started, but not-complete')
        .reduce((filteredElements, curr) => {
          if (
            curr.title.toLowerCase().includes(query) ||
            curr.author.toLowerCase().includes(query)
          ) {
            let bookCount = filteredElements.length + 1;
            handleInProgressBookCount(bookCount);
            return filteredElements.concat([
              <div
                key={`books-in-progress-page-${curr?.id}`}
                style={{ marginTop: 25, paddingBottom: 15 }}
              >
                <Book
                  book={curr}
                  editBookStatus={editBookStatus}
                  buttonActionTwo={'completed'}
                  buttonActionOne={'quit'}
                />
              </div>,
            ]);
          }
          return filteredElements;
        }, [])}
    </>
  );
};
