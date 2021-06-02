import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { db } from './firebase';
import { debounce } from 'lodash';

export const BooksContext = createContext({});

export const BooksContextProvider = ({ children }) => {
  const [booksList, setBooksList] = useState([]);
  const [query, setQuery] = useState('');
  const [notStartedBookCount, setNotStartedBookCount] = useState(0);
  const [inProgressBookCount, setInProgressBookCount] = useState(0);
  const [finishedBookCount, setFinishedBookCount] = useState(0);

  const handleNotStartedBookCount = (value) => setNotStartedBookCount(value);
  const handleInProgressBookCount = (value) => setInProgressBookCount(value);
  const handleFinishedBookCount = (value) => setFinishedBookCount(value);

  const fetchBooks = async () => {
    try {
      const data = await db.collection('books').get();
      setBooksList(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    } catch ({ message }) {
      alert(`Error @ fetchBooks, Error:${message}`);
    }
  };

  useEffect(() => {
    (async () => {
      await fetchBooks();
    })();
  }, []);

  const addNewBook = async (newBookInfo) => {
    try {
      await db.collection('books').add(newBookInfo);
    } catch ({ message }) {
      alert(`Error @ addNewBook, Error:${message}`);
    } finally {
      await fetchBooks();
    }
  };

  const editBookStatus = async (bookID, bookStatus) => {
    try {
      await db.collection('books').doc(bookID).set(bookStatus);
    } catch ({ message }) {
      alert(`Error @ editBookStatus, Error:${message}`);
    } finally {
      await fetchBooks();
    }
  };

  const removeBook = async (bookID) => {
    try {
      await db.collection('books').doc(bookID).delete();
    } catch ({ message }) {
      alert(`Error @ removeBook, Error:${message}`);
    } finally {
      await fetchBooks();
    }
  };

  const changeHandler = (event) => {
    setQuery(event.target.value.toLowerCase());

  };

  const debouncedChangeHandler = useMemo(
    () => debounce(changeHandler, 300),
    []
  );

  const context = {
    notStartedBookCount,
    inProgressBookCount,
    finishedBookCount,
    handleNotStartedBookCount,
    handleInProgressBookCount,
    handleFinishedBookCount,
    query,
    booksList,
    removeBook,
    addNewBook,
    editBookStatus,
    debouncedChangeHandler,
  };

  return (
    <BooksContext.Provider value={context}>{children}</BooksContext.Provider>
  );
};

export const useBooksContext = () => {
  const context = useContext(BooksContext);
  return context;
};



