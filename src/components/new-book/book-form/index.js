import { Button, Form, Header, Icon, Modal } from 'semantic-ui-react';
import { formOptions } from '../../../utils/form';
import { statusOptions } from '../../../utils/status';

export const BookForm = ({
  showModal,
  handleCloseModal,
  handleOpenModal,
  headerIconName,
  headerContent,
  bookAuthor,
  handleBookAuthor,
  bookImageURL,
  handleBookImageURL,
  bookTitle,
  handleBookTitle,
  bookStatus,
  handleBookStatus,
  modalActionButton,
  bookForm,
  handleBookForm,
}) => {
  return (
    <Modal
      closeIcon
      open={showModal}
      trigger={
        <Button>
          <Icon name='add' /> Add New Book
        </Button>
      }
      onClose={handleCloseModal}
      onOpen={handleOpenModal}
    >
      <Header icon={headerIconName} content={headerContent} />
      <Modal.Content>
        <Form>
          <Form.Group widths='equal'>
            <Form.Field>
              <Form.Input
                fluid
                label='Book Title'
                value={bookTitle}
                placeholder={bookTitle}
                onChange={(_, { value }) => handleBookTitle(value)}
              />
            </Form.Field>
            <Form.Field>
              <Form.Input
                fluid
                label='Author'
                value={bookAuthor}
                placeholder={bookAuthor}
                onChange={(_, { value }) => handleBookAuthor(value)}
              />
            </Form.Field>
          </Form.Group>

          <Form.Group widths='equal'>
            <Form.Field>
              <Form.Select
                fluid
                label='Book Status'
                value={bookStatus}
                options={statusOptions}
                placeholder={bookStatus}
                onChange={(_, { value }) => handleBookStatus(value)}
              />
            </Form.Field>
            <Form.Field>
              <Form.Select
                fluid
                label='Book Form'
                value={bookForm}
                options={formOptions}
                placeholder={bookForm}
                onChange={(_, { value }) => handleBookForm(value)}
              />
            </Form.Field>
          </Form.Group>
          <Form.Field>
            <Form.Input
              fluid
              label='Image URL'
              value={bookImageURL}
              placeholder={bookImageURL}
              onChange={(_, { value }) => handleBookImageURL(value)}
            />
          </Form.Field>
        </Form>
      </Modal.Content>
      <Modal.Actions>{modalActionButton}</Modal.Actions>
    </Modal>
  );
};
