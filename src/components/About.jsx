import React from 'react'
import { Link } from 'react-router-dom';

export default function About() {
  return (
    <div>
      <div className="container mt-5">
        <div className="card">
          <img src={"https://firebasestorage.googleapis.com/v0/b/lab7-3f089.appspot.com/o/me.jpg?alt=media&token=f95610c8-4a55-45ed-91db-d1d4cf3a360a" } className='card-img-top' alt="..." />
          <div className="card-body">
            <h5 className="card-title">Developer information</h5>
            <p>Long Nopphon (610612057)</p>
            <p>Nopphon chaiwanna</p>
            <Link to="/">
              <h3>
                <button type="button" className="btn btn-primary">Home</button>
              </h3>
            </Link>
          </div>

        </div>
        
      </div>
      
    </div>
  )
}
