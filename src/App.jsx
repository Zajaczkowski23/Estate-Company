import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import BuildingDetail from "./components/BuildingDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:id" element={<BuildingDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
