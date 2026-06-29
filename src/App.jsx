import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import KursusKomputerJakarta from "./pages/KursusKomputerJakarta";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
        path="/kursus-komputer-jakarta"
        element={<KursusKomputerJakarta />}
      />
    </Routes>
  );
}

export default App;
