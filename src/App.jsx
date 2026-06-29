import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InHouseTrainingJakarta from "./pages/InhouseTrainingJakarta";

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
