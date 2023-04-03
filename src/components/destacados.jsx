import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Favs = () =>{
    const [info, setInfo] = useState(false);
    useEffect(()=>{
        setInfo(JSON.parse(localStorage.getItem("destacados")))
    },[])
    console.log(info)

    const deleteFav = (id) => {
        let filtered = info.filter(el => el.id !== id);    
        localStorage.setItem("destacados",JSON.stringify(filtered))
        setInfo(filtered)
    }

    return(
        <div className="container">
                 <Link to="/posts" className="text-decoration-none">
        <div className="row mt-3 mb-4">  
                <button className="d-flex justify-content-center  btn btn-dark ">Posts</button>
        </div>
            </Link>
        <h3 className="row justify-content-center">Destacados</h3>
            {info !== null && info?.length?
            info.map(el =>{
                return(
                    <div key={el.id} className="col mt-3 mb-3 d-flex flex-column align-items-center border rounded-3">
                        <p>#{el.id}</p>
                        <p>{el.title}</p>
                        <p>{el.body}</p>
                        <button className="btn mb-2 btn-danger" onClick={() => deleteFav(el.id)}>Eliminar</button>
                    </div>
                )
            })
            :
            <div className="d-flex justify-content-center mt-5">

            <h5>Aún no has agregado ningun post</h5>
            </div>
           
            }
        </div>
    )
}

export default Favs;