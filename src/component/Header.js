import '../Style/Header.css';


function Test() {
  return (
    <>
      <nav class="navbar fixed-top navbar-expand-lg ">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Hotstar</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" 
             aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
           <a class="nav-link active" aria-current="page" href="#">Tv</a> 
           {/* <div class="dropdown"> 
              <button class="dropbtn">TV</button>
             <div class="dropdown-content">
                <a href="#">Other Show</a>
                <a href="#">HotstarSpecial</a>
                <a href="#">Quix</a>
                <a href="#">StarJalsha</a>
                <a href="#">StarVijay</a>
           </div>
          </div> */}
        </li>
        <li class="nav-item">
           <a class="nav-link" href="#">Movies</a> 
          {/* <div class="dropdown"> 
              <button class="dropbtn1">Movies</button>
             <div class="dropdown-content">
                <a href="#">Tamil</a>
                <a href="#">English</a>
                <a href="#">Malayalam</a>
                <a href="#">Telugu</a>
                <a href="#">Kanada</a>
                <a href="#">Hindi</a>
                <a href="#">Japanese</a>
           </div>
          </div> */}
        </li>
        <li class="nav-item">
           <a class="nav-link disabled">Sports</a> 
          {/* <div class="dropdown"> 
              <button class="dropbtn2">Sports</button>
             <div class="dropdown-content">
                <a href="#">Cricket</a>
                <a href="#">Football</a>
                <a href="#">Kabbadi</a>
                <a href="#">Hockey</a>
                <a href="#">Tennies</a>
                <a href="#">Athletics</a>
           </div>
          </div> */}
        </li>
        <li class="nav-item">
          <a class="nav-link disabled">Disney+</a>
       </li>

      </ul>
      
      <form class="d-flex" role="search">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success" type="submit">Search</button>
      {/* <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
             data-bs-target="#navbarToggleExternalContent" aria-controls="navbarToggleExternalContent"
              aria-expanded="false" aria-label="Toggle navigation">
       <span class="navbar-toggler-icon"></span>
        </button> */}
         </form>
    </div>
  </div>
</nav>

</>




    
  );
}

export default Test