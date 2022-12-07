import { useEffect, useState } from "react";
import Card from "./Card";
import "../Style/Page.css"

export default function Fetch (props)  {

     const[db,setdb]=useState([]);
    
    useEffect(() => {
        console.log('hgc')
        ApiCall()
        // alert("jjjj")
    }, []);
       
    const ApiCall=()=>{
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=19655dd653e9bed5f5bb50746a1aa39f')
        .then(response => response.json())
        .then(res=>setdb(res))
    }

    // useEffect(() => {
    //  console.log(db,"_____")
    //  db.map((item)=>{
    //     console.log(item.poster_path)
    //  })
    // }, [db])
    
        console.log(db.results[0])
            
    
    return (
        <>
            <div className="container-fluid">
                <div className="row row1">
                    <div className="col-lg-12">
                        <h3 className="rec">Recommended For U</h3>

                    </div>
                </div>
                <div className="row row2">hii
                    
                </div>         
            </div>
        </>

    );

}

// export default Fetch;
