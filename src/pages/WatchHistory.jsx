import { colors } from '@mui/material'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';

import { getAllHistory } from '../services/allApi';

function WatchHistory() {

  const [allHistory, setAllHistory] = useState

  const getHistory = async () => {
    const res = await getAllHistory
    console.log("History");
    
    console.log(resp);
    const {data}= resp;
    setAllHistory(data)



  }
  useEffect(() => {
    getHistory()
  }, [])

  return (
    <>
      <div className='container mt-5 d-flex justify-content-between'>
        <h3 className='textStyle'>WATCH HISTORY</h3>
        <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}><i class="fa-solid fa-arrow-left"></i> BACK TO HOME</Link>
      </div>
      <table className='textStyle table mt-5 mb-5 container' data-bs-theme='dark'>
        <thead>
          <tr>
            <th>#</th>
            <th>CAPTION</th>
            <th>URL</th>
            <th>TIME</th>
            <th>ACTION</th>
          </tr>
        </thead>
        <tbody>
          {
            allHistory.length>0?
            allHistory.map((item)=>(
          <tr>
            <td>{item.id}</td>
            <td>{item.caption}</td>
            <td>{item.embededLink}</td>
            <td>{item.timeStamp}</td>
            <td><Button variant="danger" onClick={()=>deleteWatchHistory(item.id)}><i class="fa-solid fa-trash "></i></Button></td>
          </tr>
          )):
          <p>NO HISTORY FOUND</p>
          }
        </tbody>
      </table>
    </>
  )
}

export default WatchHistory