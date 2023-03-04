import "./NearMiss.css";
import Object from "./Object";
import { useEffect, useState } from "react";

const API_KEY = "gzXFIyaXzWNxV66ilT40cfEp2IHQ6IBsyveubt4D";

function NearMiss() {
  const [EarthObject, setEarthObject] = useState([]);
  const [View, setView] = useState("all");

  useEffect(() => {
    fetch(
      `https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=${API_KEY}`
    ).then((data) => {
      if (data.status === 200) {
        data.json().then((data) => {
          console.log(data);
          setEarthObject(data.near_earth_objects);
        });
      }
    });
  }, []);

  function handleDanger() {
    setView("dangerous");
    console.log(View);
  }

  function handleAll() {
    setView("all");
    console.log(View);
  }

  return (
    <div className="container">
      <div>
        <button type="button" onClick={handleAll}>
          All!
        </button>
        <button type="button" onClick={handleDanger}>
          Danger
        </button>
      </div>

      {!EarthObject.length && <div>Loading...</div>}
      {View === "all"
        ? EarthObject.map((object) => {
            return (
              <Object
                name={object.name}
                magnitude={object.absolute_magnitude_h}
                isDangerous={object.is_potentially_hazardous_asteroid.toString()}
              />
            );
          })
        : // Instead of this conditional check, .filter() can be used (see ln. 73)
          EarthObject.map((object) => {
            if (object.is_potentially_hazardous_asteroid === true)
              return (
                <Object
                  name={object.name}
                  magnitude={object.absolute_magnitude_h}
                  isDangerous={object.is_potentially_hazardous_asteroid.toString()}
                />
              );
          })}
    </div>
  );
} //closing bracket for func

export default NearMiss;

/*
ln 56 - : EarthObject.filter((object) => {
  return object.is_potentially_hazardous_asteroid;
}).map((object) => {
  return (
     <Object
                  name={object.name}
                  magnitude={object.absolute_magnitude_h}
                  isDangerous={object.is_potentially_hazardous_asteroid.toString()}
                />
  );
})
*/
