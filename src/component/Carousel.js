 import img1 from"../image/slider-badging.jpg";
 import img2 from"../image/slider-badag.jpg";
 import img3 from"../image/slider-scale.jpg"
// import Carousel from 'react-bootstrap/Carousel';
// import './Carousel.css';

// function Car(){
//     return(
//         <div>
//         <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
//         <ol class="carousel-indicators">
//           <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
//           <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
//           <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
//         </ol>
//         <div class="carousel-inner">
//           <div class="carousel-item active">
//             <img class="d-block w-100" src="..." alt="First slide">
//           </div>
//           <div class="carousel-item">
//             <img class="d-block w-100" src="..." alt="Second slide">
//           </div>
//           <div class="carousel-item">
//             <img class="d-block w-100" src="..." alt="Third slide">
//           </div>
//         </div>
//         <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
//           <span class="carousel-control-prev-icon" aria-hidden="true"></span>
//           <span class="sr-only">Previous</span>
//         </a>
//         <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
//           <span class="carousel-control-next-icon" aria-hidden="true"></span>
//           <span class="sr-only">Next</span>
//         </a>
//       </div>
//       </div>
//     );
// }
// export default Car;

import Carousel from 'react-bootstrap/Carousel';

function Car() {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h1>Welcome!...</h1>
          {/* <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h2>Millions of movies, TV shows and people to discover.</h2>
          {/* <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p> */}
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />

        <Carousel.Caption>
          <h2>Explore now.</h2>
          {/* <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p> */}
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Car;