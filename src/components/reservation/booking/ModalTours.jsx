import Form from 'react-bootstrap/Form';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/esm/Button";

export const ModalTours = ({
    handleCloseModal,
    showModalTours,
    handleChangeCheckbox,
    tours,
    selectedServices,
}) => {

  return (
    <Modal className='d-flex align-items-center' show={showModalTours} 
                onHide={handleCloseModal}
                backdrop="static"
                >
            <Modal.Header closeButton>
              <Modal.Title>Selección Servicios Extra</Modal.Title>
            </Modal.Header>
            
            <div className="mx-3 justify-content-center aligns-items-center  px-2 py-3">
                {tours.map((e) => (
                    <Form.Check  
                        type='checkbox' 
                        label={`${e.id}) ${e.name}, $${e.price}`}
                        value={e.id}
                        name={e.name}
                        key={e.id}
                        onChange={handleChangeCheckbox}
                        checked={selectedServices.includes(e.id)}
                        id={e.price}
                        />
                ))}
            </div>  
            <Modal.Footer>
             <Button variant="primary" onClick={handleCloseModal}>
                Seleccionar
              </Button>
            </Modal.Footer>
    </Modal>
  )
}