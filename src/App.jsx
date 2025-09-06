import "./App.css";
import HookUseState from "./playground/HookUseState";
import HomeHooks from "./playground/HomeHooks";
import HookUseNavigate from "./playground/HookUseNavigate";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeHooks />} />
        <Route path="/useState" element={<HookUseState />} />
        <Route path="/useNavigate" element={<HookUseNavigate />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
