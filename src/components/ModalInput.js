// add a ModalInput movie card description contains : 1 : title , 2 : description , 3 : posterUrl , 4 : rate, 
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import Modal from 'react-bootstrap/Modal'
import ModalBody from "react-bootstrap/ModalBody";
import ModalHeader from "react-bootstrap/ModalHeader";
import ModalFooter from "react-bootstrap/ModalFooter";
import ModalTitle from "react-bootstrap/ModalTitle";
import Button from "react-bootstrap/Button";
import { useState , useRef } from "react"
import Form from 'react-bootstrap/Form'


function Add (props){
  const [id, setId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [posterUrl, setPosterUrl] = useState("");
  const [rate, setRate] = useState("");
  const [show, setShow] = useState(false);
  const array =[];
  const arr = [...array,title,description,posterUrl,rate];
      const handleClose = () => setShow(false);
      const handleShow = () =>  setShow(true);


      const handleAdd = () => {
       
        props.addMovie({id,title,description,posterUrl,rate})
      };
        
 
      
 return (
   <>
      <Button variant="primary" className="add" onClick={handleShow}>
       Add Movie
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>ADD Movie {arr}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
             <Form.Group>
                <Form.Label>ID: </Form.Label>
                <Form.Control type="text" name ="id" placeholder="Enter id"  onChange={event => setId(event.target.value)} />
            </Form.Group>
      
              <Form.Group>
                <Form.Label>Title :   </Form.Label>
                <Form.Control type="text" name ="title"placeholder="Enter Title"  onChange={event => setTitle(event.target.value)} />
              </Form.Group>

              <Form.Group>
                <Form.Label>Description :</Form.Label>
                <Form.Control type="text" name="description"placeholder="Description"  onChange={event => setDescription(event.target.value)} />
              </Form.Group>
             
              <Form.Group>
                <Form.Label>posterUrl :</Form.Label>
                <Form.Control type="text" placeholder="posterUrl"  onChange={event => setPosterUrl(event.target.value)} />
              </Form.Group>
             

              <Form.Group>
                <Form.Label>Rate :</Form.Label>
                <Form.Control type="text" placeholder="rate"  onChange={event => setRate(event.target.value)} />
              </Form.Group>
            </Form>
            
            
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close 
          </Button>
          <Button variant="success" onClick={handleAdd}>
           Add
          </Button>
        </Modal.Footer>
      </Modal>
   </>
 );
}

export default Add;
