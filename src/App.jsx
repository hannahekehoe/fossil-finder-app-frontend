import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Header } from "./Header";
import { Home } from "./Home";
import { Footer } from "./Footer";
import { FossilAreasIndex } from "./FossilAreasIndex";
import { FossilAreasShow } from "./FossilAreasShow";
// import { SharkTeethIndex } from "./SharkTeethIndex";
// import { SharkToothShow } from "./SharkToothShow";
// import { MyCollectionIndex } from "./MyCollectionIndex"

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/fossil_areas" element={<FossilAreasIndex />} />
        <Route path="/fossil_areas/:id" element={<FossilAreasShow />} />
        {/* <Route path="/shark_teeth" element={<SharkTeethIndex />} />
        <Route path="/shark_teeths/:id" element={<SharkToothShow />} /> */}
        {/* <Route path="/my_collection" element={<MyCollectionIndex />} /> */}
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
