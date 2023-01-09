import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export function SharkToothShow(props) {
  const { id } = useParams();

  const handleShowSharkTooth = () => {
    axios.get(`http://localhost:3000/shark_teeths/${id}.json`).then((response) => {
      setSharkTooth(response.data);
    });
  };

  const [sharkTooth, setSharkTooth] = useState([]);

  useEffect(handleShowSharkTooth, []);
  console.log(sharkTooth);
  return (
    <div>
      <h1>{sharkTooth.common_name}</h1>
      <h2>{sharkTooth.sci_name}</h2>
      <p>{sharkTooth.era}</p>
      <img src={sharkTooth.image_url} className="img-fluid" />
      <p>{sharkTooth.tooth_size}</p>
      <p>{sharkTooth.extinction}</p>
    </div>
  );
}
