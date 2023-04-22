import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import BuildingDetail from "./components/BuildingDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/estate-company" element={<Home />} />
        <Route path="/estate-company/:id" element={<BuildingDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
