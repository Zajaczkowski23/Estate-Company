import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Suspense, lazy } from "react";
import NotFound from "./components/NotFound";

const Home = lazy(() => import("./components/Home"));
const BuildingDetail = lazy(() => import("./components/BuildingDetail"));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div
            class="inline-block h-8 w-8 absolute top-[50%] left-[50%] animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          >
            <span class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
              Loading...
            </span>
          </div>
        }
      >
        <Routes>
          <Route path="/Estate-Company" element={<Home />} />
          <Route path="/Estate-Company/:id" element={<BuildingDetail />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
