import { useBooksContext } from '../../lib/books-context';
import { Book } from '../book';

export const BooksInProgress = ({ booksList, editBookStatus }) => {
  const { query } = useBooksContext();
  if (booksList === undefined) return <h1>Loading...</h1>;
  return (
    <>
      {booksList
        .filter((book) => book.status === 'started, but not-complete')
        .reduce((filteredElements, curr) => {
          if (
            curr.title.includes(query) ||
            curr.title.toLowerCase().includes(query) ||
            curr.title.toUpperCase().includes(query) ||
            curr.author.includes(query) ||
            curr.author.toLowerCase().includes(query) ||
            curr.author.toUpperCase().includes(query)
          ) {
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
