import React from 'react'
import {Link} from "react-router-dom"
export default function PageNotFound() {
  return (
    <div className='container '>
        <div className='text-center'>
            <img className='img-fluid' width="50%" height="50%" src='./img/image.png'/>
            <h1 className='mb-5 text-danger'>Broken Link</h1>
            <Link className='btn btn-danger' to="/" >Try Again</Link>
        </div>
    </div>
  )
}
