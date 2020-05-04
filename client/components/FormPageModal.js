import React from 'react';
import { Modal, Button } from 'react-bootstrap';


function FormPageModal(props) {
  return (
    <React.Fragment>
      <Modal show={props.showModal} onHide={props.handleModalClose}>
        <Modal.Header closeButton />
        <Modal.Body>
          確定{props.editMode === 'edit' ? '修改' : '新增'}編號「{props.id}」的資料？
          {props.editMode === 'edit' ? '確定送出後會覆蓋原有的資料' : ''}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={props.handleModalClose}>
            取消
          </Button>
          <Button variant="primary" onClick={props.handleModalConfirm}>
            確定送出
          </Button>
        </Modal.Footer>
      </Modal>
    </React.Fragment>
  );
}

export default FormPageModal;
