import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import Card from "./Card"

const Newpage = () => {
  const [data, setdata] = useState([])
  const navigate = useNavigate();
  useEffect(() => {

    fetch('https://api.themoviedb.org/3/movie/popular?api_key=19655dd653e9bed5f5bb50746a1aa39f')
      .then((res) => res.json())
      .then(res => setdata(res.results))

  }, [])

  const handlenavigate = (data) => {

    navigate('details', { state: data })
  }
  { data.length > 0 && console.log(data[0].title) }

  let image_url = 'https://image.tmdb.org/t/p/w500/';


  return (
    <>
      <div className='row '>

        {data.length > 0 && data.map((item) => {
          console.log(item.title)
          return (
            <div className="col-lg-3" onClick={() => handlenavigate(item)} >
              <div  >

                <Card data={item} />
                {/* {item.title} */}
              </div>

            </div>

            
          )
        })

        }
      </div>
     
    </>
  );
}

export default Newpage;