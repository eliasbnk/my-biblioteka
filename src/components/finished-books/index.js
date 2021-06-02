import { useBooksContext } from '../../lib/books-context';
import { Book } from '../book';

export const FinishedBooks = ({ booksList, editBookStatus }) => {
  const { query, handleFinishedBookCount } = useBooksContext();
  if (booksList === undefined) return <h1>Loading...</h1>;
  return (
    <div>
      <div style={{ marginTop: 200 }} />
      {booksList
        .filter((book) => book.status === 'completed')
        .reduce((filteredElements, curr) => {
          if (
            curr.title.toLowerCase().includes(query) ||
            curr.author.toLowerCase().includes(query)
          ) {
            let bookCount = filteredElements.length + 1
            handleFinishedBookCount(bookCount);
            return filteredElements.concat([
              <div
                key={`read-books-page-${curr?.id}`}
                style={{ marginTop: 25, paddingBottom: 15 }}
              >
                <Book
                  book={curr}
                  editBookStatus={editBookStatus}
                  buttonActionOne={'re-read'}
                  buttonActionTwo={null}
                />
              </div>,
            ]);
          }

          return filteredElements;
        }, [])}
    </div>
  );
};
