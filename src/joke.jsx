import { useState } from "react";
// in this file we had fetch the api , we use joke api from github. 

export default function Joke(){
    let [Joke, setJoke] = useState({});
    const URL = "https://official-joke-api.appspot.com/random_joke";

    const getNewJoke = async() =>{
        let response = await fetch(URL);
        let jsonResponse = await response.json();
        console.log(jsonResponse);
        setJoke({ setup :jsonResponse.setup , punchline: jsonResponse.punchline});

    };

    return(
        <div>
            <h1> Joke !</h1>
            <h2>{Joke.setup}</h2>
            <h2>{Joke.punchline}</h2>
            <button onClick={getNewJoke}>Get New Jokes </button>
        </div>
    )
}