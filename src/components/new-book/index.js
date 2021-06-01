import { useState } from 'react';
import { Button } from 'semantic-ui-react';
import { useBooksContext } from '../../lib/books-context';
import { BookForm } from './book-form';

export const AddNewBook = () => {
  const { addNewBook } = useBooksContext();
  const [newBookAuthor, setNewBookAuthor] = useState('');
  const [newBookImageURL, setNewBookImageURL] = useState('');
  const [newBookStatus, setNewBookStatus] = useState('');
  const [newBookTitle, setNewBookTitle] = useState('');
  const [newBookForm, setNewBookForm] = useState('');
  const [showModal, setShowModal] = useState(false);

  const handleBookAuthor = (value) => setNewBookAuthor(value);
  const handleBookImageURL = (value) => setNewBookImageURL(value);
  const handleBookStatus = (value) => setNewBookStatus(value);
  const handleBookTitle = (value) => setNewBookTitle(value);
  const handleBookForm = (value) => setNewBookForm(value);

  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);

  const handleClearForm = () => {
    setNewBookAuthor('');
    setNewBookImageURL('');
    setNewBookStatus('');
    setNewBookTitle('');
    setNewBookForm('');
  };

  const handleClearAndCloseForm = async () => {
    try {
      handleClearForm();
      handleCloseModal();
    } catch ({ message }) {
      alert(`Error @ handleClearAndCloseForm, Error:${message}`);
    }
  };

  const handleAddNewBook = async () => {
    try {
      await addNewBook({
        author: newBookAuthor,
        imageURL: newBookImageURL,
        status: newBookStatus,
        title: newBookTitle,
        form: newBookForm,
      });
    } catch ({ message }) {
      alert(`Error @ handleAddNewBook, Error:${message}`);
    } finally {
      await handleClearAndCloseForm();
    }
  };
  return (
    <div
      style={{
        marginTop: 10,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
      }}
    >
      <BookForm
        showModal={showModal}
        handleCloseModal={handleClearAndCloseForm}
        handleOpenModal={handleOpenModal}
        headerIconName={'book'}
        headerContent={'Add New Book'}
        bookAuthor={newBookAuthor}
        handleBookAuthor={handleBookAuthor}
        bookImageURL={newBookImageURL}
        handleBookImageURL={handleBookImageURL}
        bookTitle={newBookTitle}
        handleBookTitle={handleBookTitle}
        bookStatus={newBookStatus}
        handleBookStatus={handleBookStatus}
        bookForm={newBookForm}
        handleBookForm={handleBookForm}
        modalActionButton={
          <Button positive onClick={handleAddNewBook}>
            Add Book
          </Button>
        }
      />
    </div>
  );
};
