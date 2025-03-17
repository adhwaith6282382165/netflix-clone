import React, { useState } from 'react'
import Add from '../components/Add'
import { Link } from '@mui/material'
import View from '../components/View'
import Category from '../components/Category'

function Home() {
  const [uploadVideoStatus, setUploadVideoSatus] = useState({})
  return (
    <>
      {/* first section */}
      <div className='container d-flex align-items-center mt-5 justify-content-between'>
        <Add setUploadVideoSatus={setUploadVideoSatus} />
        <Link to={'/watch'} style={{ textDecoration: 'none' }}>
          <span className='textStyle  fs-5 fw-bold '>WATCH HISTORY <i class="fa-solid fa-clock ms-2"></i></span>
        </Link>

      </div>
      {/* second section */}
      <div className='container-fluid mt-5 w-100 mb-5'>
        <div className='row'>
          <div className='col-md-9 textStyle'>
            <View uploadVideoStatus={uploadVideoStatus} />
          </div>
          <div className='col-md-3 textStyle'>
            <Category />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home