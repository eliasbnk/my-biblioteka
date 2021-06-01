import { Button, Card, Image } from 'semantic-ui-react';
import { RemoveBook } from '../remove-book';

export const Book = ({
  editBookStatus,
  buttonActionOne,
  buttonActionTwo,
  book,
}) => {
  const handleCompleted = async () => {
    try {
      await editBookStatus(book?.id, {
        ...book,
        status: 'completed',
      });
    } catch ({ message }) {
      alert(`Error @ handleCompleted, Error:${message}`);
    }
  };

  const handleReRead = async () => {
    try {
      await editBookStatus(book?.id, {
        ...book,
        status: 'not started',
      });
    } catch ({ message }) {
      alert(`Error @ handleReRead, Error:${message}`);
    }
  };

  const handleReading = async () => {
    try {
      await editBookStatus(book?.id, {
        ...book,
        status: 'started, but not-complete',
      });
    } catch ({ message }) {
      alert(`Error @ handleReading, Error:${message}`);
    }
  };
  console.log(book.imageURL);
  return (
    <Card style={{ marginLeft: 'auto', marginRight: 'auto' }}>
      <Image src={book?.imageURL} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{book?.title}</Card.Header>
        <Card.Meta>{book?.author}</Card.Meta>
        <div
          style={{
            marginTop: 10,
            marginLeft: 'auto',
            marginRight: 'auto',
            textAlign: 'center',
          }}
        >
          {
            <Button
              onClick={
                buttonActionOne === 'completed'
                  ? handleCompleted
                  : buttonActionOne === 'reading'
                  ? handleReading
                  : buttonActionOne === 're-read'
                  ? handleReRead
                  : buttonActionOne === 'quit'
                  ? handleReRead
                  : alert(`An Error Occured`)
              }
            >
              {buttonActionOne === 'reading' && book?.form === 'audio'
                ? 'listening'
                : buttonActionOne === 're-read' && book?.form === 'audio'
                ? 're-listen'
                : buttonActionOne}
            </Button>
          }
          {buttonActionTwo === 'completed' ? (
            <Button onClick={handleCompleted}>{buttonActionTwo}</Button>
          ) : (
            <></>
          )}
        </div>
      </Card.Content>
      <RemoveBook book={book} />
    </Card>
  );
};
