import React, { useEffect } from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import { toast } from 'react-toastify';
import { addCategory, deleteCategory, getAllCategories } from '../services/allApi';

function Category() {
  const [show, setShow] = useState(false);
  const [categories, setCategories] = useState()

  const handleClose = () => {
    setShow(false);
    setCategoryName("")
  }
  const handleShow = () => setShow(true);
  const [categoryName, setCategoryName] = useState("")
  const handleAddCategory = async () => {
    if (!categoryName) {
      toast.warning("Please fill The Category Name")
    }
    else {
      const body = {
        categoryName: categoryName,
        allVideos: []
      }
      const response = await addCategory(body);
      console.log("category response");
      console.log(response);
      if (response.status === 201) {
        toast.success(`${categoryName} successfully saved`)
      }


      handleClose()
    }
  }

  const getCategories = async () => {
    const response = await getAllCategories()
    console.log("categories");
    console.log(response)
    const { data } = response;
    setCategories(data)


  }

  const removeCategory = async (id) =>{
const res2 = await deleteCategory(id)
console.log(res2);

  }

  useEffect(() => {
    getCategories()
  }, [categories])

  return (
    <>
      <div>
        <button className='btn btn-warning' onClick={handleShow}>ADD NEW CATEGORY</button>
      </div>
      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
        data-bs-theme='dark'
      >
        <Modal.Header closeButton>
          <Modal.Title className='textStyle'><i class="fa-solid fa-list text-warning me-3"></i>UPLOAD VIDEO</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p className='textStyle fw-bolder'>PLEASE FILL THE FORM</p>
          <Form className='border border-secondary p-3 rounded'>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control type="email" placeholder="CATEGORY NAME"
                onChange={(e) => setCategoryName(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            CANCEL
          </Button>
          <Button variant="primary" onClick={handleAddCategory}>ADD</Button>
        </Modal.Footer>
      </Modal>

      {
        categories?.map((item) => (
          <div className='border border-secondary rounded p-2 mt-4'>
            <div className='d-flex justifiy-content-evenly align-items-center'>
              <h6>{item.categoryName}</h6>
              <button className='btn btn-danger' onClick={() => removeCategory(item.id)}><i class="fa-solid fa-trash"></i></button>

            </div>

          </div>
        ))
      }
    </>
  )
}

export default Category