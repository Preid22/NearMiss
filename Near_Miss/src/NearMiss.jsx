import "./NearMiss.css";
import { useEffect, useState } from "react";

const API_KEY = "gzXFIyaXzWNxV66ilT40cfEp2IHQ6IBsyveubt4D";

function NearMiss(){
    const [EarthObject, setEarthObject] = useState([]);

    useEffect(()=>{
        fetch(`https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`).then((data)=>{
            if(data.status === 200){
                data.json().then((data)=>{
                    console.log(data);
                    setEarthObject(data.near_earth_objects)
                })
            }
        })
    }, [])
    return (
        <div className="container">
            <div>
                <button type="button" onClick={()=>console.log('click')}>All</button>
                <button type="button" onClick={()=>console.log('click')}>Danger</button>
            </div>
            {EarthObject.map((object)=>{
            return (
                <div className="names">{object.name}</div>
            )
        })}</div>
    )
}

export default NearMiss