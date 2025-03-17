import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';

import Modal from 'react-bootstrap/Modal';
import { addToHistory, deleteVideo } from '../services/allApi';
import { toast } from 'react-toastify';
import { data } from 'react-router-dom';


function VideoCard({ displayVideo, setDeleteVideoStatus }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = async () => {
        setShow(true);
        const { caption, embededLink } = displayVideo;
        const today = new Date();
        console.log(today);
        const year = today.getFullYear();
        const month = today.getMonth();
        const day = today.getDate()
        const hour = today.getHours()
        const minutes = String(today.getMinutes()).padStart(2, '0')
        const timeValue = `${day} - ${month + 1} - ${year} ${hour}:${minutes}`
        console.log(timeValue);

        const history = {
            caption: caption,
            embededLink: embededLink,
            timeStamp: timeValue
        }

        await addToHistory(history)


    };

    console.log("Each video item");
    console.log(displayVideo)
    const removeVideo = async (id) => {
        const response = await deleteVideo(id);
        console.log("delete response")
        console.log(response);
        if (response.status === 200) {
            setDeleteVideoStatus(response)
            toast.success(`${displayVideo.caption} successfully deleted !!`)
        }


    }



    return (
        <>
            <Card style={{ width: '16rem', marginTop: '40px', marginLeft: '20px', backgroundColor: '#6D6D6D', color: 'white' }}>
                <Card.Img variant="top" src={displayVideo.thumbnailUrl} height={'200px'}
                    onClick={handleShow}
                />
                <Card.Body>

                    <Card.Text>
                        <div className='d-flex justify-content-between'>
                            <Card.Title>{displayVideo.caption.slice(0, 12)}..</Card.Title>
                            <Button variant="danger" onClick={() => removeVideo(displayVideo.id)}><i class="fa-solid fa-trash "></i></Button>
                        </div>
                    </Card.Text>

                </Card.Body>
            </Card>

            <Modal
                show={show}
                onHide={handleClose}
                backdrop="static"
                keyboard={false}
            >
                <Modal.Header closeButton>
                    <Modal.Title>{displayVideo.caption}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <iframe width="100%" height="400px" src={displayVideo.embededLink} ></iframe>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    )
}

export default VideoCard