import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
// PERBAIKAN: Mengubah Inhouse menjadi InHouse (menggunakan T besar)
import InHouseTrainingJakarta from "./pages/InHouseTrainingJakarta";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/inhouse-training-jakarta"
        element={<InHouseTrainingJakarta />}
      />
    </Routes>
  );
}

export default App;
