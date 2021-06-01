import { useState } from "react"
import { useBooksContext } from "../../lib/books-context"
import { Icon } from "semantic-ui-react"
import { ConfirmationModal } from "./confirmation-modal"

export const RemoveBook = ({
  book
}) => {
  const { removeBook } = useBooksContext();
  const [showModal, setShowModal] = useState(false)

  const handleOpenModal = () => setShowModal(true)
    const handleCloseModal = () => setShowModal(false)

  const handleRemoveBook = async () => {
    try {
      await removeBook(book?.id)
    } catch ({ message }) {
      alert(`Error @ handleRemoveBook, Error:${message}`)
    } finally {
      handleCloseModal()
    }
  }

  const handleCancelRemoveBook = () => {
    try {
      handleCloseModal()
    } catch ({ message }) {
      alert(`Error @ handleCancelRemoveBook, Error:${message}`)
    }
  }

  const headerMessage = `ARE YOU 100% SURE, You want to remove ${book?.title} by ${book?.author} from your library ?`
  return (
    <ConfirmationModal
      bookID={book?.id}
      handleCloseModal={handleCloseModal}
      handleOpenModal={handleOpenModal}
      showModal={showModal}
      headerColor={'red'}
      headerIconName={'x'}
      headerContent={'Remove Book'}
      modalHeaderColor={'red'}
      modalHeaderContent={headerMessage}
      cancelButtonColor={'red'}
      handleButtonCancel={handleCancelRemoveBook}
      buttonCancelContent={
        <>
          <Icon name='remove' />
          No
        </>
      }
      actionButtonColor={'green'}
      handleButtonAction={handleRemoveBook}
      buttonActionContent={
        <>
          <Icon name='checkmark' />
          Yes
        </>
      }
    />
  );
}



