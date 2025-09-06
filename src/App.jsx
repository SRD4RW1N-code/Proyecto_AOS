import "./App.css";
import HookUseState from "./playground/HookUseState";
import HomeHooks from "./playground/HomeHooks";
import HookUseNavigate from "./playground/HookUseNavigate";
import HookUseActionState from "./playground/HookUseActionState";
import HookUseCallback from "./playground/HookUseCallback";
import HookUseDeferredValue from "./playground/HookUseDeferredValue";
import HookUseContext from "./playground/HookUseContext";
import HookUseDebugValue from "./playground/HookUseDebugValue";
import HookUseEffect from "./playground/HookUseEffect";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomeHooks />} />
        <Route path="/useState" element={<HookUseState />} />
        <Route path="/useNavigate" element={<HookUseNavigate />} />
        <Route path="/useActionState" element={<HookUseActionState />} />
        <Route path="/useCallback" element={<HookUseCallback />} />
        <Route path="/useContext" element={<HookUseContext />} />
        <Route path="/useDebugValue" element={<HookUseDebugValue />} />
        <Route path="/useDeferredValue" element={<HookUseDeferredValue />} />
        <Route path="/useEffect" element={<HookUseEffect />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
