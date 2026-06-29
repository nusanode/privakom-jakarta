import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import KursusKomputerTangerang from "./pages/KursusKomputerTangerang";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route
  path="/kursus-komputer-tangerang"
  element={<KursusKomputerTangerang />}
/>
    </Routes>
  );
}

export default App;
