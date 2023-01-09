import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export function FossilAreasShow(props) {
  const { id } = useParams();

  const handleShowFossilArea = () => {
    axios.get(`http://localhost:3000/fossil_areas/${id}.json`).then((response) => {
      setFossilArea(response.data);
    });
  };

  const [fossilArea, setFossilArea] = useState([]);

  useEffect(handleShowFossilArea, []);
  console.log(fossilArea);
  return (
    <div>
      <h1>{fossilArea.area_name}</h1>
      <p>{fossilArea.geologic_formation}</p>
      <p>{fossilArea.era}</p>
      <p>{fossilArea.description}</p>
      <p>{fossilArea.address}</p>
      <a href={fossilArea.hyperlink} target="_blank">
        {" "}
        {fossilArea.hyperlink}{" "}
      </a>
    </div>
  );
}
