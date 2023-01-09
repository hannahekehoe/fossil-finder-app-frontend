/// NEEDS TO BE FIXED
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function FossilAreasIndex() {
  const [fossilAreas, setFossilAreas] = useState([]);
  const [isFossilAreaShowVisible, setIsFossilAreaShowVisible] = useState(false);
  const [currentFossilArea, setCurrentFossilArea] = useState({});

  const handleIndexFossilAreas = () => {
    axios.get("http://localhost:3000/fossil_areas.json").then((response) => {
      console.log(response.data);
      setFossilAreas(response.data);
    });
  };

  const handleShowFossilArea = (fossilArea) => {
    // console.log(fossilArea);
    setIsFossilAreaShowVisible(true);
    setCurrentFossilArea(fossilArea);
    // console.log(currentFossilArea);
  };

  const handleHideFossilArea = () => {
    setIsFossilAreaShowVisible(false);
  };

  // const handleUpdateFossilArea = (id, params) => {
  //   axios.patch(`http://localhost:3000/fossil_areas/${id}.json`, params).then((response) => {
  //     setFossilAreas(
  //       fossilAreas.map((fossilArea) => {
  //         if (fossilArea.id === response.data.id) {
  //           return response.data;
  //         } else {
  //           return fossilArea;
  //         }
  //       })
  //     );
  //     handleHideFossilArea();
  //   });
  // };

  // const handleDestroyFossilArea = (fossilArea) => {
  //   axios.delete(`http://localhost:3000/fossil_areas/${fossilArea.id}.json`).then((response) => {
  //     setFossilAreas(fossilAreas.filter((p) => p.id !== fossilArea.id));
  //     handleHideFossilArea();
  //   });
  // };

  useEffect(handleIndexFossilAreas, []);

  // return (
  //
  // );
  return (
    <div>
      <div>
        {/* <Modal show={isFossilAreaShowVisible} onClose={handleHideFossilArea}>
          <FossilAreasShow
            fossilArea={currentFossilArea}
            // onFolssilAreaUpdate={handleUpdateFossilArea}
            // onFossilAreaDestroy={handleDestroyFossilArea}
          />
        </Modal> */}
      </div>
      <div id="fossil_areas-index">
        <h1>Where to find fossil shark teeth</h1>
        {fossilAreas.map((fossilArea) => (
          <div key={fossilArea.id}>
            <div className="card col-6">
              <img
                src={
                  "https://www.floridamuseum.ufl.edu/wp-content/uploads/sites/23/2019/10/06DCOFOVPMF0009_closeupsharkteeth.jpg"
                }
                className="d-block w-30"
                alt="..."
              />
              <h5>{fossilArea.state_name}</h5>
              <p>{fossilArea.area_name}</p>
              <Link className="btn btn-outline-info" to={`/fossil_areas/${fossilArea.id}`}>
                {" "}
                More info{" "}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
