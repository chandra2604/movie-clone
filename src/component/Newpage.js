import React, { useEffect, useState  } from 'react'
// import {Link, useNavigate} from 'react-router-dom';import '../Style/Page.css';


const Newpage = () => {
    const[data,setdata]=useState([])
    // const navigate =useNavigate();
    useEffect(()=>{
      
         fetch('https://api.themoviedb.org/3/movie/popular?api_key=19655dd653e9bed5f5bb50746a1aa39f')
        .then((res) =>res.json())
        .then(res =>setdata(res.results))

    },[])
    
  //  const handlenavigate =(data)=>{
  //   navigate('/details',{state:{data}})
  //  }
  {data.length > 0 && console.log(data[0].title) }
  
  let image_url = 'https://image.tmdb.org/t/p/w500/';
  
    
  return (
    <>
 {  data.length>0 && <div className="container">
                <div className="row row1">
                    <div className="col-lg-12">
                        <h3 className="rec">Recommended For you</h3>
                       </div>
                </div>
                <div className="row row2" >
                <div className="col-lg-3" > 
                  <img className="img-fluid"  src={image_url+data[0]?.poster_path} alt='new' />
                </div>    
                <div className="col-lg-3"> 
                  <img className="img-fluid" src ={image_url+data[1].poster_path} alt ='second' />
                 </div> 
                <div className="col-lg-3"> 
                  <img className="img-fluid" src={image_url+data[2].poster_path} alt='third' />
                 </div> 
                <div className="col-lg-3"> 
                 <img className="img-fluid" src={image_url+data[3].poster_path}  alt='forth' />
                 </div> 
                </div> 
                 

                <div className="row row3">
                    <div className="col-lg-12">
                        <h3 className="rec">Trending</h3>
                       </div>
                </div>
                <div className="row row4">
                <div className="col-lg-3"> 
                  <img className="img-fluid" src={image_url+data[4].poster_path}  alt='five' />
                </div>    
                <div className="col-lg-3"> 
                  <img  className="img-fluid" src ={image_url+data[5].poster_path}  alt='six' />
                 </div> 
                <div className="col-lg-3"> 
                  <img className="img-fluid" src={image_url+data[6].poster_path}  alt='seven' />
                 </div> 
                <div className="col-lg-3"> 
                 <img className="img-fluid" src={image_url+data[7].poster_path}  alt='Eeight' />
                 </div> 
                </div> 

                <div className="row row5">
                    <div className="col-lg-12">
                        <h3 className="rec">Original</h3>
                       </div>
                </div>
                <div className="row row6">
                <div className="col-lg-3"> 
                  <img className="img-fluid" src={image_url+data[8].poster_path}  alt='Nine' />
                </div>    
                <div className="col-lg-3"> 
                  <img className="img-fluid" src = {image_url+data[9].poster_path} alt='Ten' />
                 </div> 
                <div className="col-lg-3"> 
                  <img className="img-fluid" src={image_url+data[10].poster_path}  alt='Eleven' />
                 </div> 
                <div className="col-lg-3"> 
                 <img  className="img-fluid" src={image_url+data[11].poster_path}  alt='Twelve' />
                 </div> 
                </div> 

                <div className="row row7">
                    <div className="col-lg-12">
                        <h3 className="rec">Streaming now</h3>
                       </div>
                </div>
                <div className="row row8">
                <div className="col-lg-3"> 
                  <img  className="img-fluid" src={image_url+data[12].poster_path}  alt='img1' />
                </div>    
                <div className="col-lg-3"> 
                  <img className="img-fluid" src ={image_url+data[13].poster_path}  alt='img2' />
                 </div> 
                <div className="col-lg-3"> 
                  <img className="img-fluid" src={image_url+data[14].poster_path}  alt='img3' />
                 </div> 
                <div className="col-lg-3"> 
                 <img className="img-fluid" src={image_url+data[15].poster_path}  alt='img4' />
                 </div> 
                </div> 

                <div className="row row9">
                    <div className="col-lg-12">
                        <h3 className="rec">Enjoy Now</h3>
                       </div>
                </div>
                <div className="row row10">
                <div className="col-lg-3"> 
                  <img  className="img-fluid" src={image_url+data[16].poster_path}  alt='img1' />
                </div>    
                <div className="col-lg-3"> 
                  <img className="img-fluid" src ={image_url+data[17].poster_path}  alt='img2' />
                 </div> 
                <div className="col-lg-3"> 
                  <img className="img-fluid" src={image_url+data[18].poster_path}  alt='img3' />
                 </div> 
                <div className="col-lg-3"> 
                 <img className="img-fluid" src={image_url+data[19].poster_path}  alt='img4' />
                 </div> 
                </div> 
                </div>}
                </>       
  );
}

export default Newpage;