
import React from 'react'
import '../Style/Page.css'


function Card(props) {
    let image_url = 'https://image.tmdb.org/t/p/w500';

    console.log({props})
    
  return (

<>

<div className='card-img' >
  
<div  className='card_car'>
{/* <img src={imgg}></img> */}
   
   <img className="card_cap img-fluid" src={image_url + props.data.poster_path} alt="Card image cap" />
  
</div>
</div>
</>
  )
}
export default Card;