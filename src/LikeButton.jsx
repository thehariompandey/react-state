import { useState } from "react";
export default function LikeButton() {
    let [IsLiked , setIsLiked] = useState(false);
    let [clicked , setclicked] = useState(0);
    let toggleLike = () => {
        setIsLiked(!IsLiked);
        setclicked(clicked + 1);
        // new feature is added 
    };
    
    return(
        <div>
            <p>click ={clicked}</p>
        <p onClick={toggleLike}> {IsLiked ? (
            <i className="fa-solid fa-heart"></i>
         ): (<i className="fa-regular fa-heart"></i>)}
        </p>
        </div>
    );
}