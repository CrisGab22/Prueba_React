import React, { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import Post from "./post";
const Posts = () =>{

    const [posts, setPosts] = useState(false)

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res=> res.json())
        .then(info => setPosts(info.map(el => {return({id: el.id, title:el.title, body: el.body})})))
    },[])

    console.log(posts);

    return(
        <div className="container ">
            <Link to="/destacados" className="text-decoration-none">
        <div className="row mt-3 mb-4">  
                <button className="d-flex justify-content-center  btn btn-dark ">Destacados</button>
        </div>
            </Link>
        <h3 className="row justify-content-center">Posts</h3>
        {!posts? 
        <div className="d-flex justify-content-center mt-4">
            <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="loading" /> 
        </div>
        :
        <div className="row-cols-auto">

        {posts.map(el=> 
            <div className="col" key={el.id}>

            <Post
                id= {el.id}
                title= {el.title}
                body = {el.body}
                />
            
            </div>)}
        </div>
    }
        
        </div>
    )
}

export default Posts;