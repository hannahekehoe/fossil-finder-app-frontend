import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export function SharkTeethIndex() {
  const [sharkTeeth, setSharkTeeth] = useState([]);
  const [isSharkToothShowVisible, setIsSharkToothShowVisible] = useState(false);
  const [currentSharkTooth, setCurrentSharkTooth] = useState({});

  const handleIndexSharkTeeth = () => {
    axios.get("http://localhost:3000/shark_teeths.json").then((response) => {
      console.log(response.data);
      setSharkTeeth(response.data);
    });
  };

  const handleShowSharkTeeth = (sharkTeeth) => {
    console.log(sharkTeeth);
    setIsSharkToothShowVisible(true);
    setCurrentSharkTooth(sharkTeeth);
    // console.log(currentFossilArea);
  };

  const handleHideSharkTeeth = () => {
    setIsSharkToothShowVisible(false);
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

  useEffect(handleIndexSharkTeeth, []);

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
      <div id="sharkTeeth-index">
        <h1>Fossil shark teeth</h1>
        {sharkTeeth.map((sharkTeeth) => (
          <div key={sharkTeeth.id}>
            <div className="card col-6">
              <img
                src={
                  "https://preview.redd.it/ve8pxcjtaoz31.jpg?width=640&crop=smart&auto=webp&s=7b0303fc2cc92a3aba44d999a9d6cc4dc7cf85a1"
                }
                className="d-block w-30"
                alt="..."
              />
              <h5>{sharkTeeth.common_name}</h5>
              <p>{sharkTeeth.sci_name}</p>
              <Link className="btn btn-outline-info" to={`/shark_teeths/${sharkTeeth.id}`}>
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
