import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import InhouseTrainingJakarta from "./pages/InhouseTrainingJakarta";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/inhouse-training-jakarta"
        element={<InhouseTrainingJakarta />}
      />
    </Routes>
  );
}

export default App;
