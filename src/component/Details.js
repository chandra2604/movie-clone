import React from 'react'
import { useNavigate, useLocation } from 'react-router-dom'
import "../Style/Details.css"
const Details = () => {
  const location = useLocation();

  const image_url = 'https://image.tmdb.org/t/p/w500/';

  console.log(location.state)
  return (<>

    <div className='details' >

      <h2 >Title : {location.state.title}</h2>
    </div>
    <div className='details' >

      <h3>Rating : {location.state.vote_average}</h3>

    </div>

    <div className='details'  >

      <p className='details'>Overview : {location.state.overview} </p>
    </div>
    <div className='details ' >

      <div className='image'>

        <img src={image_url + location.state.poster_path} />
      </div>

    </div>

  </>
  )
}

export default Details