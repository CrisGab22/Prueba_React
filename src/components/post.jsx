import React from "react";

const Post = ({id, title, body}) =>{
    function setPost(post) {
        console.log(post)
        let favs = JSON.parse(localStorage.getItem("destacados"))
        console.log(favs)
        if(favs === null || favs.length === 0){
            let newFav = [{id: id, title: title, body: body}]
            localStorage.setItem("destacados", JSON.stringify(newFav))
        }
        else{
            let existent = favs.filter(el => el.id === id);
            console.log(existent.length)
            if(existent.length !== 1){
                let newFav = favs.concat([{id: id, title: title, body: body}])
                console.log(newFav);
                localStorage.setItem("destacados",JSON.stringify(newFav))
            }
        }
    }
    return(
        <div className="col mt-3 mb-3 d-flex flex-column align-items-center border rounded-3">
            <p className="d-flex ">#{id}</p>
            <p className="d-flex  text-center">{title}</p>
            <p className="d-flex  text-center">{body}</p>
            <button className="btn mb-2 btn-success" onClick={() => setPost({id: id, title: title, body: body})}>Destacar</button>
        </div>
    )
}

export default Post;