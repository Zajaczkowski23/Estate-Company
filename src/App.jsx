import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import BuildingDetail from "./components/BuildingDetail";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/Estate-Company" element={<Home />} />
        <Route path="/Estate-Company/:id" element={<BuildingDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
