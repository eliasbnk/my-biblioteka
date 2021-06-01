import { Button, Header, Icon, Modal } from 'semantic-ui-react';

export const ConfirmationModal = ({
  bookID,
  handleCloseModal,
  handleOpenModal,
  showModal,
  headerColor,
  headerIconName,
  headerContent,
  modalHeaderColor,
  modalHeaderContent,
  cancelButtonColor,
  handleButtonCancel,
  buttonCancelContent,
  actionButtonColor,
  handleButtonAction,
  buttonActionContent,
}) => {
  return (
    <div key={bookID}>
      <Modal
        basic
        onClose={handleCloseModal}
        onOpen={handleOpenModal}
        open={showModal}
        size='small'
        trigger={
          <Button fluid icon color='red'>
            <Icon name='x' />
          </Button>
        }
      >
        <Header icon color={headerColor}>
          <Icon name={headerIconName} />
          {headerContent}
        </Header>
        <Modal.Content>
          <Header color={modalHeaderColor} as='p'>
            {modalHeaderContent}
          </Header>
        </Modal.Content>
        <Modal.Actions>
          <Button color={cancelButtonColor} onClick={handleButtonCancel}>
            {buttonCancelContent}
          </Button>
          <Button color={actionButtonColor} onClick={handleButtonAction}>
            {buttonActionContent}
          </Button>
        </Modal.Actions>
      </Modal>
    </div>
  );
};
